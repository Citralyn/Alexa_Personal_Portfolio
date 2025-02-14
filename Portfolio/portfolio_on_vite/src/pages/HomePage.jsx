import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutMePreview() {
    return (
        <Container fluid="false">
        <Row>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>About Me</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button as="a" href="/about">More About Me</Button>
                    </Card.Body>
                </Card>
            </Col>
            
            <Col>
                <Image src="src/assets/temp_boluobao.jpeg" fluid></Image>
            </Col>
        </Row>
        </Container>
      );
}

function ProjectPreview() {
    return (
        <Carousel>
          <Carousel.Item>
            <Image src="src/assets/temp_boluobao.jpeg" fluid></Image>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="src/assets/temp_boluobao.jpeg" fluid></Image>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="src/assets/temp_boluobao.jpeg" fluid></Image>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    );
}

function MiscPreview() {
    return (
    <Container fluid="false">
        <Row>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>APIs</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button as="a" href="/misc/api_fun">More</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>DSA</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button as="a" href="/misc/dsa_fun">More</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Terminal</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button as="a" href="/misc/terminal_fun">More</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
      );
}


export default function HomePage() {
    return(
        <div>
            <AboutMePreview></AboutMePreview>
            <ProjectPreview></ProjectPreview>
            <MiscPreview></MiscPreview>
        </div>
    )
}