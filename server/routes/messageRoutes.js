import express from 'express';
import { sendMessage, getMessages, editMessage } from '../controllers/messageController.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();


router.get("/:id", protectRoute, getMessages);
//                AUTHORIZATION (middleware)
router.post("/send/:id", protectRoute, sendMessage);

router.put("/edit/:id", protectRoute, editMessage);

export default router;