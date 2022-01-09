import express from "express";

import { getUser, createUser } from "../controlers/user.js"; //cal controller

const router = express.Router();

router.get("/users", getUser);
router.post("/user", createUser);

export default router;
