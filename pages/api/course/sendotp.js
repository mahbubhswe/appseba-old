import nc from "next-connect";
import nodemailer from "nodemailer";
const handler = nc();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.gmail,
    pass: process.env.gmailPass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

handler.post(async (req, res) => {
  try {
    //send mail to user
    const details = {
      from: process.env.gmail,
      to: req.query.email,
      subject: `Zero to job ready course -Verify your email`,
      html: `<h3>${req.query.textWithCode}</h3>`,
    };
    //send mail
    transporter.sendMail(details, (error) => {
      if (error) {
        console.log(error);
      } else {
        res.send(
          `Verification code has been sent to ${req.query.email}.Please check your email address`
        );
      }
    });
  } catch (error) {
    console.log(error.message);
  }
});

export default handler;
