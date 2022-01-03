import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import sample from "./sample.mp4";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'


function App() {
  return (
    <p>


      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container className="w-100">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav w-100">
    <Nav className="">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  <Navbar.Brand href="#home" className="w-50 text-center">React-Bootstrap</Navbar.Brand>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

<video className="video" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>

    </p>
  );
}

export default App;
