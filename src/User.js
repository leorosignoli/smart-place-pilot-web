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
      event.preventDefault();
      var formData = new FormData(userForm);
      var object = {};
      formData.forEach(function (value, key) {
        object[key] = value;
      });
      var json = JSON.stringify(object);
      console.log(json);
      fetch('http://localhost:8080/smart-place-pilot-rs/api/user/', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',

        },
        method: 'POST',
        body: json
      })
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
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
            <Form.Control placeholder="Username123" name="username" required />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name="firstName" required />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name="lastName" required />
            </Form.Group>
          </Row>

          <Form.Group>
            <Form.Label>E-mail</Form.Label>
            <Form.Control name="email" className="mb-4" required />
          </Form.Group>

          <Button variant="outline-dark" type="submit" >Register</Button>
        </Form>

      </Card.Body>
    </Card>
  )
}


export default User;