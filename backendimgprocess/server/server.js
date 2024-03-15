import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
const port = process.env.PORT || 5001;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json()); // Use Express built-in middleware for JSON

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const PredictionSchema = new mongoose.Schema({
  predicted_class: String,
  severity_level: String,
  probability: Number,
  timestamp: { type: Date, default: Date.now },
  cattle: String,
});

const Prediction = mongoose.model('Prediction', PredictionSchema);

app.post('/api/save_prediction', async (req, res) => {
  try {
    const newPrediction = new Prediction(req.body);
    await newPrediction.save();
    res.status(200).json({ message: 'Prediction saved successfully' });
  } catch (error) {
    console.error('Error saving prediction:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
