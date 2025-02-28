/* Bootstrap Components */
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* Custom utilities */
import HGap from '../../utilities/HGap';
import {MajorHeading, MinorHeading } from '../../utilities/PersonalizedHeading';
import '../../scss/custom.scss';

function AboutMePreview() {
    return (
        <Container className="w-75" >
            {/* Container for About Me preview */}
            <Row className="pt-3 pb-3 shadow-lg bg-info row justify-content-center align-items-center rounded">
                <Col lg>
                </Col>  
                {/* XS, SM, or MD? - 8 columns. >? 4 columns */}
                <Col xs={8} lg={4}>
                    <Image src="/shooting_star.png" fluid></Image>
                </Col>
                <Col lg></Col>
                <Col  xs={8} lg={4}>
                    <Card className="shadow">
                        <Card.Body className='text-center bg-light'>
                            <Card.Title className='text-center'>Glad you made it!</Card.Title>
                            <Card.Text className='text-center'>
                            I'm Alexa, a 2nd year computer science student at UCI.
                            </Card.Text>
                            <Button className="shadow-sm" variant="success" as="a" href="/about">Read About Me</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg>
                </Col>  
            </Row>
        </Container>
      );
}

function ProjectPreview() {
    return (
        <Container>
        <Row className="row justify-content-center align-items-center">
        <Col lg></Col>
        <Col xs={8} lg={4}>
            <Carousel className="shadow m-3">
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
            <Col lg>
            </Col>  
            <Col xs={8} lg={4}>
            <Card className="shadow">
                <Card.Body className='text-center'>
                    <Card.Text>
                    Interested in seeing some cool applications I've implemented? Visit my Project Page! 
                    </Card.Text>
                    <Button className="shadow-sm" variant="success" as="a" href="/projects/">Explore Projects</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col lg></Col>
        </Row>
        </Container>
    );
}

function Puzzle() {
    return(
        <Row id="puzzle_preview" className="row justify-content-center align-items-center">
        <Col xs={8} md={6} lg={4}>
            <Card className="shadow text-center">
                <Card.Body>
                    <Card.Title>
                        <h1>???</h1>
                    </Card.Title>
                    <Card.Text>
                    Can you access the secret room?
                    </Card.Text>
                    <Button className="shadow-sm" variant="success" as="a" href="/puzzle">Play</Button>
                </Card.Body>
            </Card>
        </Col> 
        </Row>
       
    )
}

export default function HomePage() {
    return(
        <div>
            <MajorHeading message="WELCOME"/>
            <HGap given_height={"5vh"}></HGap>
            <AboutMePreview></AboutMePreview>
            <HGap given_height={"5vh"}></HGap>
            <MajorHeading message="PROJECTS"/>
            <HGap given_height={"5vh"}></HGap>
            <ProjectPreview></ProjectPreview>
            <HGap given_height={"5vh"}></HGap>
            <MajorHeading message="JUST FOR FUN"/>
            <HGap given_height={"5vh"}></HGap>
            <Puzzle></Puzzle>
            <HGap given_height={"10vh"}></HGap>
        </div>
    )
}