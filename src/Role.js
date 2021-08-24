import React from 'react';
import './App.css';
import { Form, Card, Button } from 'react-bootstrap';


function Role() {

    window.onload = function () {
        var userForm = document.getElementById('roleForm');
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
        <Card style={{ width: '30rem' }} id='card-control'>
            
            <Card.Body>
                    <Form id="roleForm">
                        <Card.Title className="text-center mb-3">
                            <h2>Role</h2>
                        </Card.Title>

                        <Form.Group className="mb-3">
                            <label>Role Name</label>
                            <input type="name" name="name" placeholder="Role" class="form-control" />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <label>Description</label>
                            <textarea name="description" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your text goes here..."></textarea>
                        </Form.Group>

                        <Button variant="dark" type="submit">
                            Register
                        </Button>
                    </Form>
                
            </Card.Body>
        </Card>
    )
}




export default Role;