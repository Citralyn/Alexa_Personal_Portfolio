import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { useState } from 'react'; 

function Yay() {
    return(
        <h1>yay</h1>
    )
}

function Basic() {
    return(
        <Row className="row justify-content-center align-items-center">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="me_with_umbrella" />
                <Card.Body>
                <Card.Title>Basic</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Row>
    )
}

function Draw() {
    return(
        <Row className="row justify-content-center align-items-center">
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <Card.Img variant="top" src="me_with_umbrella" />
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Draw</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>
            </Col>
        </Row>
    )
}


function Gym() {
    return(
        <Row className="row justify-content-center align-items-center">
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <Card.Img variant="top" src="me_with_umbrella" />
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Draw</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>
            </Col>
        </Row>
    )
}


function Libby() {
    return(
        <Row className="row justify-content-center align-items-center">
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <Card.Img variant="top" src="me_with_umbrella" />
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Libby</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>
            </Col>
        </Row>
    )
}

function Cantonese() {
    return(
        <Row className="row justify-content-center align-items-center">
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <Card.Img variant="top" src="me_with_umbrella" />
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>C</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>
            </Col>
        </Row>
    )
}

function Piano() {
    return(
        <Row className="row justify-content-center align-items-center">
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <Card.Img variant="top" src="me_with_umbrella" />
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Pi</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>
            </Col>
        </Row>
    )
}
export default function AboutPage() {
    const [visibility, setVisibility] = useState(0);

    window.addEventListener('scroll', () => {
        console.log(window.scrollY);
        setVisibility(window.scrollY / 150);
    })
    
    return(
        <>
        <Button variant="secondary" as="a" href="/">Back to Main</Button>
        <div style={{scroll: "scroll"}}></div>
        <Col>
            {visibility >= 0 && <Basic></Basic>}
            {visibility >= 1.5 && <Draw></Draw>}
            {visibility >= 5 && <Gym></Gym>}
            {visibility >= 8 && <Libby></Libby>}
            {visibility >= 12 && <Cantonese></Cantonese>}
            {visibility >= 16 && <Piano></Piano>}
        </Col>
                <Row>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Hi, I'm Alexa!</Card.Title>
                            <Card.Text>
                            I’m a sophomore at UCI currently pursuing a degree in Computer Science. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
                    
                <Row>
                    <Card style={{ width: '18rem' }}>
                    <Card.Title>Fun Facts</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>I like to draw &#9997;</ListGroup.Item>
                        <ListGroup.Item>Hit the gym daily &#128170;</ListGroup.Item>
                        <ListGroup.Item>Read comics on Libby before I sleep &#128214;</ListGroup.Item>
                        <ListGroup.Item>Review Cantonese &#129375;</ListGroup.Item>
                        <ListGroup.Item>Practice piano &#127929;</ListGroup.Item>
                    </ListGroup>
                    </Card>
                    </Row>
        </>
    )
}