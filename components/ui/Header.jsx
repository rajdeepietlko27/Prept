import { auth } from "@clerk/nextjs/server";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./button";
import { cn } from "@/lib/utils";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  await checkUser();
  const { userId } = await auth();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-10 py-3 border-b border-white/7 backdrop-blur-xl">
      <Link href="/">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="prept logo"
          className="h-11 w-auto"
        />
      </Link>

      <div className="flex items-center gap-3">
        {!userId ? (
          <>
            <SignInButton mode="modal" className={cn(buttonVariants({ variant: "ghost" }))}>
              Sign In
            </SignInButton>
            <SignUpButton mode="modal" className={cn(buttonVariants({ variant: "gold" }))}>
              Get Started →
            </SignUpButton>
          </>
        ) : (
          <UserButton />
        )}
      </div>
    </nav>
  );
};

export default Header;