import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { Outlet } from "react-router";

export default function ProjectLayout() {
  return (
    <div>
        <Navbar expand="false" className="bg-body-tertiary">
            <Container flex>
                <Navbar.Brand href="/">
                <Row>
                    <Col xs={{span: 4, offset: 0}}>
                        <h2>Alexa's Personal Portfolio</h2>
                    </Col>
                    <Col xs={{span: 1, offset: 6}}>
                        <Image style={{width: "3vw"}} src="/yellow_heart.png"></Image>
                    </Col>
                </Row>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{float: "right"}}>
                    <Nav.Link href="/">Back to Home</Nav.Link>
                    <Nav.Link href="/projects/crowsuite">CrowSuite</Nav.Link>
                    <Nav.Link href="/projects/chore_decider">Chore Decider</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Outlet />
    </div>
  );
}
