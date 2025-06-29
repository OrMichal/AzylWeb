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

export function SendEmail(to: string, subject: string, html: string): void {
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
        : console.log("email send!"),
  );
}
