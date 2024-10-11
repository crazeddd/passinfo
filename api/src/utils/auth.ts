import e, { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const auth = async (req: Request, res: Response, next: any) => {
  try {
    const authHeader = req.headers["authorization"];
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      console.log(token);
      jwt.verify(token, "superdupersecrettoken", { algorithms: ['HS256'] });
      next();
    } else {
      throw new Error("No auth headers!");
    }
  } catch (error) {
    res.status(500).send({
      message: error,
    });
    console.log(error);
  }
};
