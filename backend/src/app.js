import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import cropRoutes from './routes/cropRoutes.js';
import { protect } from './middleware/authMiddleware.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Auth routes
app.use('/api/auth', authRoutes);

// Crop routes
app.use('/api/crops', cropRoutes);

// Base route
app.get('/', (req, res) => {
  res.send('CropCircle API Running 🌱');
});

// Protected test route
app.get('/api/protected', protect, (req, res) => {
  res.json({
    message: 'You accessed protected route 🔐',
    user: req.user
  });
});

export default app;