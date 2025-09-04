import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Divy Pattani</span><br/>
            from <span className="purple">Gujarat, India.</span>
            <br />
            I am currently pursuing{" "}
            <span className="purple">B.Tech in Information Technology</span> at{" "}
            <span className="purple">LJ Institute of Engineering and Technology.</span>
          </p>

          <p style={{ textAlign: "justify" }}>
            Apart from coding, some other activities that I love to do:
          </p>

          <ul style={{ textAlign: "left", marginLeft: "20px" }}>
            <li className="about-activity">
              <ImPointRight /> Playing Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Nature Photography Enthusiast
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", textAlign: "center" }}>
            "Building for growth, change, and innovation"
          </p>
          <footer
            className="blockquote-footer"
            style={{ textAlign: "center", marginTop: "10px" }}
          >
            Divy Pattani
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
