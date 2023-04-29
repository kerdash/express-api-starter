import nodemailer, { TransportOptions } from 'nodemailer';
import emailConfig from '../config/email';

const send = async (toEmail: string, subject: string, message: string) => {
  try {
    const transporter = nodemailer.createTransport({
        host: emailConfig.smtpHost,
        port: emailConfig.smtpPort,
        auth: {
          user: emailConfig.emailUser,
          pass: emailConfig.emailPass,
        },
      } as TransportOptions);
  
    const mailOptions = {
      from: emailConfig.senderEmailAddress,
      to: toEmail,
      subject: subject,
      html: message,
    };

    transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error('Internal Server Error');
  }
};

export default send;