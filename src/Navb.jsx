import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./Navb.css";

function Navb() {
  return (
    <div >
      <Navbar bg="info" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/"><h1>Movie-app</h1></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            
            <Nav  >
              <Nav.Link ><Link to="/">Popular</Link></Nav.Link>
              {/* <Nav.Link href="/cardd">popular movies</Nav.Link> */}
              <Nav.Link>
                <Link to="/comedy">comedy movies</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/latest">latest movies</Link>
              </Nav.Link>
              
             
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navb;
