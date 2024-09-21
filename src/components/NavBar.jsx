import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/myLogo-removebg-preview.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

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
    <Navbar expand="lg" className={scrolled ? "scrolled " : ""}>
      <Container >
        <Navbar.Brand href="#home" className="cursor-scale small">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="cursor-scale small">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={`navbar-link cursor-scale small ${activeLink === "home" ? "active" : ""}`}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={`navbar-link cursor-scale small ${activeLink === "about" ? "active" : ""}`}
              onClick={() => onUpdateActiveLink("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={`navbar-link cursor-scale small ${activeLink === "skills" ? "active" : ""}`}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={`navbar-link cursor-scale small ${activeLink === "projects" ? "active" : ""}`}
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1B5VrV81fjKcL9IW33mPUryesUrTM7LAg/view?usp=sharing"
              className={`navbar-link cursor-scale small ${activeLink === "resume" ? "active" : ""}`}
              onClick={() => onUpdateActiveLink("resume")}
              style={{ color: activeLink === "resume" ? "red" : "inherit" }}
            >
              Resume
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/anandhu-r-s-5ab6a7135/" >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/AnandhuRs619" >
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/mr_short_body/" >
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <a href="#connect">
              <button className="vvd " onClick={() => console.log("connect")}>
                <span>Let's Connect</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
