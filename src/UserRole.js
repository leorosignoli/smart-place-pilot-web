
import { Form, Card, Button } from 'react-bootstrap';
import  React, {useEffect, useState } from 'react';
import './App.css';

function UserRole() {

    //get dropdown data for USERS
    const [result, emplist] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/smart-place-pilot-rs/api/user/list', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(resp => emplist(resp))
    }, [])

    //get dropdown data for GROUPS
    const [result2, emplist2] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/smart-place-pilot-rs/api/role/list', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(resp => emplist2(resp))
    }, [])


    //persist the relationship
    

    return (

        <Card style={{ width: '30rem' }} id='card-control'>

            <Card.Body>
                <Card.Title className="text-center mb-4">
                    <h3>User Registration in a Role</h3>
                </Card.Title>

                <Form id= 'UserRole'>
                    <Form.Group className=" mb-3">
                        <Form.Label>
                            User
                        </Form.Label>
                        <Form.Control as="select">
                            <option>Select a User</option>
                            {
                                result.map(x => {
                                    return (
                                        <option title={x.username} value={x.id}>{x.username}</option>
                                    )
                                })
                            }
                        </Form.Control>
                    </Form.Group>


                    <Form.Group className="mb-4">
                        <Form.Label>
                            Role
                        </Form.Label>
                        <Form.Control as="select">
                            <option>Select a Role</option>
                            {
                                result2.map(x2 => {
                                    return (
                                        <option title={x2.name} value={x2.id}>{x2.name}</option>
                                    )
                                })
                            }
                        </Form.Control>
                    </Form.Group>

                    <Button variant="outline-dark" className="mt-3" type="submit">
                        Register relationship
                    </Button>

                </Form>
            </Card.Body>
        </Card>
    )
}

export default UserRole;