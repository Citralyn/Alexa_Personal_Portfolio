import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PersonalizedHeading from '../../utilities/PersonalizedHeading';
import '../../scss/custom.scss';

function AboutMePreview() {
    return (
        <Container>
        <Row className="row justify-content-center align-items-center">
            <Col xs={1} sm={1} md={1} lg={1} xl={1}>
            </Col>  
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <Image src="src/assets/happy_sun.gif" fluid></Image>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <Card>
                    <Card.Body className='text-center'>
                        <Card.Title className='text-center'>Glad you made it!</Card.Title>
                        <Card.Text className='text-center'>
                        I'm Alexa, a 2nd year computer science student at UCI.
                        </Card.Text>
                        <Button variant="alexa_color1" as="a" href="/about">Read About Me</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1} xl={1}>
            </Col>  
        </Row>
        </Container>
      );
}

function ProjectPreview() {
    return (
        <Container>
        <Row className="row justify-content-center align-items-center">
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
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
            </Col>
            <Col xs={1} sm={1} md={1} lg={1} xl={1}>
            </Col>  
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
            <Card>
                <Card.Body>
                    <Card.Text className='text-center'>
                    Interested in seeing some cool applications I've implemented? Visit my Project Page! 
                    </Card.Text>
                    <Button variant="alexa_color1" as="a" href="/about">Explore Projects</Button>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
    );
}

function MiscPreview() {
    return (
    <Container fluid="false">
        <Row className="row justify-content-center align-items-center">
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <Card>
                    <Card.Body>
                        <Card.Title>Databases</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Educational</Card.Subtitle>
                        <Card.Text>
                        I test out MySQL, PostgreSQL, and SQLite, and document my findings.
                        </Card.Text>
                        <Button as="a" href="/misc/db_fun">Learn</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <Card>
                    <Card.Body>
                        <Card.Title>Terminal</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Opinion</Card.Subtitle>
                        <Card.Text>
                        A list of my favorite use cases of the terminal!
                        </Card.Text>
                        <Button as="a" href="/misc/terminal_fun">Read</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <Card>
                    <Card.Body>
                        <Card.Title>APIs</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Game</Card.Subtitle>
                        <Card.Text>
                        Can you access the hidden API route?
                        </Card.Text>
                        <Button as="a" href="/misc/api_fun">Play</Button>
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
            <PersonalizedHeading message="Welcome"/>
            <AboutMePreview></AboutMePreview>
            <PersonalizedHeading message="Projects"/>
            <ProjectPreview></ProjectPreview>
            <PersonalizedHeading message="Miscellaneous"/>
            <MiscPreview></MiscPreview>
        </div>
    )
}