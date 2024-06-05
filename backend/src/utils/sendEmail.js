import nodemailer from 'nodemailer';

import hbs from 'nodemailer-express-handlebars';
const sendEmail = async ({
  email,
  subject,
  template,
  firstName,
  password,
  href,
}) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.PASS_EMAIL,
    },
  });

  const hbsOptions = {
    viewEngine: {
      partialsDir: `./src/views`,
      layoutsDir: `./src/views`,
      defaultLayout: 'baseMessage',
    },
    viewPath: `./src/views/`,
    extName: '.handlebars',
  };

  transporter.use('compile', hbs(hbsOptions));

  const mailOptions = {
    from: `Honaifurniture <${process.env.USER_EMAIL}>`,
    to: email,
    subject: subject,
    template: template,
    context: {
      firstName,
      email,
      password,
      href,
    },
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log('Email sent successfully ');
    }
  });
};

export default sendEmail;
