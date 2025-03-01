/* Bootstrap Components */
import VGap from "./VGap.jsx"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from "react-bootstrap/Container";

// Fun Facts - for my About Me Page! 
export default function FunFact({index}) {
    // each index maps to specific image_url and description
    const image_urls = [
        "draw.png", "gym.png", "comic.png", "apple.png", "piano.png"
    ];

    const descriptions = [
        "Draw Pictures",
        "Get daily gains at the gym",
        "Read comics on Libby",
        "Snack on apples",
        "Attempt to play piano"
    ]

    let image = "/about_me/" + image_urls[index];
    let desc = descriptions[index];

    return(
        <Container className="rounded h-50">
            {/* Row for centering purposes */}
            <Row className="text-center justify-content-center align-items-center">
                <VGap/>

                {/* Each fun fact is an image on top of a description */}
                <Col className="d-flex flex-column">
                    <Image style={{width: "20vw"}} src={image}></Image>
                    <h2>{desc}</h2>
                </Col>

                <VGap/>
            </Row>
        </Container>
    )
}