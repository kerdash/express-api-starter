export {};

// Import sendEmail function from '../utils/sendEmail' module
import sendEmail from '../utils/sendEmail';

// Define an async function named 'send' that takes an email and verification code as parameters
export default {
    send: async (email: string, verificationCode: number) => {
        // Call the 'subject' function to get the email subject
        const mailSubject = subject();
        
        // Call the 'message' function to get the email message body
        const mailMessage = message(verificationCode);
    
        // Call the 'sendEmail' function to send the email
        await sendEmail(email, mailSubject, mailMessage);
    }
};

// Define a function named 'subject' that returns the default email subject
function subject(): string {
    return 'Reset Password';
}

// Define a function named 'message' that takes a verification code as parameter and returns the email message body
function message(verificationCode: number): string {
    return `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Reset Password</title>
        </head>
        
        <body style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
            <h1 style="color: #007bff;">Reset Password</h1>
            <p>Your verification code is: <strong>${verificationCode}</strong></p>
        </body>
        
        </html>
    `;
}