const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define schema and model
const registrationSchema = new mongoose.Schema({
  name: String,
  city: String,
  country: String,
  email: String
});

const Registration = mongoose.model('Registration', registrationSchema);

// Add new schema for service requests
const serviceRequestSchema = new mongoose.Schema({
  service: String,
  tier: String,
  phoneNumber: String,
  timestamp: Date
});

const ServiceRequest = mongoose.model('ServiceRequest', serviceRequestSchema);

// Routes
app.post('/api/registration', async (req, res) => {
  try {
    const newRegistration = new Registration(req.body);
    await newRegistration.save();
    res.status(201).json(newRegistration);
  } catch (err) {
    res.status(400).json({ message: 'Error registering user', error: err });
  }
});

// Add new route for service requests
app.post('/api/service-request', async (req, res) => {
  try {
    const newServiceRequest = new ServiceRequest(req.body);
    await newServiceRequest.save();
    
    // Here you could add notification logic (email, SMS, etc.)
    
    res.status(201).json(newServiceRequest);
  } catch (err) {
    res.status(400).json({ message: 'Error processing service request', error: err });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
