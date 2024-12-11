import React, { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Contact.css';

function Contact() {
  const location = useLocation();
  const navigate = useNavigate();
  const serviceRequest = location.state?.serviceRequest;

  useEffect(() => {
    if (serviceRequest) {
      // Send notification to backend
      axios.post('/api/service-request', serviceRequest)
        .catch(error => console.error('Error sending service request:', error));
    }
  }, [serviceRequest]);

  return (
    <Container fluid className="contact-section">
      <Container>
        <Row>
          <Col md={12} className="contact-header">
            <h1>Contact Us</h1>
            {serviceRequest && (
              <div className="service-summary">
                <h3>Your Service Request Summary</h3>
                <p>Service: {serviceRequest.service}</p>
                <p>Tier: {serviceRequest.tier}</p>
                <p>Phone: {serviceRequest.phoneNumber}</p>
              </div>
            )}
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>Email: austin.elongo@example.com</p>
              <p>Phone: +237 677 69XXXX</p>
              <p>Location: Douala, Cameroon</p>
              <div className="social-links">
                <a href="https://wa.me/67769" className="whatsapp-link">
                  WhatsApp
                </a>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="contact-form">
              <h3>Send us a Message</h3>
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact; 