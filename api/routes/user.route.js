import express from 'express';
import { test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

// test api route
router.get('/test', test);
// update user api route
router.post('/update/:id', verifyToken, updateUser)

export default router;