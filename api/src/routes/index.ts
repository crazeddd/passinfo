import { Request, Response } from "express";
import { Router } from "express";
var router = Router();

import { auth } from "../utils/auth";

import { createNewItem } from "src/controllers/itemController";

router.get("/", function (req: Request, res: Response) {
  res.status(200).send("API working properly");
});

router.post("/create-item", auth, createNewItem);

export default router;
