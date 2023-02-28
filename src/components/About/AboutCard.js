import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harinda Vishwantha Fernando </span>
            from <span className="purple"> Udubaddawa, Sri Lanka.</span> I hold two degrees in information technology and communication 
            from the Rajarata University of Sri Lanka and the University of Colombo, Sri Lanka (<span className="purple">BICT</span> and <span className="purple">BIT</span> respectively). 
            With a strong background in information technology and communication, 
            I have a solid foundation in the field and currently work as an <span className="purple">associate software engineer</span> for the #1 App Development company in Australia, 
            where I <span className="purple">specialize in PHP and Laravel-based backend development.</span> 
            Throughout my career, I have developed a wide range of skills and experiences that demonstrate my ability to excel in a variety of areas.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writting Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Plant seeds of kindness, nurture them with creativity, and watch yourself grow into a person that no one will ever forget"{" "}
          </p>
          <footer className="blockquote-footer">Harinda Vishwantha Fernando</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
