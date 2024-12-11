import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import Particle from "../Particle";
import { Link } from "react-router-dom";
import { blogPlaceholders } from "../../Assets/blog/placeholders";

function Blog() {
  const blogPosts = [
    {
      id: "choose-tech-stack",
      title: "How to Choose the Right Tech Stack for Your Web Project in 2024",
      summary: "A comprehensive guide for businesses in Cameroon looking to build their online presence. Learn about modern web technologies and make informed decisions.",
      date: "March 2024",
      readTime: "8 min read",
      image: blogPlaceholders.techStack,
      imageAlt: "Modern web development technologies illustration",
      tags: ["Web Development", "Technology", "Business"],
      metaDescription: "Learn how to choose the perfect tech stack for your web project in Cameroon. Compare different technologies and make informed decisions for your business.",
    },
    {
      id: "flutter-vs-react-native",
      title: "Mobile App Development in Cameroon: Flutter vs React Native",
      summary: "Compare the two most popular frameworks for mobile app development. Find out which one is best suited for your business needs in the African market.",
      date: "March 2024",
      readTime: "10 min read",
      image: blogPlaceholders.flutterVsReact,
      imageAlt: "Flutter and React Native comparison",
      tags: ["Mobile Development", "Flutter", "React Native"],
      metaDescription: "Comprehensive comparison of Flutter vs React Native for mobile app development in Cameroon. Make the right choice for your business app.",
    },
    {
      id: "business-mobile-apps",
      title: "Why Your Cameroonian Business Needs a Mobile App in 2024",
      summary: "Discover how mobile apps can transform your business, increase customer engagement, and boost revenue in the growing digital economy of Cameroon.",
      date: "February 2024",
      readTime: "7 min read",
      image: blogPlaceholders.mobileApp,
      imageAlt: "Business mobile application concept",
      tags: ["Business", "Mobile Apps", "Digital Transformation"],
      metaDescription: "Learn why mobile apps are essential for business growth in Cameroon in 2024. Boost your revenue and customer engagement with a custom mobile app.",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Tech Insights & <strong className="purple">Development Tips</strong>
        </h1>
        <p style={{ color: "white" }}>
          Expert insights on web and mobile development in Cameroon
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {blogPosts.map((post, index) => (
            <Col md={6} className="blog-card" key={index}>
              <Card className="blog-card-view">
                <div className="blog-image-container">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    className="blog-card-image"
                    fluid
                  />
                </div>
                <Card.Body>
                  <div className="blog-tags">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Card.Title style={{ fontWeight: "bold" }}>{post.title}</Card.Title>
                  <Card.Text style={{ textAlign: "justify" }}>
                    {post.summary}
                  </Card.Text>
                  <div className="blog-meta">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="btn btn-primary"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Blog; 