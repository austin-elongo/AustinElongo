import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Austin Elongo </span>
            from <span className="purple"> Buea, Cameroon.</span>
            <br />
            I am currently employed as a software developer at Njix.
            <br />
            I have completed Bachelor of Science (BSc) in Software Engineering at Landmark Metropolitan University
            Buea.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Scifi Tv shows
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Football Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to improve and make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">AustinElongo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
