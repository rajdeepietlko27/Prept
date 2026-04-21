"use server";

import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export const getCurrentUser = async () => {
  const user = await currentUser();
  if (!user) return null;

  // Retry up to 3 times with delay to handle post-onboarding timing
  for (let i = 0; i < 3; i++) {
    const dbUser = await db.user.findUnique({
      where: { clerkUserId: user.id },
      select: {
        role: true,
        name: true,
        title: true,
        company: true,
        imageUrl: true,
      },
    });

    if (dbUser?.role) return dbUser;

    // Wait 500ms before retrying
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  return null;
};