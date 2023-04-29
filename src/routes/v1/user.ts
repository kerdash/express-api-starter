import { Router, Request, Response } from 'express';
const router = Router();
import vr from "../../utils/validateRequest";

import userRequests from "../../requests/user";
import userController from "../../controllers/user"
import authMiddleware from '../../middlewares/auth';

interface Req extends Request {
    user?: unknown
}

router.get("/me", authMiddleware, (req: Req, res: Response) => {
    return res.json(req.user);
});

router.get("/:id", userRequests.show, vr, userController.show);

export default router;