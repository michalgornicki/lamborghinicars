import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import sample from "./sample.mp4";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
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
import up from "./up.png";

function App() {
  const [scrolled, setScrolled] = useState(false);

  window.onscroll = console.log(scrolled);

  if (scrolled === false) {
    window.onscroll = () => {
      if (window.pageYOffset > 1350) {
        document.getElementById("car-container").className += " " + "car-move";
        document.getElementById("wheel1").className += " " + "wheel-move";
        document.getElementById("wheel2").className += " " + "wheel-move";
        setScrolled(true);
        counter();
      }

    };
  }
  

  const counter = () => {
    var i = 0;
    var j = 5800;

    var intervSpeed = setInterval(function () {
      if (i < 355) document.getElementById("speed").innerHTML = ++i;
      else clearInterval(intervSpeed);
    }, 15);

    var intervPower = setInterval(function () {
      if (i < 780) document.getElementById("power").innerHTML = ++i;
      else clearInterval(intervPower);
    }, 5);

    var intervDispl = setInterval(function () {
      if (j < 6498) document.getElementById("displacement").innerHTML = ++j;
      else clearInterval(intervDispl);
    }, 1);
  };

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
              <NavDropdown title="OUR WORLD" id="collasible-nav-dropdown">
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
              <NavDropdown title="MODELS" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Aventador
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Huracan</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Urus</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Legacy</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="MOTORSPORT" id="collasible-nav-dropdown">
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
              <NavDropdown title="SOLUTIONS" id="collasible-nav-dropdown">
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
              <Nav.Link href="#deets">DEALERSHIP</Nav.Link>
              <Nav.Link href="#deets">STORE</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

<Container></Container>
        <video className="video" autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>

      <Carousel pause={false} fade indicators={false}>
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

      <Container className="h-100vh mobile-hide">
        <Container className="car-container" id="car-container">
          <img className="car" src={Lambo} alt="" />
          <img className="wheel1" id="wheel1" src={Wheel} alt="" />
          <img className="wheel2" id="wheel2" src={Wheel} alt="" />
        </Container>

        <div className="d-flex flex-column mx-auto w-50 m-top-30">
          <div className="flex-row">
            <span className="d-inline-block w-100 text-center mb-5 display-5">
              Technical specification
            </span>
          </div>
          <div className="flex-row border-bottom mb-3">
            <span className="d-inline-block w-50 text-left">Displacement</span>
            <span className="d-inline-block w-50">
              {" "}
              <span id="displacement">0</span> cm3 (396.5 cu in)
            </span>
          </div>
          <div className="flex-row border-bottom mb-3">
            <span className="d-inline-block w-50 text-left">MAX. POWER</span>
            <span className="d-inline-block w-50">
              <span id="power">0</span> HP at 8,500 rpm
            </span>
          </div>
          <div className="flex-row border-bottom mb-3">
            <span className="d-inline-block w-50 text-left">TOP SPEED</span>
            <span className="d-inline-block w-50">
              <span id="speed">0</span> km/h
            </span>
          </div>
          <div className="flex-row border-bottom mb-3">
            <span className="d-inline-block w-50 text-left">
              ACCELERATION 0-100 KM/H (MPH 0-62)
            </span>
            <span className="d-inline-block w-50">2.8 s</span>
          </div>
          <div className="flex-row">
            <span className="d-inline-block w-50 text-left align-top">
              TRANSMISSION TYPE
            </span>
            <span className="d-inline-block w-50">
              Electronically controlled all-wheel drive system (Haldex gen. IV)
              with rear mechanical self-locking differential
            </span>
          </div>
        </div>
      </Container>

      <h3 className="display-5 text-center w-50">OTHER MODELS</h3>

      <Container className="w-lg-75 m-auto position-relative p-0 mb-5 d-flex flex-lg-row flex-column">
        <div className="column d-flex flex-column">
          <div className="overflow-hidden mx-lg-4">
            <img className="image-square" src={Img6} alt="" />
          </div>
          <div className="overflow-hidden mx-lg-4">
            <img className="image-square" src={Img7} alt="" />
          </div>
        </div>
        <div className="column d-flex flex-column">
          <div className="overflow-hidden">
            <img className="image-square-large" src={Img8} alt="" />
          </div>
        </div>
      </Container>

      <Container className="mw-100 position-relative p-0 mb-5">
        <div className="overflow-hidden">
          <img className="image" src={Dealer} alt="" />
        </div>
        <div className="image-text">
          <h3 className="display-4">dealer locator</h3>
          <h3 className="display-1">Find dealer in your city</h3>
        </div>
      </Container>

      <a href="#top">
        {" "}
        <img src={up} alt="" className="up-icon shadow" />
      </a>

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
