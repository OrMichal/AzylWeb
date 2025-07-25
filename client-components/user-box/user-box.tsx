"use client";
import { AppButton } from "@/elements/app-button/app-button";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut, useSession } from "next-auth/react";
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
      <Link href="authentication/login">
        <div className="p-1 pl-2 pr-2 flex gap-2 items-center">
          <FontAwesomeIcon icon={faUser} />
          <span> Přihlásit se </span>
        </div>
      </Link>
    );
  }

  return (
    <details>
      <summary className="flex gap-2">
        <FontAwesomeIcon icon={faUser} />
        <span>{session.user.name}</span>
      </summary>

      <AppButton label="Odhlásit se" onClick={() => signOut()} />
    </details>
  );
}
