import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import { useAuth } from "./../util/auth.js";
import "./NavbarCustom.scss";
import Day from '../images/day.svg'
import Night from '../images/night.svg'

function NavbarCustom(props) {
  const auth = useAuth();

  return (
    <Navbar bg={props.bg} variant={props.variant} expand={props.expand}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              className="d-inline-block align-top"
              src={props.logo}
              alt="Logo"
              height="30"
            ></img>
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="border-0"
        ></Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            {!auth.user && (
              <>
                <Nav.Item>
                  <LinkContainer to="/about">
                    <Nav.Link active={false}>
                      <span>About</span>
                    </Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <LinkContainer to="/blogs">
                    <Nav.Link active={false}>
                      <span>Blogs</span>
                    </Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <LinkContainer to="/newsletter">
                    <Nav.Link active={false}>
                      <span>Newsletter</span>
                    </Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link
                    href="https://medium.com/@MakadiaHarsh"
                    active={false}
                    target="_blank"
                  >
                    <span>
                      <i className="NavbarCustom__no-classname fa-medium fab"></i>
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="https://twitter.com/MakadiaHarsh"
                    active={false}
                    target="_blank"
                  >
                    <span>
                      <i className="NavbarCustom__no-classname fab fa-twitter"></i>
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="https://github.com/Harshmakadia"
                    active={false}
                    target="_blank"
                  >
                    <span>
                      <i className="NavbarCustom__no-classname fab fa-github"></i>
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="https://www.linkedin.com/in/harsh-makadia-03109b66/"
                    active={false}
                    target="_blank"
                  >
                    <span>
                      <i className="NavbarCustom__no-classname fab fa-linkedin"></i>
                    </span>
                  </Nav.Link>
                </Nav.Item> */}
                <Nav.Item>
                  <span className="nav-link cursor-pointer" onClick={() => props.toggleTheme()} >
                   {/* <img style={{height: "25px", width: "25px"}} alt="dark/light" src={`${props.variant === "dark" ? "https://user-images.githubusercontent.com/13532530/89498022-121e3280-d7db-11ea-803b-8a5c79894919.png" : "https://user-images.githubusercontent.com/13532530/89498043-19ddd700-d7db-11ea-8adc-bcc2e6b07b94.png" }`} /> */}
                   <img style={{height: "25px", width: "25px", paddingBottom: "2px"}} alt="dark/light" src={`${props.variant === "dark" ? Day : Night }`} />
                  </span>
                </Nav.Item>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
