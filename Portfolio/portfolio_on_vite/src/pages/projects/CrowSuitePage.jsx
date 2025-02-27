import cj from "/crowsuite/crow_jack.png"
import ck from "/crowsuite/crow_king.png"
import cq from "/crowsuite/crow_queen.png"

import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { BackToProjects } from "../../utilities/BackButton";
import {MajorHeading, MinorHeading } from '../../utilities/PersonalizedHeading';
import HGap from "../../utilities/HGap";
import VGap from "../../utilities/VGap";

import ListGroup from 'react-bootstrap/ListGroup';



function CrowSuiteDisplay() {
    let card_images = [cj, ck, cq]

    return(
        <>
        <Row>
            {Array.from({ length: 3 }, (_, i) => (
                <Col>
                    <Image src={card_images[i]} fluid></Image>
                </Col>
            ))}
        </Row>
        </>
    )
}

function TechStack() {
    return(
        <div>
        <MinorHeading message="Teck Stack"/>
        <Row className="text-center justify-content-center align-items-center">
        <Container style={{width: "80vw"}} className="bg-secondary p-3 m-3 rounded shadow">
        <ListGroup className="shadow" as="ol" numbered>
            <ListGroup.Item as="li">
                Vite *with the React.js template* for managing dependencies,
                the dev server, and overall client side of things
            </ListGroup.Item>
            <ListGroup.Item as="li">
                React.js, a bit of Bootstrap, and custom artwork for the front-end
            </ListGroup.Item>
            <ListGroup.Item as="li">Express.js for the backend server</ListGroup.Item>
            <ListGroup.Item as="li">Socket.IO for real-time communication between client sockets *the players* and the game server</ListGroup.Item>
        </ListGroup>
        </Container>
        </Row>
        </div>
    )
}

function ActionItems() {
    return(
        <div>
        <MinorHeading message="Action Items"/>
        <Row className="text-center justify-content-center align-items-center">
        <Container style={{width: "80vw"}} className="bg-secondary p-3 m-3 rounded shadow">
        <ListGroup className="shadow" as="ol" numbered>
            <ListGroup.Item as="li">
            Utilize a Bootstrap navbar *existing one sucks*
            </ListGroup.Item>
            <ListGroup.Item as="li">
            Use Bootstrap components for the game page
            </ListGroup.Item>
            <ListGroup.Item as="li">Better document code *both the code itself, and the README on Github*</ListGroup.Item>
        </ListGroup>
        </Container>
        </Row>
        </div>
    )
}

function RepoShoutOut() {
    return(
        <Row className="justify-content-center align-items-center">
            <VGap given_width={"30vw"}></VGap>
            <Col className="text-center">
            <h5>Want to Contribute?</h5>
            <p>Make a Pull Request to the Online Github Repository!</p>
            <Button className="shadow" variant="danger" as="a" target="_blank" href="https://github.com/Citralyn/CrowSuite">CrowSuite Repo</Button>
            </Col>
            <VGap given_width={"30vw"}></VGap>
        </Row>
    )
}

export default function CrowSuitePage() {
    return(
        <div>
            <BackToProjects></BackToProjects>
            <MajorHeading message={"How I Built CrowSuite"}></MajorHeading>
            <HGap given_height={"10vh"}></HGap>
            <TechStack></TechStack>
            <HGap given_height={"10vh"}></HGap>
            <CrowSuiteDisplay></CrowSuiteDisplay>
            <HGap given_height={"10vh"}></HGap>
            <ActionItems></ActionItems>
            <HGap given_height={"5vh"}></HGap>
            <RepoShoutOut></RepoShoutOut>
            <HGap given_height={"10vh"}></HGap>
        </div>
    )
}