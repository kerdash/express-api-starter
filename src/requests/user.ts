import { param } from "express-validator";

import { isValidObjectId } from 'mongoose';

export default {
    show: [
        param('id').isString().custom((value) => {
            if (!isValidObjectId(value)) throw new Error('Invalid ID format');

            return true;
        }).withMessage('Invalid ID format')
    ],
}


