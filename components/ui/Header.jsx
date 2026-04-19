import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";
import CreditButton from "../CreditButton";
import { CalendarDays, Users } from "lucide-react";
import AuthButtons from "../AuthButton";
import RoleRedirect from "../RoleRedirect";

const Header = async () => {
  const user = await checkUser();
  const { userId } = await auth();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-3 sm:px-10 py-3 border-b border-white/7 backdrop-blur-xl">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="prept logo"
          width={100}
          height={100}
          className="h-11 w-auto"
        />
      </Link>

      {/* redirection logic */}
      { user && <RoleRedirect role={user.role} />  }
      

      <div className="flex items-center gap-3">
        {!userId ? (
          <AuthButtons />
        ) : (
          <>
            {user?.role === "INTERVIEWER" && (
              <Button variant="ghost" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            )}

            {user?.role === "INTERVIEWEE" && (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/explore">
                    <Users size={16} />
                    <span className="hidden md:inline">Explore</span>
                  </Link>
                </Button>
                <Button variant="default" asChild>
                  <Link href="/appointments">
                    <CalendarDays size={16} />
                    <span className="hidden md:inline">My Appointments</span>
                  </Link>
                </Button>
              </>
            )}

            <CreditButton
              role={user?.role === "INTERVIEWER" ? "INTERVIEWER" : "INTERVIEWEE"}
              credits={
                (user?.role === "INTERVIEWER"
                  ? user?.creditBalance
                  : user?.credits) ?? 0
              }
            />

            <UserButton />
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;