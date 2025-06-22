"use client";
import { AppTextInput } from "@/elements/app-text-input/app-text-input";
import { AppTextarea } from "@/elements/app-textarea/app-textarea";
import { IContactFormData } from "@/interfaces/request-interfaces/contact-form-data/contact-form-data";
import { ChangeEvent, useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState<IContactFormData>({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });

  return (
    <form className="p-2 shadow flex flex-col gap-2 w-150">
      <h3 className="font-medium text-2xl">Kontaktní formulář</h3>
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
          placeholder="napište svůje telefonní číslo"
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
      </div>
    </form>
  );
}
