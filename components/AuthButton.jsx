// components/ui/AuthButtons.jsx
"use client";

import { SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
// import { Button } from "./button";

export default function AuthButtons() {
  return (
    <>
      <SignInButton mode="modal">
        <Button variant="ghost">Sign In</Button>
      </SignInButton>
      <SignInButton mode="modal">
        <Button variant="gold">Get Started →</Button>
      </SignInButton>
    </>
  );
}