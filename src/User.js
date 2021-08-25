import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function User() {

  window.onload = function () {
    var userForm = document.getElementById('userForm');
    userForm.addEventListener('submit', function (event) {
      var formData = new FormData(userForm);
      var object = {};
      formData.forEach(function (value, key) {
        object[key] = value;
      });
      var json = JSON.stringify(object);
      console.log(json);
      event.preventDefault(); //this func stops the form from submiting
    })
  }

  return (


    <Card style={{ width: '32rem' }} id='card-control'>
      <Card.Body >
        <Card.Title className="text-center mb-3">
          <h2>User</h2>
        </Card.Title>

        <Form id='userForm'>

          <Form.Group className="mb-3">
            <Form.Label> Username </Form.Label>
            <Form.Control placeholder="Username123"name="username" required/>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name="first_name" required/>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name="last_name"  required/>
            </Form.Group>
          </Row>


          <Form.Label>E-mail</Form.Label>
          <Form.Control name="email" required/>

          <Row className="mb-3">
            <Col>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password"  required/>
              <Form.Text className="text-muted">Password must contain at least 7 characters.</Form.Text>
            </Col>
          </Row>

          <Button variant="outline-dark" type="submit" >Register</Button>
        </Form>

      </Card.Body>
    </Card>
  )
}


export default User;