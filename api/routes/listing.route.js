

import express from 'express';
import { createListing, deleteListing, getListing, getListings, updateListing, } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createListing);
// delete listing route
router.delete('/delete/:id', verifyToken, deleteListing);
// update listing route
router.post('/update/:id', verifyToken, updateListing);
// get user listing route
router.get('/get/:id', getListing);
// get lisiting route
router.get('/get', getListings);

export default router;