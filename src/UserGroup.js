
import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './App.css';
import Form from 'react-bootstrap/Form';

//https://reactjs.org/docs/forms.html
//this documentation says how to implement the dropdown correctly

/*    //get dropdown data for USERS
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
*/

// another option for later 
// https://www.carlrippon.com/react-drop-down-data-binding/

class UserGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: 'NoUser' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        var object = {};

        object[0] = event.target[1].value;
        var manualJson = ("{\"userGroups\":\"" + event.target[1].value + "\" }");
        console.log(manualJson);
        fetch(`http://localhost:8080/smart-place-pilot-rs/api/user/${event.target[0].value}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: manualJson
        })
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));

    }


    componentDidMount() {
        fetch("http://localhost:8080/smart-place-pilot-rs/api/user/list")
            .then((response) => {
                return response.json();
            })
            .then(data => {
                let teamsFromApi = data.map(team => {
                    return { value: team, display: team }
                });
                this.setState({
                    teams: [{ value: '', display: '(Select your favourite team)' }].concat(teamsFromApi)
                });
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        return (

            <Card style={{ width: '30rem' }} id='card-control'>
                <Card.Title className="text-center mt-3 mb-4">
                    <h3>User Registration in a Group</h3>
                </Card.Title>
                <Card.Body>

                    <Form id="userForm" onSubmit={this.handleSubmit}>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                User Name
                            </Form.Label>
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="grapefruit">Grapefruit</option>
                                <option value="lime">Lime</option>
                                <option value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Group Name
                            </Form.Label>

                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="grapefruit">Grapefruit</option>
                                <option value="lime">Lime</option>
                                <option value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                        </Form.Group>

                        <Button variant="outline-dark" type="submit" value="submit">
                            Register relationship
                        </Button>

                    </Form>

                </Card.Body>
            </Card>

        )
    }
}
export default UserGroup;