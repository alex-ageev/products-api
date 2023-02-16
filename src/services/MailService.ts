import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
class MailService {

  private transporter: nodemailer.Transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: String(process.env.SMTP_HOST),
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: String(process.env.SMTP_USER),
        pass: String(process.env.STMP_PASSWORD),
      },
    });
    console.log({
      host: String(process.env.SMTP_HOST),
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: String(process.env.SMTP_USER),
        pass: String(process.env.SMTP_PASSWORD),
      },
    });
  }
  async sendActivationMail(to: string, link: string) {
    await this.transporter.sendMail({
      from: process.env.SMTP_HOST,
      to,
      subject: "Ativar conta: " + process.env.API_URL,
      text: "",
      html: `
        <div>
          <h1>Ativar conta</h1>
          <a href="${link}">${link}</a>
        </div>
      `,
    });
  }
}

export default new MailService();
