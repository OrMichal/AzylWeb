import { SendEmail } from "@/services/mail-service/mail.service";
import { NextResponse } from "next/server";

export function POST(req: NextiRequest, res: NextResponse) {
  const { name, email, telephone, message } = req.body;

  try {
    SendEmail("orsahmykhaylo@sssvt.cz", "Kontaktování Daisy a. s.");
  } catch (error) {}
}
