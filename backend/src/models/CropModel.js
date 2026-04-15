import mongoose from 'mongoose';

const cropSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    location: String,
    description: String,
    image: String, // 👈 NEW
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);

const Crop = mongoose.model('Crop', cropSchema);

export default Crop;