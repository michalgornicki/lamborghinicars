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


      <Navbar className="py-4" collapseOnSelect expand="lg" bg="black" variant="dark">
  <Container className="mw-90 m-auto">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav w-100">
    <Nav className="w-25 justify-content-start">
      <NavDropdown title="Our world" id="collasible-nav-dropdown" className="">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Models" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Motorsport" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  <Navbar.Brand href="#home" className="w-50 text-center m-auto">Lamborghini</Navbar.Brand>
    <Nav className="w-25 justify-content-end">
    <NavDropdown title="Solutions" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#deets">Dealership</Nav.Link>
      <Nav.Link href="#deets">Store</Nav.Link>

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
