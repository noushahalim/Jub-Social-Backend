const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODE_MAILER_GMAIL,
      pass: process.env.NODE_MAILER_PASSWORD
    }
  });

exports.sentMailOtp=async(mailOptions)=>{
    await transporter.sendMail(mailOptions)
}