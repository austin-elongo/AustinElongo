import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import portfolioDemo from "../../Assets/Projects/portfolioDemo.jpg";
import editor from "../../Assets/Projects/codeEditor.png";
import zapntengDemo from "../../Assets/Projects/zapntengDemo.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import TPRDemo from "../../Assets/Projects/TPRDemo.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zapntengDemo}
              isBlog={false}
              title="Zap Nteng"
              description="A mobile and web platform for the retail of all footwear products, for Zaps shoes. Built with React.js. Prioritizing efficiency and optimized for user experience and usability. "
              ghLink="https://github.com/austin-elongo/zap-nteng"
              demoLink=""
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TPRDemo}
              isBlog={false}
              title="TPR USA"
              description="Build with Shopify for Triangle Party Rentals USA. Implementing intergrated secure payments, secure bookings, secure chat, quick favouriting, Gallery and much more."
              //ghLink=""
              demoLink="https://www.triangle-party-rentals.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Pidgin Recognition AI Project"
              description="Cloud-based NLP framework that enhances the context-awareness and intent recognition capabilities of voice assistants in the African e-commerce sector. A project build with Python, Jupiter Notebook, Js, Pandas, Numpy, Aws Lamda, PyTorch, Llama4 finetunning and Google colab "
              ghLink="https://github.com/austin-elongo/Pidgin-Recognition-Ai"
              docLink="https://docs.google.com/document/d/1dxEKVdaeDyb5dZcRR5MjfJDc7DxYMV4M/edit?usp=sharing&ouid=103254439432642910469&rtpof=true&sd=true"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioDemo}
              isBlog={false}
              title="Austins Personals"
              description="My personal website built with MERN Stack. It uses React.js, Css, html, Ts and Versel for deployement. It is designed with an ellegant techy purple which is visualy comfortable and black for optimization purposes "
              ghLink="https://github.com/austin-elongo/AustinElongo"
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
