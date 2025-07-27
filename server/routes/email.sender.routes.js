import express from "express"
import { messageSenderController } from "../controller/email.sender.controller.js";
import upload from "../middleware/multer.js";

const router = express.Router();


router.post("/sendmessage", upload.single("attachment"), messageSenderController);

export default router;