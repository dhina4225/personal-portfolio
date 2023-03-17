import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" className="main-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#connect"
              className={
                activeLink === "connect" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contact")}
            >
              Connect
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon icon">
              <a href="https://www.linkedin.com/in/dina-karan4225/">
                <FaLinkedinIn className="icons" />
              </a>
              <a href="https://github.com/dhina4225">
                <FaGithub className="icons" />
              </a>
              <a href="https://app.netlify.com/teams/dhina4225/overview">
                <SiNetlify className="icons" />
              </a>
            </div>

            <form method="get" action="">
              <button class="myButton" type="submit">
                Download cv
              </button>
            </form>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
