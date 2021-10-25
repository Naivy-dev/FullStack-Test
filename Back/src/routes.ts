import { Router } from "express";
import { GetUserController } from "./controllers/GetUserController";

const router = Router();

const getUserController = new GetUserController();

router.post("/UpdateUserInfo", getUserController.handle);


export { router }