import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Tab, Row, Col } from 'react-bootstrap';
import Counter from './components/Counter';
import ChangeNameAge from './components/ChangeNameAge';
import ItemList from './components/ItemList';
import ItemListAdvanced from './components/ItemListAdvanced';
import QuestionBank from './components/QuestionBank';
import QuestionBankAdvanced from './components/QuestionBankAdvanced';

function App() {
  const [key, setKey] = useState('counter');

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">React useReducer Exercises</h1>
      
      <Tab.Container id="exercise-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="counter">Exercise 1: Counter</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="changeNameAge">Exercise 2: Change Name & Age</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="itemList">Exercise 3: Item List</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="itemListAdvanced">Exercise 4: Advanced Item List</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="questionBank">Exercise 5: Question Bank</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="questionBankAdvanced">Exercise 6: Advanced Question Bank</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="counter">
                <h2>Simple Counter with useReducer</h2>
                <Counter />
              </Tab.Pane>
              <Tab.Pane eventKey="changeNameAge">
                <h2>Name & Age Form with useReducer</h2>
                <ChangeNameAge />
              </Tab.Pane>
              <Tab.Pane eventKey="itemList">
                <h2>Basic Item List</h2>
                <ItemList />
              </Tab.Pane>
              <Tab.Pane eventKey="itemListAdvanced">
                <h2>Advanced Item List with Edit, Sort & Filter</h2>
                <ItemListAdvanced />
              </Tab.Pane>
              <Tab.Pane eventKey="questionBank">
                <h2>Basic Quiz App</h2>
                <QuestionBank />
              </Tab.Pane>
              <Tab.Pane eventKey="questionBankAdvanced">
                <h2>Advanced Quiz App</h2>
                <QuestionBankAdvanced />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default App;
