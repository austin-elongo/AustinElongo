require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const serviceRequestsRouter = require('./routes/serviceRequests');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB (using your existing connection string)
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Keep existing Registration model
const registrationSchema = new mongoose.Schema({
  name: String,
  city: String,
  country: String,
  email: String
});

const Registration = mongoose.model('Registration', registrationSchema);

// Routes
// Keep existing registration route
app.post('/api/registration', async (req, res) => {
  try {
    const newRegistration = new Registration(req.body);
    await newRegistration.save();
    res.status(201).json(newRegistration);
  } catch (err) {
    res.status(400).json({ message: 'Error registering user', error: err });
  }
});

// Add new service requests routes
app.use('/api', serviceRequestsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
