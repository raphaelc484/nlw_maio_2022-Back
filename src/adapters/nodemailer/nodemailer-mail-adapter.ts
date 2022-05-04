import { SendMailData, MailAdapter } from "../mail-adapters";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "25c6a509e068c3",
    pass: "f54316e816e2b5",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe feedget <oi@feedget.com>",
      to: "Raphael Clemente Miranda <raphaelc484@hotmail.com>",
      subject,
      html: body,
    });
  }
}
