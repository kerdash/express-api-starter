import { body } from "express-validator";

export default {
    register: [
        body('first_name').isLength({'min': 6}).withMessage('First name must be at least 6 characters long'),
        body('last_name').isLength({'min': 6}).withMessage('Last name must be at least 6 characters long'),
        body('email').isEmail().withMessage('Invalid email format'),
        body('password').isLength({'min': 6}).withMessage('Password must be at least 6 characters long'),
        body('password_confirmation').custom((value, { req }) => {
            if (value !== req.body.password) throw new Error('Password confirmation does not match password');
            return true;
        }).withMessage('Password confirmation does not match password'),
    ],

    login: [
        body('email').isEmail().withMessage('Invalid email format'),
        body('password').isLength({'min': 6}).withMessage('Password must be at least 6 characters long'),
    ],

    verifyEmail: [
        body('email').isEmail().withMessage('Invalid email format'),
        body('password').isLength({'min': 6}).withMessage('Password must be at least 6 characters long'),
        body('verification_code').isLength({'min': 6, "max": 6}).withMessage('Verification code must be 6 characters long')
    ],

    requestResetPassword: [
        body('email').isEmail().withMessage('Invalid email format'),
    ],

    resetPassword: [
        body('email').isEmail().withMessage('Invalid email format'),
    ],
}