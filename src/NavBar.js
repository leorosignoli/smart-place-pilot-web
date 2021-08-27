import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import logo from "./img/gwlogo.svg";

function NavBar() {
    return (
        
        <Navbar bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt="g w cloud logo"
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-middle"
                    />{'     '}
                    Smartplace
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">

                        <Nav.Link href="./User">Users</Nav.Link>
                        <Nav.Link href="./Group">Groups</Nav.Link>
                        <Nav.Link href="./Role">Roles</Nav.Link>

                        <NavDropdown title="Relationship" id="basic-nav-dropdown">
                            <NavDropdown.Item href="./UserGroup">Register User in Group</NavDropdown.Item>
                            <NavDropdown.Item href="./GroupRole">Register Group in Role</NavDropdown.Item>
                            <NavDropdown.Item href="./UserRole">Register User in Role</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar;