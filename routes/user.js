import express from "express";

import { getUser, createUser, singleUser } from "../controlers/user.js"; //cal controller

const router = express.Router();

router.get("/users", getUser);
router.post("/user", createUser);
router.get("/user/:id", singleUser);

export default router;
