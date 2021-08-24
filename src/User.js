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
            <label> Username </label>
            <input placeholder="Username123" type="username" name="username" class="form-control" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <label>First Name</label>
              <input type="text" name="first-name" class="form-control" />
            </Form.Group>
            <Form.Group as={Col}>
              <label>Last Name</label>
              <input type="text" name="last-name" class="form-control" />
            </Form.Group>
          </Row>


          <label>E-mail</label>
          <input name="email" class="form-control mb-3" />

          <Row className="mb-3">
            <Col>
              <label>Password</label>
              <input type="password" name="password" class="form-control" />
            </Col>
          </Row>

          <Button variant="dark" type="submit" >Register</Button>
        </Form>

      </Card.Body>
    </Card>
  )
}


export default User;