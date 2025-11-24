"use client";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function HamburgerUserBox() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center gap-2 p-2">
        <span>Načítání...</span>
      </div>
    );
  }

  if (!session) {
    return (
      <Link href="/authentication/login">
        <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded transition">
          <FontAwesomeIcon icon={faUser} />
          <span>Přihlásit se</span>
        </div>
      </Link>
    );
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 transition w-full">
        {session.user?.image ? (
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={session.user.image}
              alt={session.user.name || "Avatar"}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <FontAwesomeIcon icon={faUser} className="text-xl" />
        )}
        <div className="flex flex-col">
          <span className="font-medium">{session.user?.name}</span>
          <span className="text-xs text-gray-500">{session.user?.email}</span>
        </div>
      </div>

      <div className="flex flex-col gap-1 w-full">
        <Link href="/account">
          <div className="p-2 rounded hover:bg-gray-100 transition w-full text-left">
            Můj účet
          </div>
        </Link>

        <button
          onClick={() => signOut()}
          className="flex items-center gap-2 p-2 rounded bg-red-500 text-white hover:bg-gray-100 transition w-full text-left"
        >
          <FontAwesomeIcon icon={faRightFromBracket} />
          Odhlásit se
        </button>
      </div>
    </div>
  );
}
