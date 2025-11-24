"use client";
import { AppButton } from "@/elements/app-button/app-button";
import { AppFormCredential } from "@/elements/app-form-credential/app-form-credential";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email: formData.email,
      password: formData.password,
    });

    if (res?.ok) {
      toast.success("Přihlášení proběhlo úspěšně");
      router.push("/");
    } else if (res?.status === 401) {
      toast.error("Nesprávné jméno nebo heslo");
    }
  };

  return (
    <form
      className="flex flex-col gap-6 sm:gap-8 items-center p-3 sm:p-10 rounded-2xl w-full sm:w-[350px] md:w-[400px] bg-white"
      onSubmit={handleLogin}
    >
      <h2 className="text-2xl sm:text-3xl font-medium self-center mb-4 sm:mb-5">
        Přihlášení
      </h2>

      <div className="flex flex-col gap-1 sm:gap-8 w-full">
        <AppFormCredential
          name="email"
          type="email"
          label=""
          required
          placeholder="Email"
          icon={faEnvelope}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />

        <AppFormCredential
          name="password"
          type="password"
          label=""
          required
          placeholder="Heslo"
          icon={faLock}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </div>

      <AppButton
        type="submit"
        label="Přihlásit se"
        className="mt-6 sm:mt-8 w-full sm:w-60"
      />

      <span className="text-sm text-center mt-4 sm:mt-6">
        Nemáte ještě účet?{" "}
        <Link href="/authentication/register" className="underline text-blue-700">
          Zaregistrovat se
        </Link>
      </span>
    </form>
  );
}
