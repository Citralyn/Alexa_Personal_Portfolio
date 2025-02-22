import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function AboutPage() {
    return(
        <>
        <Button variant="secondary" as="a" href="/">Back to Main</Button>
        <div className="text-center">
            
            <Row>
                <Col>
                <Row>
                    <Image style={{width: "20vw"}} src="me_with_umbrella.png"></Image>
                </Row>
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
                </Col>
                <Col>
                    
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
                </Col>
            </Row>
            
        </div>
        </>
    )
}