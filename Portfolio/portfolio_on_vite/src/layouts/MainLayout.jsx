import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { Outlet, Link } from "react-router";

export default function MainLayout() {
  return (
    <div>
        <div className="text-bg-danger">
        <Navbar expand="false" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">
                <Row>
                    <Col>
                        <Image style={{width: "3vw"}} src="yellow_heart.png"></Image>
                    </Col>
                    <Col>
                        <h2>Alexa's Personal Portfolio</h2>
                    </Col>
                    <Col>
                        <Image style={{width: "3vw"}} src="yellow_heart.png"></Image>
                    </Col>
                </Row>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={{float: "right"}}>
                        <Nav.Link href="/about">About Me</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/puzzle">Just For Fun</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
        <Outlet />
    </div>
  );
}
