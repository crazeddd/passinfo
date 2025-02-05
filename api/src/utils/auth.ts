import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers["authorization"];

    if (authHeader) {
      const token = authHeader.split(' ')[1];
      jwt.verify(token, "superdupersecrettoken", { algorithms: ['HS256'] });
      next();
    } else {
      throw new Error("No auth");
    }
  } catch (error) {
    res.status(500).send({
      message: error,
    });
    console.log(error);
  }
};
