import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import page1 from "/chorganizer/page1.png";
import page2 from "/chorganizer/page2.png";
import page3 from "/chorganizer/page3.png";
import page4 from "/chorganizer/page4.png";
import page5 from "/chorganizer/page5.png";
import page6 from "/chorganizer/page6.png";
import page7 from "/chorganizer/page7.png";
import page8 from "/chorganizer/page8.png";

import {MajorHeading, MinorHeading } from '../../utilities/PersonalizedHeading';

function TechStack() {
    return(
        <Col className="text-center">
        <h2>Tech Stack</h2>
        <p>Qt Creator - a C++ IDE - for the central application logic</p>
        <p>Qt Widgets for the main UI</p>
        <p>CMake for the build process</p>
        <p>Canva to make the MacOS desktop icon</p>
        <p>ACC home-pages for images of the floor plans</p>
        </Col>
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
            <h2 className="text-center">Application Pages</h2>
            {Array.from({ length: 8 }, (_, i) => (
                <Col>
                <Row>
                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Image src={pages[i]} fluid></Image>
                </Col>
                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                </Col>
                    <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <Card className='text-center'>
                    <Card.Body>
                        <Card.Title>{titles[i]}</Card.Title>
                        <hr></hr>
                        <Card.Text>
                        {descriptions[i]}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
                </Row>
                <hr></hr>
                </Col>
            ))}
        </Col>
        </div>
    )
}

function ActionItems() {
    return(
        <Col className="text-center">
            <p>Add UML Diagram</p>
            <p>Need to reorganize a lot of unrelated code into separate modules</p>
            <p>Integrate the other floorplans *not just PV and PV2*</p>
            <p>Sync app up to a database instead of storing user data locally</p>
            <p>Make compatible to Windows and Linux settings</p>
            <p>Fix Icon *shows up in debug mode, not in release*</p>
            <p>Checks for errors occur *incorrect login, can't find file, etc*</p>
        </Col>
    )
}

function RepoShoutOut() {
    return(
        <Col className="text-bg-info text-center">
            <p>Want to contribute/check out the source code?</p>
            <p>Visit the repo! - <a target="_blank" href="https://github.com/Citralyn/ChoreDecideMain">Chore Decider Repo</a></p>
        </Col>
    )
}

export default function ChorganizerPage() {
    return(
        <div>
            <Button variant="secondary" as="a" href="/projects">Back to Projects</Button>
            <h1 class="text-center">How I Built Chore Decider</h1>
            <TechStack></TechStack>
            <PageOverview></PageOverview>
            <h1 class="text-center">Current Action Items</h1>
            <ActionItems></ActionItems>
            <RepoShoutOut></RepoShoutOut>
        </div>
    )
}
