import cj from "/crowsuite/crow_jack.png"
import ck from "/crowsuite/crow_king.png"
import cq from "/crowsuite/crow_queen.png"

import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";



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

function ActionItems() {
    return(
        <Col className="text-center">
            <p>Utilize a Bootstrap navbar *existing one sucks*</p>
            <p>Use Bootstrap components for the game page</p>
            <p>Better document code *both the code itself, and the README on Github*</p>
        </Col>
    )
}

function RepoShoutOut() {
    return(
        <Col className="text-bg-info text-center">
            <p>Want to contribute/check out the source code?</p>
            <p>Visit the repo! - <a target="_blank" href="https://github.com/Citralyn/CrowSuite">CrowSuiteRepo</a></p>
        </Col>
    )
}

export default function CrowSuitePage() {
    return(
        <div>
            <Button variant="secondary" as="a" href="/projects">Back to Projects</Button>
            <h1 class="text-center">How I Built CrowSuite</h1>
            <CrowSuiteDisplay></CrowSuiteDisplay>
            <TechStack></TechStack>
            <h1 class="text-center">Current Action Items</h1>
            <ActionItems></ActionItems>
            <RepoShoutOut></RepoShoutOut>
        </div>
    )
}