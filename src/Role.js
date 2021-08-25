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
                        <Form.Label>Role Name</Form.Label>
                        <Form.Control type="name" name="name" placeholder="Role" />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" placeholder="Your text goes here..." name="description"rows={3} />
                    </Form.Group>

                    <Button variant="Dark" type="submit">
                        Register
                    </Button>
                </Form>

            </Card.Body>
        </Card>
    )
}




export default Role;