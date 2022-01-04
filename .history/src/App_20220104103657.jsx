import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import sample from "./sample.mp4";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Img2 from "./2.jpg";
import Img3 from "./3.jpg";
import Img4 from "./4.jpg";
import Img5 from "./5.jpg";
import Img6 from "./6.jpg";
import Img7 from "./7.jpg";
import Img8 from "./8.jpg";
import Logo from "./logo.png";
import Dealer from "./dealer.jpg";
import Lambo from "./lambo.png";
import Wheel from "./wheel.png";

function App() {

  window.onscroll = () => {

    if (window.pageYOffset < 600) {
        
    }


  return (
    <div>
      <Navbar
        className="py-3"
        collapseOnSelect
        expand="lg"
        bg="black"
        variant="dark"
      >
        <Container className="mw-90 m-auto">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav w-100">
            <Nav className="w-35 justify-content-between">
              <NavDropdown title="Our world" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Brand stories
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Racing</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Heritage</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Partnerships
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Models" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Aventador
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Huracan</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Urus</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Legacy</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Motorsport" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Super trofeo
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">GT3</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Motorsport drivers
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">E-sports</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Navbar.Brand href="#home" className="w-50 text-center m-auto">
              <img className="logo" src={Logo} alt="" />
            </Navbar.Brand>
            <Nav className="w-35 justify-content-between">
              <NavDropdown title="Solutions" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Customization
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Accesories
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Financial Services
                </NavDropdown.Item>
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

      <Carousel pause={false} fade className="my-5" indicators={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={Img2} alt="Second slide" />

          <Carousel.Caption>
            <h4 className="display-5">Choose your</h4>
            <h3 className="display-1">Aventador</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Img3} alt="Third slide" />

          <Carousel.Caption>
            <h4 className="display-5">Choose your</h4>
            <h3 className="display-1">Aventador</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Img4} alt="First slide" />
          <Carousel.Caption>
            <h4 className="display-5">Choose your</h4>
            <h3 className="display-1">Aventador</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Img5} alt="First slide" />
          <Carousel.Caption>
            <h4 className="display-5">Choose your</h4>
            <h3 className="display-1">Aventador</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="h-100vh">

      <Container className="car-container" id="car-container">
      <img className="car" src={Lambo} alt="" />
      <img className="wheel1" src={Wheel} alt="" />
      <img className="wheel2" src={Wheel} alt="" />
      </Container>

      </Container>


      <h3 className="display-5 text-center w-50">OTHER MODELS</h3>

      <Container className="w-75 m-auto position-relative p-0 mb-5 d-flex flex-lg-row flex-column">
        <div className="column d-flex flex-column">
          <div className="overflow-hidden mx-4"><img className="image-square" src={Img6} alt="" /></div>
          <div className="overflow-hidden  mx-4"><img className="image-square" src={Img7} alt="" /></div>
        </div>
        <div className="column d-flex flex-column">
        <div className="overflow-hidden"><img className="image-square-large" src={Img8} alt="" /></div>
        </div>
      </Container>

      <Container className="mw-100 position-relative p-0 mb-5">
        <div className="overflow-hidden"><img className="image" src={Dealer} alt="" /></div>
        <div className="image-text">
          <h3 className="display-4">dealer locator</h3>
          <h3 className="display-1">Find dealer in your city</h3>
        </div>
      </Container>

      <Navbar
        className="py-5"
        collapseOnSelect
        expand="lg"
        bg="black"
        variant="dark"
      >
        <Container className="mw-90 m-auto">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav w-100">
            <Nav className="w-50 justify-content-evenly">
              <Nav.Link href="#deets">Our world</Nav.Link>
              <Nav.Link href="#deets">Models</Nav.Link>
              <Nav.Link href="#deets">Motorsport</Nav.Link>
            </Nav>
            <Nav className="w-50 justify-content-evenly">
              <Nav.Link href="#deets">Solutions</Nav.Link>
              <Nav.Link href="#deets">Dealership</Nav.Link>
              <Nav.Link href="#deets">Store</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
