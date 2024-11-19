import express from 'express';
import { google, signin, signOut, signup } from '../controllers/auth.controller.js';


const router = express.Router();

// signup api route
router.post("/signup", signup);
// sigin api route
router.post("/signin", signin);
// google auth api route
router.post('/google', google);
// signout route
router.get('/signout', signOut)

export default router;