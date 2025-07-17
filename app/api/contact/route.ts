import { IContactFormData } from "@/interfaces/request-interfaces/contact-form-data/contact-form-data";
import { SendContactEmail } from "@/services/mail-service/mail.service";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = (await req.json()) as IContactFormData;

  try {
    SendContactEmail(body);
    NextResponse.json({ message: "E-mail úspěšně odeslán." }, { status: 200 });
  } catch (error) {
    NextResponse.json(
      { message: "Nepodařilo se odeslat e-mail." },
      { status: 500 },
    );
  }
}
