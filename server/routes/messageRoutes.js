import express from 'express';
import { sendMessage, getMessages } from '../controllers/messageController.js';
import protectRoute from '../middleware/protectRoute.js'

const router = express.Router();


router.get("/:id", protectRoute, getMessages);
//                AUTHORIZATION (middleware)
router.post("/send/:id", protectRoute, sendMessage);


export default router;