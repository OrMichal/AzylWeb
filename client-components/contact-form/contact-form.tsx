"use client";
import { AppButton } from "@/elements/app-button/app-button";
import { AppTextInput } from "@/elements/app-text-input/app-text-input";
import { AppTextarea } from "@/elements/app-textarea/app-textarea";
import { IContactFormData } from "@/interfaces/request-interfaces/contact-form-data/contact-form-data";
import { useMutation } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export function ContactForm() {
  const [formData, setFormData] = useState<IContactFormData>({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });

  const SendMessage = (e: FormEvent) => {
    e.preventDefault();
    MailMutation.mutate();
  };

  const MailMutation = useMutation({
    mutationKey: ["mail-muatation"],
    mutationFn: () =>
      fetch(`http://localhost:3000/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData }),
      }),
    onError: () => toast.error("Nepodařilo se poslat e-mail"),
    onSuccess: () => toast.success("E-mail byl úspěšně odeslán"),
  });

  return (
    <form
      className="p-5 shadow flex flex-col gap-2 w-full rounded-3xl"
      onSubmit={(e) => SendMessage(e)}
    >
      <h3 className="font-medium text-2xl text-left">Kontaktní formulář</h3>
      <div className="flex flex-col pt-3 pb-3">
        <AppTextInput
          value={formData.name}
          type="text"
          placeholder="Jakým jménem Vás máme oslovit?"
          label="Vaše jméno:"
          onValueChanged={(d: string): void =>
            setFormData({ ...formData, name: d })
          }
        />
        <AppTextInput
          value={formData.email}
          type="email"
          placeholder="napište svůj email"
          label="Váš email:"
          onValueChanged={(d: string): void =>
            setFormData({ ...formData, email: d })
          }
        />
        <AppTextInput
          value={formData.telephone}
          type="text"
          placeholder="napište svoje telefonní číslo"
          label="Vaše telefoní číslo:"
          onValueChanged={(d: string): void =>
            setFormData({ ...formData, telephone: d })
          }
        />
        <AppTextarea
          label="Zpráva:"
          placeholder="Zde napište, co máte na mysli..."
          value={formData.message}
          onValueChanged={(d: string): void =>
            setFormData({ ...formData, message: d })
          }
        />
        <AppButton
          className="w-80 ml-auto mr-auto mt-8"
          label="Odeslat zprávu"
          type="submit"
        />
      </div>
    </form>
  );
}
