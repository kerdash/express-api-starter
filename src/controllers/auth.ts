import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import jwtConfig from '../config/jwt';

import Suc from '../utils/successResponse';
import Err from '../exceptions/err';

import verifyEmail from '../emails/verifyEmail';
import resetPasswordEmail from '../emails/resetPasswordEmail';

import User from '../models/user';

export default {
  async register(req: Request, res: Response) {
    // Get user input
    const { first_name, last_name, email, password } = req.body;

      // Check if email exists
      const emailExists = await User.findOne({ email: email.toLowerCase() });
      if (emailExists) {
        throw Err.notAcceptable("Email already exists", "exists_email");
      }

      // Create verification code
      const verificationCode = Math.floor(100000 + Math.random() * 900000);

      // Create user in our database
      const user = await User.create({
        first_name,
        last_name,
        email: email.toLowerCase(),
        password: await bcrypt.hash(password, 10),
        email_verification_code: verificationCode
      });

      // Send verification email
      await verifyEmail.send(email, verificationCode);

      // Return new user
      return Suc.created(res, user);
  },

  async login(req: Request, res: Response) {
    // Get user input
    const { email, password } = req.body;

    // Validate if user exists in our database
    const user = await User.findOne({ email });

    // Check if email and password are correct
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw Err.invalidCredentials("Invalid email or password");
    }

    // Check if email is verified
    if (!user.email_verified) {
      throw Err.notAcceptable("Please verify your email before logging in", "verify_email");
    }

    // JWT token
    const tokenExpiresIn = parseInt(jwtConfig.expiresIn);
    const token = jwt.sign({ user_id: user._id, email }, jwtConfig.tokenKey, { expiresIn: tokenExpiresIn });
    res.cookie('x-access-token', token, {
      httpOnly: true,
      maxAge: tokenExpiresIn
    })

    // Return user and token
    return Suc.ok(res, { user, token });
  },

  async verifyEmail(req: Request, res: Response) {
    // Get user input
    const { email, password, verification_code } = req.body;

      // Find user by email
      const user = await User.findOne({ email });

      // Check if user exists and password is correct
      if (user && (await bcrypt.compare(password, user.password))) {
        // Check if user has verified their email
        if (!user.email_verified) {
          // Check if verification code is correct
          if (user.email_verification_code === verification_code) {
            // Update user's email verification status
            user.email_verified = true;
            user.email_verification_code = '';

            await user.save();
          } else {
            throw Err.notAcceptable("Invalid verification code", "invalid");
          }
        }

        // Return user
        return Suc.ok(res, user);
      }

      throw Err.invalidCredentials("Invalid email or password");
  },

  async requestResetPassword(req: Request, res: Response) {
      // Get email from request body
      const { email } = req.body;

      // Check if user with given email exists
      const user = await User.findOne({ email });

      if (!user) {
        throw Err.notAcceptable("Email is not registered", "email");
      }

      // Create verification code
      const verificationCode = Math.floor(100000 + Math.random() * 900000);

      // Send verification email
      await resetPasswordEmail.send(email, verificationCode);

      // Update reset password verification_code
      user.reset_password_verification_code = verificationCode;
      user.reset_password_verification_code_at = Date.now();

      await user.save();

      return Suc.ok(res, user);
  },

  async resetPassword(req: Request, res: Response) {
      const { email, verification_code, new_password, confirm_new_password } = req.body;

      // Check if user with given email exists and verification code is valid
      const user = await User.findOne({
        email,
        reset_password_verification_code: verification_code,
        reset_password_verification_code_at: { $gte: Date.now() - (1000 * 60 * 10) }
      });

      if (!user) {
        throw Err.notAcceptable("Invalid verification code or email", "invalid");
      }

      // Check if new password and confirm new password match
      if (new_password !== confirm_new_password) throw Err.notAcceptable("New password and confirm new password do not match", "password_not_match");

      // Update user's password and reset verification code
      user.password = await bcrypt.hash(new_password, 10);
      user.reset_password_verification_code = 0;
      user.reset_password_verification_code_at = 0;
      await user.save();

      return Suc.ok(res, user);
  }
}