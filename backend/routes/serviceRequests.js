const express = require('express');
const router = express.Router();
const ServiceRequest = require('../models/ServiceRequest');

router.post('/service-request', async (req, res) => {
  try {
    const { service, tier, phoneNumber } = req.body;
    
    const serviceRequest = new ServiceRequest({
      service,
      tier,
      phoneNumber
    });

    await serviceRequest.save();
    
    res.status(201).json({ 
      message: 'Service request received successfully',
      requestId: serviceRequest._id 
    });
  } catch (error) {
    console.error('Error saving service request:', error);
    res.status(500).json({ 
      message: 'Error processing service request',
      error: error.message 
    });
  }
});

module.exports = router; 