import { Router } from "express";
import userController from '../controllers/users.controller.js'

const router = Router()

router.get("/", userController.getUser)
router.post("/", userController.postUser)
router.get("/exist/:email", userController.getExistUser)

//LOGIN
router.post("/login", userController.getLoginUser);

export default router