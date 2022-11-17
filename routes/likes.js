import express from "express";
import { getLikes, createLikes, deleteLikes } from "../controllers/like.js";

const router = express.Router();

router.get("/", getLikes);
router.post("/", createLikes);
router.delete("/", deleteLikes);


export default router;