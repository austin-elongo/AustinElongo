import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Particle from "../Particle";
import { useNavigate } from 'react-router-dom';
import { servicesData } from './ServicesData';
import axios from 'axios';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTier, setSelectedTier] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleServiceSelection = (service, tier) => {
    setSelectedService(service);
    setSelectedTier(tier);
    setShowPhoneModal(true);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    const serviceRequest = {
      service: selectedService.title,
      tier: selectedTier,
      phoneNumber: phoneNumber,
    };

    try {
      // Send request to your backend
      const response = await axios.post('/api/service-request', serviceRequest);
      
      if (response.status === 201) {
        // Navigate to contact page with success message
        navigate('/contact', { 
          state: { 
            serviceRequest: {
              ...serviceRequest,
              requestId: response.data.requestId
            }
          }
        });
      }
    } catch (err) {
      setError('Failed to submit request. Please try again.');
      console.error('Error submitting service request:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container fluid className="project-section">
      <Helmet>
        <title>Professional Services | Austin Elongo</title>
        <meta name="description" content="Professional web development, mobile app development, SEO, graphics design, and video editing services in Cameroon. Choose from our Black and Gold tiers." />
        <meta name="keywords" content="web development, mobile apps, SEO, graphics design, video editing, Cameroon, professional services" />
        <meta property="og:title" content="Professional Services | Austin Elongo" />
        <meta property="og:description" content="Professional web development, mobile app development, SEO, graphics design, and video editing services in Cameroon." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://austinelongo.click/services" />
      </Helmet>
      
      <Particle />
      
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Services</strong>
        </h1>
        <p style={{ color: "white" }}>
          Choose from our range of professional services tailored to your needs
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {servicesData.map((service) => (
            <Col md={6} className="project-card" key={service.id}>
              <div className="service-card">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-image"
                  loading="lazy"
                />
                <h2 className="service-title">{service.title}</h2>
                <p className="service-description">{service.description}</p>
                
                <div className="service-tiers">
                  {Object.entries(service.tiers).map(([key, tier]) => (
                    <div key={key} className="service-tier">
                      <h3 className="tier-name">{tier.name}</h3>
                      <p className="tier-price">{tier.price}</p>
                      <ul className="tier-features">
                        {tier.features.map((feature, index) => (
                          <li key={index} className="tier-feature">{feature}</li>
                        ))}
                      </ul>
                      <button 
                        onClick={() => handleServiceSelection(service, key)}
                        className="select-button"
                        aria-label={`Select ${service.title} ${tier.name} Tier`}
                      >
                        Select {tier.name} Tier
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {showPhoneModal && (
        <div className="phone-modal" role="dialog" aria-modal="true">
          <div className="modal-content">
            <h3>Enter Your Phone Number</h3>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
                required
                aria-label="Phone number"
                pattern="[0-9]+"
                disabled={isSubmitting}
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Continue'}
              </button>
            </form>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Services; 