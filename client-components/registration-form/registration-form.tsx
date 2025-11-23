"use client";
import { AppButton } from "@/elements/app-button/app-button";
import { AppFormCredential } from "@/elements/app-form-credential/app-form-credential";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export interface IRegistrationData {
  username: string;
  email: string;
  firstname: string;
  middlename: string | null;
  lastname: string;
  password: string;
}

export function RegistrationForm() {
  const [regData, setRegData] = useState<IRegistrationData>({
    username: "",
    email: "",
    firstname: "",
    middlename: null,
    lastname: "",
    password: "",
  });

  const [samePasswords, setSamePasswords] = useState<Boolean>(false);

  const registerMutation = useMutation({
    mutationKey: ["registerMut"],
    mutationFn: () =>
      fetch(`/api/authentication/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(regData),
      }).then((data) => data.json()),
    onSuccess: async () => {
      toast.success("Registrace proběhla úspěšně");
      await signIn("credentials", {
        redirect: false,
        email: regData.email,
        password: regData.password,
      });
    },
    onError: (e) => toast.error("Něco se pokazilo: " + e),
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    registerMutation.mutate();
  };

  return (
    <form
      className="flex flex-col items-center gap-15 rounded-2xl  p-8 w-full"
      onSubmit={handleSubmit}
    >
      <h2 className="self-center text-3xl font-medium">Registrace</h2>
      <div className="flex flex-col gap-9">
        <div className="flex flex-col lg:gap-10 lg:flex-row sm:flex-col items-center justify-between w-full">
          <AppFormCredential
            name="firstname"
            label=""
            placeholder="jméno"
            icon={faUser}
            required
            onChange={(e) =>
              setRegData({ ...regData, firstname: e.target.value })
            }
          />
          <AppFormCredential
            name="middlename"
            label=""
            placeholder="druhé jméno"
            icon={faUser}
            required
            onChange={(e) =>
              setRegData({ ...regData, middlename: e.target.value })
            }
          />
          <AppFormCredential
            name="lastname"
            label=""
            placeholder="příjmení"
            icon={faUser}
            required
            onChange={(e) =>
              setRegData({ ...regData, lastname: e.target.value })
            }
          />
        </div>
        <div className="flex lg:flex-row sm:flex-col lg:justify-between sm:gap-10 w-full ">
          <AppFormCredential
            name="username"
            type="text"
            label=""
            placeholder="uživatelské jméno"
            icon={faUser}
            required
            onChange={(e) =>
              setRegData({ ...regData, username: e.target.value })
            }
          />
          <AppFormCredential
            name="email"
            type="email"
            label=""
            placeholder="email"
            icon={faEnvelope}
            required
            onChange={(e) => setRegData({ ...regData, email: e.target.value })}
          />
        </div>
        <div className="flex lg:flex-row sm:flex-col lg:justify-between sm:gap-10 w-full">
          <AppFormCredential
            name="password"
            type="password"
            label=""
            placeholder="heslo"
            icon={faLock}
            required
            onChange={(e) =>
              setRegData({ ...regData, password: e.target.value })
            }
          />
          <AppFormCredential
            name="password confirm"
            type="password"
            label=""
            placeholder="potvrzení hesla"
            icon={faLock}
            required
            onChange={(e) =>
              setRegData({ ...regData, password: e.target.value })
            }
          />
        </div>
      </div>
      <AppButton type="submit" className="w-80 mt-15" label="Registrovat se" />
      <span>
        Už máte účet?{" "}
        <Link
          href={"/authentication/login"}
          className="underline text-blue-700"
        >
          Přihlaste se
        </Link>{" "}
      </span>
    </form>
  );
}
