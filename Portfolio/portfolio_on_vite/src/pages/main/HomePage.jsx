import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HGap from '../../utilities/HGap';
import PersonalizedHeading from '../../utilities/PersonalizedHeading';

import '../../scss/custom.scss';

function AboutMePreview() {
    return (
        <Container style={{width: "60vw"}}>
        <Row style={{height: "40vh"}} className="shadow-lg bg-info row justify-content-center align-items-center rounded">
            <Col xs={1} sm={1} md={1} lg={1} xl={1}>
            </Col>  
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                <Image src="/shooting_star.png" fluid></Image>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <Card className="shadow">
                    <Card.Body className='text-center bg-light'>
                        <Card.Title className='text-center'>Glad you made it!</Card.Title>
                        <Card.Text className='text-center'>
                        I'm Alexa, a 2nd year computer science student at UCI.
                        </Card.Text>
                        <Button variant="success" as="a" href="/about">Read About Me</Button>
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
            <Carousel className="shadow">
            <Carousel.Item>
                <Image src="/ChoreDeciderPreview.png" fluid></Image>
                <Carousel.Caption style={{color: "grey"}}>
                <h3>Chore Decider</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/CrowSuitePreview.png" fluid></Image>
                <Carousel.Caption style={{color: "grey"}}>
                <h3>CrowSuite</h3>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1} xl={1}>
            </Col>  
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
            <Card className="shadow">
                <Card.Body className='text-center'>
                    <Card.Text>
                    Interested in seeing some cool applications I've implemented? Visit my Project Page! 
                    </Card.Text>
                    <Button variant="success" as="a" href="/projects/">Explore Projects</Button>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
    );
}

function Puzzle() {
    return(
        <Row id="puzzle_preview" className="row justify-content-center align-items-center">
        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
            <Card className="shadow text-center">
                <Card.Body>
                    <Card.Title>
                        <h1>???</h1>
                    </Card.Title>
                    <Card.Text>
                    Can you access the secret room?
                    </Card.Text>
                    <Button variant="success" as="a" href="/puzzle">Play</Button>
                </Card.Body>
            </Card>
        </Col> 
        </Row>
       
    )
}

export default function HomePage() {
    return(
        <div>
            <PersonalizedHeading message="WELCOME"/>
            <HGap given_height={"5vh"}></HGap>
            <AboutMePreview></AboutMePreview>
            <HGap given_height={"5vh"}></HGap>
            <PersonalizedHeading message="PROJECTS"/>
            <HGap given_height={"5vh"}></HGap>
            <ProjectPreview></ProjectPreview>
            <HGap given_height={"5vh"}></HGap>
            <PersonalizedHeading message="JUST FOR FUN"/>
            <HGap given_height={"5vh"}></HGap>
            <Puzzle></Puzzle>
            <HGap given_height={"10vh"}></HGap>
        </div>
    )
}