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
  passwordConfirm: string;
}

export function RegistrationForm() {
  const [regData, setRegData] = useState<IRegistrationData>({
    username: "",
    email: "",
    firstname: "",
    middlename: "",
    lastname: "",
    password: "",
    passwordConfirm: "",
  });

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
    if (regData.password !== regData.passwordConfirm) {
      toast.error("Hesla se neshodují");
      return;
    }
    registerMutation.mutate();
  };

  return (
    <form
      className="flex flex-col items-center gap-6 sm:gap-8 p-6 sm:p-8 rounded-2xl w-full bg-white"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl sm:text-3xl font-medium self-center mb-4">
        Registrace
      </h2>

      <div className="flex flex-col gap-4 w-full">
        <AppFormCredential
          label="Jméno"
          name="firstname"
          placeholder="Jméno"
          icon={faUser}
          required
          onChange={(e) =>
            setRegData({ ...regData, firstname: e.target.value })
          }
        />
        <AppFormCredential
          label="Druhé jméno"
          name="middlename"
          placeholder="Druhé jméno"
          icon={faUser}
          onChange={(e) =>
            setRegData({ ...regData, middlename: e.target.value })
          }
        />
        <AppFormCredential
          label="Příjmení"
          name="lastname"
          placeholder="Příjmení"
          icon={faUser}
          required
          onChange={(e) =>
            setRegData({ ...regData, lastname: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <AppFormCredential
          label="Uživatelské jméno"
          name="username"
          type="text"
          placeholder="Uživatelské jméno"
          icon={faUser}
          required
          onChange={(e) =>
            setRegData({ ...regData, username: e.target.value })
          }
        />
        <AppFormCredential
          label="Email"
          name="email"
          type="email"
          placeholder="Email"
          icon={faEnvelope}
          required
          onChange={(e) => setRegData({ ...regData, email: e.target.value })}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <AppFormCredential
          label="Heslo"
          name="password"
          type="password"
          placeholder="Heslo"
          icon={faLock}
          required
          onChange={(e) =>
            setRegData({ ...regData, password: e.target.value })
          }
        />
        <AppFormCredential
          label="Potvrzení hesla"
          name="passwordConfirm"
          type="password"
          placeholder="Potvrzení hesla"
          icon={faLock}
          required
          onChange={(e) =>
            setRegData({ ...regData, passwordConfirm: e.target.value })
          }
        />
      </div>

      <AppButton type="submit" label="Registrovat se" className="w-full sm:w-80 mt-4" />

      <span className="text-sm text-center mt-4">
        Už máte účet?{" "}
        <Link href="/authentication/login" className="underline text-blue-700">
          Přihlaste se
        </Link>
      </span>
    </form>
  );
}
