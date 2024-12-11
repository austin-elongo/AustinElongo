const mongoose = require('mongoose');

const serviceRequestSchema = new mongoose.Schema({
  service: {
    type: String,
    required: true
  },
  tier: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'completed'],
    default: 'pending'
  }
});

module.exports = mongoose.model('ServiceRequest', serviceRequestSchema); 