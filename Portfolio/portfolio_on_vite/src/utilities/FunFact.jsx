import HGap from "./HGap.jsx"
import VGap from "./VGap.jsx"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from "react-bootstrap/Container";

export default function FunFact({index}) {
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
            <Row className="text-center justify-content-center align-items-center">
                <VGap/>

                <Col className="d-flex flex-column">
                    <Image style={{width: "20vw"}} src={image}></Image>
                    <h2>{desc}</h2>
                </Col>

                <VGap/>
            </Row>
        </Container>
    )
}