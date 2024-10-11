import { Router } from "express";
var router = Router();

import { createAccount, login } from "../controllers/userController";

router.post("/signup", createAccount);

router.post("/login", login);

export default router;
