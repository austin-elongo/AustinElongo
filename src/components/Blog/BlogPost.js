import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Particle from "../Particle";
import { useParams, Navigate } from "react-router-dom";
import { blogPosts } from "./BlogData";
import { Helmet } from "react-helmet";

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return <Navigate to="/blog" />;
  }

  return (
    <Container fluid className="blog-post-section">
      <Helmet>
        <title>{post.title} | Austin Elongo</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={post.heroImage} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={post.heroImage} />
      </Helmet>
      
      <Particle />
      <Container>
        <Row className="blog-hero-section">
          <Col md={12}>
            <Image 
              src={post.heroImage} 
              alt={post.title}
              className="blog-hero-image"
              fluid
            />
          </Col>
        </Row>

        <Row className="blog-header">
          <Col md={12}>
            <h1>{post.title}</h1>
            <div className="blog-meta">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <div className="blog-tags">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="blog-tag">
                  {tag}
                </span>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="blog-content">
          <Col md={12}>
            {post.content.map((section, index) => (
              <div key={index} className="blog-section">
                {section.title && <h2>{section.title}</h2>}
                {section.text && <p>{section.text}</p>}
                {section.image && (
                  <div className="blog-section-image">
                    <Image 
                      src={section.image} 
                      alt={section.imageAlt || section.title}
                      fluid
                    />
                    {section.imageCaption && (
                      <p className="image-caption">{section.imageCaption}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default BlogPost; 