import { Request, Response, NextFunction } from 'express';

interface AppError extends Error {
  code?: string;
  statusCode?: number;
  status?: number;
}

function notFound(req: Request, res: Response, next: NextFunction) {
  const error: AppError = new Error('Not found');
  error.status = 404;
  next(error);
}

function handler(err: AppError, req: Request, res: Response, next: NextFunction) {
  res.status(err.statusCode || 500);
  
  res.json({
      success: false,
      code: err.code || null,
      message: err.message
  });
  
  return;
}

const errorHandler = { notFound, handler };

export default errorHandler;