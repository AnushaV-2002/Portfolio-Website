import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink as Link} from 'react-router-hash-link';




function MyNavbar(){
    return(
      <Navbar data-bs-theme="dark" expand="lg" style={{ backgroundColor: '#303030' }} fixed='top'>
      <Container style={{maxWidth: "100%"}}>
        <Navbar.Brand>Anusha Viswanathan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} smooth to="/#about" className="text-white">About</Nav.Link>
            <Nav.Link as={Link} smooth to="/#experience" className="text-white">Experience</Nav.Link>
            <Nav.Link as={Link} smooth to="/#projects" className="text-white">Projects</Nav.Link>
            <Nav.Link as={Link} smooth to="/#skills" className="text-white">Skills</Nav.Link>
            <Nav.Link as={Link} smooth to="/#contact" className="text-white">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default MyNavbar;