const nodemailer = require("nodemailer");
require("dotenv").config();

const { GMAIL_PASSWORD, GMAIL_EMAIL } = process.env;

// об'єкт налаштувань
const nodemailerConfig = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: GMAIL_EMAIL,
    pass: GMAIL_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: GMAIL_EMAIL };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
