import React from 'react';
import './App.css';
import { Form, Card, Button } from 'react-bootstrap';


function Role() {
    return (
        <Card.Body>
            <div className="wrapper" id="wrapper-role" >
                <Form>
                    <div class="form-label" id="labelForm">
                        <h2>Role</h2>
                    </div>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Role Name</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Card.Body>
    )
}




export default Role;