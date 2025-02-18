import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Outlet, Link } from "react-router";

export default function MiscLayout() {
  return (
    <div>
        <Navbar expand="false" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Alexa's Personal Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{float: "right"}}>
                    <Nav.Link href="/">Back to Home</Nav.Link>
                    <Nav.Link href="/misc/api_fun">Let's explore APIs!</Nav.Link>
                    <Nav.Link href="/misc/terminal_fun">Let's explore the terminal!</Nav.Link>
                    <Nav.Link href="/misc/db_fun">Let's explore databases!</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Outlet />
    </div>
  );
}