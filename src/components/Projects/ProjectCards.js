import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaBook } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.ghLink && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{ marginRight: "10px", marginBottom: "10px" }}
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginRight: "10px", marginBottom: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Live"}
          </Button>
        )}
        {props.docLink && (
          <Button
            variant="primary"
            href={props.docLink}
            target="_blank"
            style={{ marginBottom: "10px" }}
          >
            <FaBook /> &nbsp;
            {"Documentation"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
