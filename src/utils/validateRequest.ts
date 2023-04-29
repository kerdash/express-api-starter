import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export default function validateRequest(req: Request, res: Response, next: NextFunction) {
    const errors =  validationResult(req);
    
    if(!errors.isEmpty()){
        const errorsList = errors.array();

        return res.status(400).json({
            success: false,
            code: 'request_validation',
            message: errorsList[0].msg || 'Request validation failed',
            error: errorsList[0] ?? [],
            errors: errorsList,
        });
    }

    next();
}