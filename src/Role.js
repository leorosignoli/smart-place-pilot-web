import React from 'react';
import './App.css';
import { Form, Card, Button } from 'react-bootstrap';


function Role() {
    document.addEventListener('submit', (e) => {
        const formData = new FormData(e.target);
        const data = Array.from(formData.entries()).reduce((memo, pair) => ({
            ...memo,
            [pair[0]]: pair[1],
        }), {});
        document.getElementById('output').innerHTML = JSON.stringify(data);
        e.preventDefault(); // stops from refreshing the page
    })
    return (
        <Card.Body>
            <div className="wrapper" id="wrapper-role" >
                <Form >
                    <div class="form-label" id="labelForm">
                        <h2>Role</h2>
                    </div>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Role Name</Form.Label>
                        <Form.Control type="name" placeholder="Role name" />
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
            <pre id='output'>Values in Json</pre>
        </Card.Body>
    )
}




export default Role;