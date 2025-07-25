"use client";
import { AppButton } from "@/elements/app-button/app-button";
import { AppFormCredential } from "@/elements/app-form-credential/app-form-credential";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export interface ILoginForm {
  email: string;
  password: string;
}

export function LoginForm() {
  const [formData, setFormData] = useState<ILoginForm>({
    email: "",
    password: "",
  });

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email: formData.email,
      password: formData.password,
    });

    if (res?.ok) {
      toast.success("Přihlášení proběhlo úspěšně");
    } else {
      toast.error("Něco se pokazilo");
    }
  };

  return (
    <form
      className="flex flex-col gap-8 items-center p-10 rounded-2xl w-full"
      onSubmit={handleLogin}
    >
      <h2 className="text-3xl font-medium self-center mb-5">Přihlášení</h2>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-start gap-2">
          <AppFormCredential
            name="email"
            type="email"
            label=""
            required
            placeholder="email"
            icon={faEnvelope}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col itmes-start gap-2">
          <AppFormCredential
            name="password"
            type="password"
            label=""
            required
            placeholder="heslo"
            icon={faLock}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
      </div>
      <AppButton
        type="submit"
        label="Přihlásit se"
        className="self-center mt-15 w-60"
      />
      <span>
        {" "}
        Nemáte ještě účet ?{" "}
        <Link
          href={"/authentication/register"}
          className="underline text-blue-700"
        >
          Zaregistrovat se
        </Link>{" "}
      </span>
    </form>
  );
}
