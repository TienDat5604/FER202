import React from 'react';
import { Container, Card } from 'react-bootstrap';

function About() {
  return (
    <Container className="mt-4">
      <h1>About Us</h1>
      <Card className="p-4">
        <Card.Body>
          <Card.Title>Welcome to our Food Quiz App</Card.Title>
          <Card.Text>
            Our mission is to provide a fun and engaging way for food enthusiasts to test their
            culinary knowledge and learn more about food from around the world.
          </Card.Text>
          <Card.Text>
            This app was created as a project for FER202 course to demonstrate the use of
            React Router, React Bootstrap, and various React concepts such as state management,
            props, and component composition.
          </Card.Text>
          <Card.Text>
            Feel free to browse the latest food news, take our quiz, and contact us if you have 
            any questions or suggestions for improving our app.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About; 