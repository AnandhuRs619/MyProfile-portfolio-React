import { Container, Row, Col } from "react-bootstrap";
// import { MailChip } from "./MailChip";
import logo from "../assets/img/myLogo-removebg-preview.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailChip /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/anandhu-r-s-5ab6a7135/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/AnandhuRs619"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/mr_short_body/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}