import { Router } from 'express';
const router = Router();
import vr from "../../utils/validateRequest";

import userRequests from "../../requests/user";
import userController from "../../controllers/user"

router.get("/:id", userRequests.show, vr, userController.show);

export default router;