import { Request, Response } from "express";
import { Router } from "express";
var router = Router();

import { auth } from "../utils/auth";

/* GET home page. */
router.get("/", function (req: Request, res: Response) {
  res.status(200).send("API working properly");
});

router.get("/free-endpoint", (req: Request, res: Response) => {
  res.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
router.post("/auth-endpoint", auth, (req: Request, res: Response) => {
  res.json({ message: "You are authorized to access me" });
});

export default router;
