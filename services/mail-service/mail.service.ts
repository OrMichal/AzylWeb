import { IContactFormData } from "@/interfaces/request-interfaces/contact-form-data/contact-form-data";
import nodemailer, { SentMessageInfo } from "nodemailer";

const mailTransporter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: 465,
  service: "gmail",
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

function SendEmail(to: string, subject: string, html: string): void {
  mailTransporter.sendMail(
    {
      from: process.env.MAIL_USERNAME,
      to: to,
      subject: subject,
      html: html,
    },
    (err: Error | null, info: SentMessageInfo): void =>
      err
        ? console.log("error with sending mail: ", err)
        : console.log("email send! ", info),
  );
}

export function SendContactEmail(contactData: IContactFormData) {
  console.log(contactData);
  SendEmail(
    contactData.email,
    "Záznam o kontaktování Daisy a. s.",
    `
      <div>
        <h2>Dobrý den, ${contactData.name}</h2>
        <p>Děkujeme moc za vaší zprávu, budeme vás případně co nejdříve kontaktovat na vašem telefoním čísle: ${contactData.telephone}</p>
        <p>níže naleznete zprávu, kterou jsme od vás přijali.</p>
        <blockquote>
          ${contactData.message}
        </blockquote>
        <p>Toto je automaticky generovaný e-mail.</p>
        <span>Prosíme abyste na tento e-mail neodpovídali ani na tuto emailovou adresu nic neposílali.</span>
      </div>
    `,
  );
}
