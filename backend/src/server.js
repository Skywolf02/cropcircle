import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

import connectDB from './config/db.js'; // 🔥 ADD THIS

import authRoutes from './routes/authRoutes.js';
import cropRoutes from './routes/cropRoutes.js';

import { protect } from './middleware/authMiddleware.js';

dotenv.config();

// 🔥 CONNECT DATABASE
connectDB();

const app = express();

// ensure uploads folder exists
const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// middleware
app.use(cors());
app.use(express.json());

// serve uploads
app.use('/uploads', express.static(uploadDir));

// routes
app.use('/api/auth', authRoutes);
app.use('/api/crops', cropRoutes);

// base route
app.get('/', (req, res) => {
  res.send('CropCircle API Running 🌱');
});

// protected route
app.get('/api/protected', protect, (req, res) => {
  res.json({
    message: 'You accessed protected route 🔐',
    user: req.user
  });
});

// start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});