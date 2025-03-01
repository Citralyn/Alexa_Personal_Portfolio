import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Outlet, Link } from "react-router";

export default function MainLayout() {
  return (
    <div>
        {/* Expand is set to false so user has to click hamburger menu */}
        <Navbar expand="false" className="bg-body-tertiary">
            <Container>
                {/* Brand routes back to home page */}
                <Navbar.Brand href="/">
                    <Row className='text-bg-transparent shadow-sm rounded justify-content-center align-items-center'>
                        <Col>
                            <h2 style={{fontSize: "4vw"}}>
                            &#128155;  Alexa's Personal Portfolio  &#128155;
                            </h2>
                        </Col>
                    </Row>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Navbar hamburger menu (floated to the right) */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={{float: "right"}}>
                        <Nav.Link href="/about">About Me</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/puzzle">Just For Fun</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>

        {/* outlet for the child page to be rendered */}
        <Outlet />
    </div>
  );
}
