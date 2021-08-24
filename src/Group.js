import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Group() {

  window.onload = function () {
    var userForm = document.getElementById('groupForm');
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
    <Card style={{ width: '22rem' }} id='card-control'>

      <Card.Body>
        <Form id="groupForm">
          <Card.Title className="text-center mb-3">
            <h2>Group</h2>
          </Card.Title>

          <label>
            Group Name</label>
          <input name="group" className="form-control mb-4" placeholder="Group"/>

          <Button variant="dark" type="submit" class="btn btn-primary">Register</Button>

        </Form>
      </Card.Body>
    </Card>

  )
}




export default Group;