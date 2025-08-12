import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Hi Everyone, I am <span className="purple">Shivam Thapliyal </span>
            from <span className="purple"> Dehradun, India.</span>
            <br />
            Software Engineer who loves to transform ideas into reality using
            code.
            <br />
            Motivated Developer with experience creating
            custom websites with ReactJs. Skilled in developing secure and scalable back-end solutions with Express.js
            , as well as deploying applications on AWS.
            <br />
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
