"use client";

import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-10 py-3 border-b border-white/7 backdrop-blur-xl">
      <Link href={"/"}>
        <Image
         src={'/logo.png'}
         width={100}
         height={100}
         alt="prept logo"
         className="h-11 w-auto"
        />
      </Link>
      {/* redirection logic */}

      {/* sign in  */}

      <div className="flex items-center gap-3">
        {!isSignedIn ? (
          <> 
          {/* links */}

            <SignInButton mode="modal">
              <Button variant="ghost">Sign In</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button variant="gold">Get Started →</Button>
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
