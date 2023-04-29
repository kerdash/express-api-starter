import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import jwtConfig from '../config/jwt';

import Err from '../exceptions/err';

interface RequestWithUser extends Request { 
  user?: unknown 
}

const verifyToken = (req: RequestWithUser, res: Response, next: NextFunction) => {
  let token = req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
  if(token) token = token.replace(/^Bearer\s/, "");
  
  if (!token) throw Err.notAuthorized();

  try {
    const UserJwt = jwt.verify(token, jwtConfig.tokenKey);
    req.user = UserJwt;
  } catch (error) {
    throw Err.notAuthorized();
  }

  return next();
};

module.exports = verifyToken;