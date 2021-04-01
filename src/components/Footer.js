import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import { Link } from "./../util/router.js";
import "./Footer.scss";

function Footer(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className="footer"
    >
      <Container>
        <div className="FooterComponent__inner">
          <div className="brand left">
            <Link to="/">
              <img src={props.logo} alt="Logo"></img>
            </Link>
          </div>
          <div className="links right">
            <Link to="/about"> About </Link>
            <Link to="/blogs" rel="noopener noreferrer">
              Blogs
            </Link>
            <Link to="/newsletter"> Newsletter </Link>
            {/* <a href="https://tinyletter.com/HarshMakadia/" target="_blank" rel="noopener noreferrer">
              NewsLetter
            </a> */}
          </div>
          <div className="social right">
            <a
              href="https://medium.com/@MakadiaHarsh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-medium"></i>
              </span>
            </a>
            <a
              href="https://twitter.com/MakadiaHarsh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-makadia-03109b66/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-linkedin"></i>
              </span>
            </a>
            <a
              href="https://stackoverflow.com/users/5220060/harsh-makadia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-stack-overflow"></i>
              </span>
            </a>
            <a
              href="https://github.com/Harshmakadia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-github"></i>
              </span>
            </a>
            <a
              href="https://www.producthunt.com/@makadiaharsh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-product-hunt"></i>
              </span>
            </a>
          </div>
          <div className="copyright left">{props.copyright}</div>
        </div>
      </Container>
    </Section>
  );
}

export default Footer;
