import { Router } from "express";
import serviceController from '../controllers/services.controller.js';

const router = Router();

router.get("/", serviceController.getService)
router.post("/", serviceController.postService)

router.get("/:id", serviceController.getOneService)
export default router