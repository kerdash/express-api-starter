import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import jwtConfig from '../config/jwt';

import Err from '../exceptions/err';

interface Req extends Request { 
  user?: unknown 
}

const verifyToken = (req: Req, res: Response, next: NextFunction) => {
  let token = req.cookies['x-access-token'] || req.body['x-access-token'] || req.query['x-access-token'] || req.headers["x-access-token"] || req.headers.authorization;
  if(token) token = token.replace(/^Bearer\s/, "");
  
  if (!token) throw Err.authenticationRequired();

  try {
    const UserJwt = jwt.verify(token, jwtConfig.tokenKey);
    req.user = UserJwt;
  } catch (error) {
    throw Err.authenticationRequired();
  }

  return next();
};

export default verifyToken;