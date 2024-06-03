import nodemailer from 'nodemailer';

const sendEmail = async ({ email, emailHtml, subject, text }) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.PASS_EMAIL,
    },
  });

  async function main() {
    const options = await transporter.sendMail({
      from: `"Honaifurniture" <no-reply@honaifurniture.com>`,
      to: email,
      subject: subject,
      text: text,
      html: emailHtml,
    });

    return options;
  }
  main().catch(console.error);
};

export default sendEmail;
