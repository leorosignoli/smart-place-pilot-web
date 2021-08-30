
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import './App.css';
import Form from 'react-bootstrap/Form';


function UserGroup() {

    //get dropdown data for USERS
    const [result, getdata] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/smart-place-pilot-rs/api/user/list', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(resp => getdata(resp))
    }, [])

    const [output, setdata] = useState([]);
    const Ddlhandle = (e) => {
        setdata(e);
    }

    //get dropdown data for GROUPS
    const [result2, getdata2] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/smart-place-pilot-rs/api/group/list', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(resp2 => resp2.json())
            .then(resp2 => getdata2(resp2))
    }, [])

    const [output2, setdata2] = useState([]);
    const Ddlhandle2 = (e2) => {
        setdata2(e2);
    }


    //send data to BackEnd
    window.onload = function () {
        var userForm = document.getElementById('usgrForm');
        
        userForm.addEventListener('submit', function (event) {
            event.preventDefault();
            var formData = new FormData(userForm);

            var object = {};
            formData.forEach(function (value, key) {
                object[key] = value;
            });
            var json = JSON.stringify(object);
            console.log(json);

            //gets the id to be put on url
            for (var value of formData.values()) {
                console.log(value);
            }
            for (var key of formData.keys()) {
                console.log(key);
            }
            const id = formData.get('id');

            fetch(`http://localhost:8080/smart-place-pilot-rs/api/user/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'PUT',
                body: json
            })
                .then(response => console.log('Success:', JSON.stringify(response)))
                .catch(error => console.error('Error:', error));
        })
    }

    return (

        <Card style={{ width: '30rem' }} id='card-control'>
            <Card.Title className="text-center mt-3 mb-4">
                <h3>User Registration in a Group</h3>
            </Card.Title>
            <Card.Body>

                <Form id="usgrForm" >

                    <Form.Group className="mb-3">
                        <Form.Label>
                            User Name
                        </Form.Label>
                        <DropdownButton variant="outline-dark" id="dropdown-basic-button" title={output} >
                            {
                                result.map((items) => {
                                    return (
                                        <Dropdown.Item name="id" eventKey={items.id} onSelect={Ddlhandle} >{items.username} </Dropdown.Item>
                                    )
                                })
                            }
                        </DropdownButton>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>
                            Group Name
                        </Form.Label>
                        <DropdownButton variant="outline-dark" id="dropdown-basic-button" title={output2}>
                            {
                                result2.map((items2) => {
                                    return (
                                        <Dropdown.Item eventKey={items2.id} onSelect={Ddlhandle2}  >{items2.name}</Dropdown.Item>
                                    )
                                })
                            }
                        </DropdownButton>
                    </Form.Group>

                    <Button variant="outline-dark" type="submit">
                        Register relationship
                    </Button>

                </Form>

            </Card.Body>
        </Card>
    )
}

export default UserGroup;