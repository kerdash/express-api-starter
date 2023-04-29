const { SMTP_HOST, SMTP_PORT, EMAIL_USER, EMAIL_PASSWORD, SENDER_EMAIL_ADDRESS } = process.env;

export default {
    smtpHost: SMTP_HOST,
    smtpPort: SMTP_PORT || 2525,
    emailUser: EMAIL_USER,
    emailPass: EMAIL_PASSWORD,
    senderEmailAddress: SENDER_EMAIL_ADDRESS,
};

