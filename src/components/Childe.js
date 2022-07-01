import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img4 from "../imges/img4.jpeg";
import { Card } from "react-bootstrap";

class Childe extends React.Component {
  state = {
    Person: {
      fullName: "Anas Gharyani",
      bio: "Anas GharyaniI am Anas, I am 27 years old, and I work in Royal Specialist Hospital. My professions are IT Engineer",
      imgSrc: img4,
      profession: "I am a programmer",
    },
    sum: 0,
  };
  // moment of appearance
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        ...this.state,
        sum: this.state.sum + 1,
      });
    }, 1000);
  }
  // moment of disappearance
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <Card style={{ width: "18rem", margin: "70px 0" }}>
          <Card.Img variant="top" src={img4} />
          <Card.Body>
            <Card.Title>{this.state.Person.fullName}</Card.Title>
            <Card.Text>{this.state.Person.bio}</Card.Text>
            <Card.Text>{this.state.sum}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Childe;
