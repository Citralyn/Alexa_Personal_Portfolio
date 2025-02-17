import cj from "../assets/crowsuite/crow_jack.png"
import ck from "../assets/crowsuite/crow_king.png"
import cq from "../assets/crowsuite/crow_queen.png"

import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function CrowSuiteDisplay() {
    let card_images = [cj, ck, cq]

    return(
        <>
        <h1 class="text-center">How I built CrowSuite</h1>
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

export default function CrowSuitePage() {
    return(
        <div>
            <CrowSuiteDisplay></CrowSuiteDisplay>
            <p>And here's how!</p>
        </div>
    )
}