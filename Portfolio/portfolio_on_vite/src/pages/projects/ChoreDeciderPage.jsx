import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup';

import { BackToProjects } from "../../utilities/BackButton";
import {MajorHeading, MinorHeading, MediumHeading} from '../../utilities/PersonalizedHeading';
import HGap from "../../utilities/HGap";
import VGap from "../../utilities/VGap";

import page1 from "/chorganizer/page1.png";
import page2 from "/chorganizer/page2.png";
import page3 from "/chorganizer/page3.png";
import page4 from "/chorganizer/page4.png";
import page5 from "/chorganizer/page5.png";
import page6 from "/chorganizer/page6.png";
import page7 from "/chorganizer/page7.png";
import page8 from "/chorganizer/page8.png";

function TechStack() {
    return(
        <div>
        <MinorHeading message="Tech Stack"/>
        <Row className="text-center justify-content-center align-items-center">
        <Container className="w-75 bg-secondary p-3 m-3 rounded shadow">
        <ListGroup className="shadow" as="ol" numbered>
            <ListGroup.Item as="li">
            Qt Creator - a C++ IDE - for the central application logic
            </ListGroup.Item>
            <ListGroup.Item as="li">
            Qt Widgets for the main UI
            </ListGroup.Item>
            <ListGroup.Item as="li">CMake for the build process</ListGroup.Item>
            <ListGroup.Item as="li">Canva to make the MacOS desktop icon</ListGroup.Item>
            <ListGroup.Item as="li">Macdeployqt for making app a deployable application bundle</ListGroup.Item>
        </ListGroup>
        </Container>
        </Row>
        </div>
    )
}

function PageOverview() {

    let pages = [page1, page2, page3, page4, page5, page6, page7, page8];
    let titles = ["Main Page", "Login Page", "Sign-up Page", "Existing Plans",
        "Logout?", "Select a Community", "Select a Floor Plan", "Chore Page"
    ]
    let descriptions = [
        "Main Page for Chore Decider where the user can LOG IN or SIGN UP",
        "Existing users can log in with a username and password",
        "New users can sign up with a username and password",
        "Users can view their existing plans",
        "Need to log out or want to revisit main page?",
        "Users can select an ACC community",
        "Users can select a floor plan from their ACC community",
        "Users can select an area in the plan to add a chore. \
        Chore automatically saves and plan can be returned to later."
    ]

    return(
        <div>
        <Col>
            <MediumHeading message="Application Pages"/>
            <hr></hr>
            {Array.from({ length: 8 }, (_, i) => (
                <Col>
                <Container className="p-3 shadow bg-info rounded">
                <Row className="justify-content-center align-items-center h-20">
                
                <Col lg>
                </Col>
                <Col xs={8} lg={4}>
                    <Image className="shadow" src={pages[i]} fluid></Image>
                </Col>
                <Col lg>
                </Col>
                    <Col xs={8} lg={4}>
                        <Card className='m-3 shadow text-center'>
                            <Card.Body>
                                <Card.Title>{titles[i]}</Card.Title>
                                <hr></hr>
                                <Card.Text>
                                {descriptions[i]}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg>
                    </Col>
                </Row>
                </Container>
                <hr></hr>
                </Col>
            ))}
        </Col>
        </div>
    )
}

function ActionItems() {
    return(
        <div>
        <MinorHeading message="Action Items"/>
        <Row className="text-center justify-content-center align-items-center">
        <Container className="w-75 bg-secondary p-3 m-3 rounded shadow">
        <ListGroup className="shadow" as="ol" numbered>
            <ListGroup.Item as="li">
            Add a UML Diagram
            </ListGroup.Item>
            <ListGroup.Item as="li">
            Reorganize unrelated code into separate modules
            </ListGroup.Item>
            <ListGroup.Item as="li">Integrate the other floorplans *not just PV and PV2*</ListGroup.Item>
            <ListGroup.Item as="li">Sync app up to a database instead of storing user data locally</ListGroup.Item>
            <ListGroup.Item as="li">Make deployable to Windows and Linux environments</ListGroup.Item>
            <ListGroup.Item as="li">Fix Icon *shows up in debug mode, not in release*</ListGroup.Item>
            <ListGroup.Item as="li">
            Checks app for errors *incorrect login, can't find file, etc*
            </ListGroup.Item>
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
            <Button className="shadow" variant="danger" as="a" target="_blank" href="https://github.com/Citralyn/ChoreDecideMain">Chore Decider Repo</Button>
            </Col>
            <VGap given_width={"30vw"}></VGap>
        </Row>
    )
}

export default function ChorganizerPage() {
    return(
        <div>
            <BackToProjects/>
            <MajorHeading message={"How I Built Chore Decider"}></MajorHeading>
            <HGap given_height={"10vh"}></HGap>
            <TechStack></TechStack>
            <HGap given_height={"10vh"}></HGap>
            <PageOverview></PageOverview>
            <HGap given_height={"10vh"}></HGap>
            <ActionItems></ActionItems>
            <HGap given_height={"5vh"}></HGap>
            <RepoShoutOut></RepoShoutOut>
            <HGap given_height={"10vh"}></HGap>
        </div>
    )
}
