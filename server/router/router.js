import { Router } from "express";

import * as controller from '../controller/controller.js';
const router = Router();

router.post("/register",controller.register)
router.post('/sendOTP',controller.sendOTP)


export default router;