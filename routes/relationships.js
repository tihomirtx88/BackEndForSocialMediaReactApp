import express from "express";
import { getRealtionship, addRealitonship, deleteRealtionship } from "../controllers/relationship.js";

const router = express.Router();

router.get("/", getRealtionship);
router.post("/", addRealitonship);
router.delete("/", deleteRealtionship);


export default router;