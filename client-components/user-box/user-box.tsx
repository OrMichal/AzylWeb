"use client";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function UserBox() {
  const { data: session, status } = useSession();
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    document.addEventListener("click", (e: MouseEvent) => {
      const details = detailsRef.current;
      if (details?.open && !details.contains(e.target as Node)) {
        details.removeAttribute("open");
      }
    });
  }, []);

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
    <details className="relative group w-40" ref={detailsRef}>
      <summary
        className="flex gap-5 items-center p-2 shadow rounded-2xl w-full 
         select-none group-open:rounded-t-2xl group-open:rounded-b-none group-open:bg-gray-100"
      >
        {session.user.image ? (
          <div className="relative w-10 h-10">
            <Image
              src={session.user.image}
              fill
              alt="daisy-user-pfp"
              className="rounded-full"
            />
          </div>
        ) : (
          <FontAwesomeIcon icon={faUser} />
        )}
        <span className="">{session.user.name}</span>
      </summary>
      <div className="absolute flex flex-col items-center *:w-full rounded-b-2xl shadow p-2 bg-white w-full">
        <span></span>
        <button
          className="bg-red-700 text-white p-1 rounded-lg"
          onClick={() => signOut()}
        >
          Odhlásit se
        </button>
      </div>
    </details>
  );
}
