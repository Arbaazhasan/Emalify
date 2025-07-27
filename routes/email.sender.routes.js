import express from "express"
import { messageSend } from "../controller/email.sender.controller.js";

const router = express.Router();


router.post("/sendmessage", messageSend);

export default router;