import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import sample from "./sample.mp4";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Img2 from "./2.jpg"
import Img3 from "./3.jpg"
import Img4 from "./4.jpg"
import Img5 from "./5.jpg"
import Logo from "./logo.png"
import Dealer from "./dealer.jpg"


function App() {
  return (
    <div>


      <Navbar className="py-3" collapseOnSelect expand="lg" bg="black" variant="dark">
  <Container className="mw-90 m-auto">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav w-100">
    <Nav className="w-35 justify-content-between">
      <NavDropdown title="Our world" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Brand stories</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Racing</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Heritage</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Partnerships</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Models" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Aventador</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Huracan</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Urus</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Legacy</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Motorsport" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Super trofeo</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">GT3</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Motorsport drivers</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">E-sports</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  <Navbar.Brand href="#home" className="w-50 text-center m-auto"><img className="logo" src={Logo} alt=""/></Navbar.Brand>
    <Nav className="w-35 justify-content-between">
    <NavDropdown title="Solutions" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Customization</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Accesories</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Financial Services</NavDropdown.Item>
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

      <Carousel fade className="my-5" indicators={false}>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h4 className="display-5">Choose your</h4>
      <h3 className="display-1">Aventador</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img3}
      alt="Third slide"
    />

<Carousel.Caption>
      <h4 className="display-5">Choose your</h4>
      <h3 className="display-1">Aventador</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img4}
      alt="First slide"
    />
     <Carousel.Caption>
      <h4 className="display-5">Choose your</h4>
      <h3 className="display-1">Aventador</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img5}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4 className="display-5">Choose your</h4>
      <h3 className="display-1">Aventador</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<Container className="mw-100">
<img className ="image" src={Dealer} alt="" />
  <Carousel.Caption>
      <h4 className="display-5">Choose your</h4>
      <h3 className="display-1">Aventador</h3>
    </Carousel.Caption>
</Container>


    </div>
  );
}

export default App;
