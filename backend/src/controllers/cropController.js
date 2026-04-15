import Crop from '../models/Crop.js';

// CREATE
export const createCrop = async (req, res) => {
  try {
    const { title, price, location, description } = req.body;

    const image = req.file ? req.file.filename : null;

    const crop = await Crop.create({
      title,
      price,
      location,
      description,
      image,
      user: req.user._id
    });

    res.status(201).json(crop);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET
export const getCrops = async (req, res) => {
  try {
    const crops = await Crop.find();
    res.json(crops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
export const deleteCrop = async (req, res) => {
  try {
    const crop = await Crop.findById(req.params.id);

    if (!crop) {
      return res.status(404).json({ message: 'Crop not found' });
    }

    await crop.deleteOne();
    res.json({ message: 'Crop deleted' });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
export const updateCrop = async (req, res) => {
  try {
    const crop = await Crop.findById(req.params.id);

    if (!crop) {
      return res.status(404).json({ message: 'Crop not found' });
    }

    crop.title = req.body.title || crop.title;
    crop.price = req.body.price || crop.price;
    crop.location = req.body.location || crop.location;
    crop.description = req.body.description || crop.description;

    const updated = await crop.save();
    res.json(updated);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};