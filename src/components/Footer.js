import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineWhatsApp,
  AiFillSkype,
  AiFillMail,
} from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>© {year} Harinda Vishwantha Fernando. All rights reserved.</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Made with ❤️ | HaVilahLK</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          <li className="social-icons">
              <a
                href="mailto:hello@iamharinda.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/message/OZGQ4SERQPSNP1"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://join.skype.com/invite/wDOhE0i5zH9W"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillSkype />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
