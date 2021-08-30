
import { Form, Card, Button } from 'react-bootstrap';
import  React, {useEffect, useState } from 'react';
import './App.css';

function UserGroup() {

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
        fetch('http://localhost:8080/smart-place-pilot-rs/api/group/list', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(resp => emplist2(resp))
    }, [])


    //register users in groups
    window.onload = function () {
        var userForm = document.getElementById('UserGroup');
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

        <Card style={{ width: '30rem' }} id='card-control'>

            <Card.Body>
                <Card.Title className="text-center mb-4">
                    <h3>User Registration in a Group</h3>
                </Card.Title>

                <Form id='UserGroup'>
                    <Form.Group className="mt-3 mb-3">
                        <Form.Label>
                            User
                        </Form.Label>
                        <Form.Control as="select">
                            <option>Select a User</option>
                            {
                                result.map(x => {
                                    return (
                                        <option title={x.id} value={x.id}>{x.username}</option>
                                    )
                                })
                            }
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="mt-3 mb-3">
                        <Form.Label>
                            Group
                        </Form.Label>
                        <Form.Control as="select">
                            <option>Select a Group</option>
                            {
                                result2.map(x2 => {
                                    return (
                                        <option title={x2.id} value={x2.id}>{x2.name}</option>
                                    )
                                })
                            }
                        </Form.Control>
                    </Form.Group>

                    <Button variant="outline-dark" type="submit">
                        Register Relationship
                    </Button>
                </Form>

            </Card.Body>
        </Card>
    )
}

export default UserGroup;