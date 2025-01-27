import { Router } from "express";
import userController from '../controllers/users.controller.js'

const router = Router()

router.get("/", userController.getUser)
router.post("/", userController.postUser)

//LOGIN
router.post("/login", userController.getLoginUser);

export default router