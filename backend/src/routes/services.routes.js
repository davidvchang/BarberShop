import { Router } from "express";
import serviceController from '../controllers/services.controller.js';
import verifyToken from '../middleware/verifyToken.js';

const router = Router();

router.get("/", serviceController.getService)
router.get("/pages", serviceController.getServicePages)
router.post("/", verifyToken, serviceController.postService)

router.get("/:id", serviceController.getOneService)
router.delete("/:id", verifyToken, serviceController.deleteService)
router.put("/:id", verifyToken, serviceController.updateService)

export default router