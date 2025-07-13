import { IContactFormData } from "@/interfaces/request-interfaces/contact-form-data/contact-form-data";
import { SendEmail } from "@/services/mail-service/mail.service";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { name, email, telephone, message } = body as IContactFormData;

  try {
    SendEmail(email, "Kontaktování Daisy a. s.", "haha");
    NextResponse.json({ message: "E-mail úspěšně odeslán." }, { status: 200 });
  } catch (error) {
    NextResponse.json(
      { message: "Nepodařilo se odeslat e-mail." },
      { status: 500 },
    );
  }
}
