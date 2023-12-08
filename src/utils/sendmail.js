import nodemailer from "nodemailer";
import { password, userEmail } from "../../config.js";
let transporterInfo = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: userEmail,
    pass: password,
  },
};

export let sendMail = async (mailInfo) => {
  try {
    let transporter = nodemailer.createTransport(transporterInfo);
    let info = await transporter.sendMail(mailInfo);
  } catch (error) {
    console.log("error has occurred", error.message);
  }
};
