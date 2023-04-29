import { Router } from 'express';
const router = Router();
import vr from "../../utils/validateRequest";

import authRequests from "../../requests/auth";
import authController from "../../controllers/auth"

router.post("/register", authRequests.register, vr, authController.register);
router.post("/login", authRequests.login, vr, authController.login);
router.post("/verify-email", authRequests.verifyEmail, vr, authController.verifyEmail);
router.post("/request-reset-password", authRequests.requestResetPassword, vr, authController.requestResetPassword);
router.post("/reset-password", authRequests.resetPassword, vr, authController.resetPassword);

export default router;