import arcjet, { detectBot, shield } from "@arcjet/next";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/appointments(.*)",
  "/explore(.*)",
  "/dashboard(.*)",
  "/onboarding(.*)",
]);

const isWebhookRoute = createRouteMatcher(["/api/webhooks/stream(.*)"]);

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE", "CATEGORY:PREVIEW"],
    }),
  ],
});

export default clerkMiddleware(async (auth, req) => {
  if (!isWebhookRoute(req)) {
    const decision = await aj.protect(req);
    if (decision.isDenied()) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }

  if (isProtectedRoute(req)) {
    await auth.protect();
  }

  const { userId } = await auth();
  const path = req.nextUrl.pathname;

  if (userId) {
    const { db } = await import("@/lib/prisma");
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
      select: { role: true },
    });

    const onOnboarding = path.startsWith("/onboarding");

    // No role → send to onboarding
    if (!user?.role && !onOnboarding) {
      return NextResponse.redirect(new URL("/onboarding", req.url));
    }

    // Already onboarded → don't let them back to onboarding
    if (user?.role && onOnboarding) {
      return NextResponse.redirect(
        new URL(user.role === "INTERVIEWER" ? "/dashboard" : "/explore", req.url)
      );
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};