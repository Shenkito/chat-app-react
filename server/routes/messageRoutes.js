import express from 'express';
import { sendMessage } from '../controllers/messageController.js';
import protectRoute from '../middleware/protectRoute.js'

const router = express.Router();

//                AUTHORIZATION (middleware)
router.post("/send/:id", protectRoute, sendMessage);


export default router;