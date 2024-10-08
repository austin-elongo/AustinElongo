// src/components/Home/Home2.js

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../Assets/secondimg.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <Link to="/register">
              <Button variant="primary" size="lg">
                Register for DevConvergence
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in 
              <i>
                <b className="purple">Javascript and React, Java, C++, Flutter and Dart. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products with Js, Mobile Apps with Flutter Technologies </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain and AI
                </b>
              </i>
              <br />
              <br />
              Whenever neccessary, I also apply my passion for developing products
              with <b className="purple">Other Technologies</b> and alot of 
              <i>
                <b className="purple">
                  {" "}
                  flexibility 
                </b>
              </i>
              &nbsp; depending on the team needs and company
              <i>
                <b className="purple"> Requirements</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/austin-elongo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/austin_elongo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/austin-elongo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/austin_elongo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
