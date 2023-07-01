import express from "express";
import userController from "../controllers/user.controller.js";
import { authRequired, hasRole, hasAnyRole } from "../middlewares.js";

const router = express.Router();

router.get("/", authRequired, hasRole("admin"), userController.getUser);
router.delete(
	"/",
	authRequired,
	hasAnyRole(["test", "a"]),
	userController.deleteUser
);
router.post("/", authRequired, userController.deleteUser);

export default router;
