import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/dina-karan4225/">
							<FaLinkedinIn className="icons"/>
							</a>
							<a href="https://github.com/dhina4225">
							<FaGithub className="icons"/>
							</a>
							<a href="https://www.behance.net/dinakd1">
							<SiNetlify className="icons"/>
							</a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
