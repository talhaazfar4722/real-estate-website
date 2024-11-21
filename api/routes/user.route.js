import express from 'express';
import { deleteUser, getUser, getUserListings, test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

// test api route
router.get('/test', test);
// update user api route
router.post('/update/:id', verifyToken, updateUser)
// delte user api route
router.delete('/delete/:id', verifyToken, deleteUser)
// get user listings
router.get('/listings/:id', verifyToken, getUserListings)
// get user route
router.get('/:id', verifyToken, getUser)

export default router;