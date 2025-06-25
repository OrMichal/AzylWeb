"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

export function UserBox() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div>
        <span> Načítání... </span>
      </div>
    );
  }

  if (!session) {
    return (
      <Link href="/authentication/login">
        <div
          className="
            shadow p-1 pl-2 pr-2 rounded-full bg-amber-400
            hover:bg-amber-300
          "
        >
          <span> Přihlásit se </span>
        </div>
      </Link>
    );
  }

  return <p>aha, přihlášen jako {session.user.email}</p>;
}
