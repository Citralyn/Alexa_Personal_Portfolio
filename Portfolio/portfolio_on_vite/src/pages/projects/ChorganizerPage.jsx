import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import page1 from "../../assets/chorganizer/page1.png";
import page2 from "../../assets/chorganizer/page2.png";
import page3 from "../../assets/chorganizer/page3.png";
import page4 from "../../assets/chorganizer/page4.png";
import page5 from "../../assets/chorganizer/page5.png";
import page6 from "../../assets/chorganizer/page6.png";
import page7 from "../../assets/chorganizer/page7.png";
import page8 from "../../assets/chorganizer/page8.png";

function TechStack() {
    return(
        <Col className="text-center">
        <h2>Tech Stack</h2>
        <p>Vite *with the React.js template* for managing dependencies,</p>
        <p>the dev server, and overall client side of things</p>
        <p>React.js, a bit of Bootstrap, and custom artwork for the front-end</p>
        <p>Express.js for the backend server</p>
        <p>Socket.IO for real-time communication between client sockets *the players* and the game server</p>
        </Col>
    )
}

function PageOverview() {

    let pages = [page1, page2, page3, page4, page5, page6, page7, page8];
    let titles = ["main page", "login page", "sign-up page", "existing plans",
        "logout?", "select a community", "select a floor plan", "chore page"
    ]

    return(
        <div>
        <Col>
            <h2 className="text-center">Application Pages</h2>
            {Array.from({ length: 8 }, (_, i) => (
                <Row>
                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Image src={pages[i]} fluid></Image>
                </Col>
                <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                </Col>
                    <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <Card>
                    <Card.Body>
                        <Card.Title>{titles[i]}</Card.Title>
                        <Card.Text>
                        soon to be descriptions
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
                </Row>
            ))}
        </Col>
        </div>
    )
}

function ActionItems() {
    return(
        <Col className="text-center">
            <p>Need to reorganize a lot of unrelated code into separate modules</p>
            <p>Sync app up to a database instead of storing user data locally</p>
            <p>Make compatible to Windows and Linux settings</p>
            <p>Fix Icon *shows up in debug mode, not in release*</p>
        </Col>
    )
}

function RepoShoutOut() {
    return(
        <Col className="text-bg-info text-center">
            <p>Want to contribute/check out the source code?</p>
            <p>Visit the repo! - <a href="https://github.com/Citralyn/ChoreDecideMain">Chore Decider Repo</a></p>
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
            <h2 class="text-center">UML diagram goes here</h2>
            <h1 class="text-center">Current Action Items</h1>
            <ActionItems></ActionItems>
            <RepoShoutOut></RepoShoutOut>
        </div>
    )
}
