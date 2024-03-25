import express from 'express';
import { login, signUp, logout } from '../controllers/authController.js';

const router = express.Router();

router.post("/signup", signUp);

router.post("/login", login);

router.post("/logout", logout);

export default router;