import { Request, Response } from "express";

import User from '../models/user';

import Suc from '../utils/suc';
import Err from '../exceptions/err';

export default {
    async show (req: Request, res: Response) {
        const user_id = req.params.id;

        const user = await User.findById(user_id);

        if (!user) throw Err.notFound();

        return Suc.ok(res, user);
    },
}