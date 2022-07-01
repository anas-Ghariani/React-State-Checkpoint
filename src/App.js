import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import img1 from "./imges/img1.jpeg";
import img2 from "./imges/img2.jpeg";
import img3 from "./imges/img3.jpeg";
import img5 from "./imges/img5.jpeg";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Carousel,
  Button,
  Card,
} from "react-bootstrap";
import Childe from "./components/Childe";

class App extends React.Component {
  state = {
    show: false,
  };
  show = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div className="App">
        {/*  Navbar  */}
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Royal Hospital</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* Card img5  */}
        <Card>
          <Card.Img variant="top" src={img5} width={"400px"} />
          <Card.Body>
            <Card.Text>
              Royal Specialty Hospital 👑 With high sterilization and hygiene
              services, with the presence of a reception department, specialized
              clinics, and accommodation department, and the presence of
              distinguished medical staff from consultants, specialists, doctors
              and auxiliary medical personnel in all specialties: • Department
              of Obstetrics and Gynecology🤰🏻 (obstetrics and cesarean sections -
              gynecological and laparoscopic surgery) • Children's section🤱👼
              (A nursery _ intensive care equipped with one of the equipment and
              the best medical staff of consultants, specialists and doctors on
              a 24/7 basis.) • Adult care department 👴🏼👵🏼 (Excellent care
              equipped with the latest equipment and the best specialized
              medical staff) • Department of General Surgery: It works on... •
              Surgical operations, including: • Orthopedic operations • Diabetic
              foot surgery • Neurosurgery operations Vascular surgeries •
              Thoracic surgery. Abdominal surgery operations. • Colon surgery. •
              eradication of tumors. • Hemorrhoids operations. • Plastic surgery
              operations. • Urology surgery of all kinds. • Endoscopy
              department. The hospital also has outpatient clinics: • Orthopedic
              Clinic • General Surgery Clinic • Diabetic Foot Surgery Clinic. •
              Obstetrics and Gynecology Clinic • Children's Clinic • public
              health. • Ear, Nose and Throat. • Waistcoat. • Gastrointestinal
              system and endoscopy. • Urologist. • Leather. • Integrated
              ambulance. • With a fully equipped laboratory and hospital
              pharmacy that meet the needs of the citizen by all means of
              payment. ____________ the address/ 📌 Royal Specialist Hospital /
              Al-Shok Road / behind Tripoli Medical Hospital. • For inquiries,
              please call the following numbers 📲: 0915110002- 0915110003-
              0915110004 Stay healthy and well 💕 #Royal_Specialty_Hospital
            </Card.Text>
          </Card.Body>
        </Card>
        {/* Carousel img1 & img2 & img3 */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              height={"600px"}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              height={"600px"}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              height={"600px"}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* cv-anas */}
        <div className="cv-anas">
          <h5>
            I am Anas Gharyani, a page programmer and an IT engineer. I worked
            at the Royal Specialist Hospital, an IT engineer, and now I am
            residing in Tunisia. I study at GOMYCODE School in a training course
            from the Ministry of Local Government to develop programming in
            Libya and develop young people’s ideas to enter Libya in the world
            of code and digital programming.
          </h5>
        </div>
        <Button variant="primary" onClick={this.show}>
          Press here
        </Button>

        {/* cardform & childe */}
        <div className="cardform">
          {this.state.show === true ? <Childe /> : null}
        </div>
        <div className="cardform"></div>
        {/* footer */}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
