import express from 'express';
import {
  createCrop,
  getCrops,
  deleteCrop,
  updateCrop
} from '../controllers/cropController.js';

import { protect } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

// CREATE (with image)
router.post('/', protect, upload.single('image'), createCrop);

// GET
router.get('/', getCrops);

// DELETE
router.delete('/:id', protect, deleteCrop);

// UPDATE
router.put('/:id', protect, updateCrop);

export default router;