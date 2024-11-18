import express from 'express';
import { signin, signup } from '../controllers/auth.controller.js';


const router = express.Router();

// signup api route
router.post("/signup", signup);
// sigin api route
router.post("/signin", signin);

export default router;