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
import {MajorHeading} from '../../utilities/PersonalizedHeading';
import '../../scss/custom.scss';

// Preview to About Me Page
function AboutMePreview() {
    return (
        // Container for minimizing About Me preview
        <Container className="w-75" >
            {/* Row for centering items along both x and y axises and for special effects */}
            <Row className="pt-3 pb-3 shadow-lg bg-info row justify-content-center align-items-center rounded">
                <Col lg/> {/* Extra Side Spacing (only needed for larger screens) */}

                <Col xs={10} lg={4}> {/* Image takes up nearly full column on mobile devices */}
                    <Image src="/home/shooting_star.png" fluid></Image>
                </Col>

                <Col lg/> {/* Extra Middle Spacing (only needed for larger screens) */}

                <Col  xs={12} lg={4}> {/* Card takes up nearly full column on mobile devices */}
                    <Card className="m-2 shadow text-center">
                        <Card.Body className='bg-light'>
                            <Card.Title>Glad you made it!</Card.Title>
                            <Card.Text>
                            I'm Alexa, a 2nd year computer science student at UCI.
                            </Card.Text>
                            {/* Look of a Button; Acts like an anchor element (to about-me page) */}
                            <Button className="shadow-sm" variant="success" as="a" href="/about">Read About Me</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg/> {/* Extra Side Spacing (only needed for larger screens) */}
            </Row>
        </Container>
      );
}

// preview to project page
function ProjectPreview() {
    return (
            /* Row for centering carousel and info ccard */
            <Row className="row justify-content-center align-items-center">
            <Col lg/>

            <Col xs={8} lg={4}>
                {/* Carousel for sliding between projects! */}
                <Carousel className="shadow m-3">
                    {/* First carousel item - Chore Decider! */}
                    <Carousel.Item>
                        <Image src="/projects/ChoreDeciderPreview.png" fluid></Image>
                        <Carousel.Caption style={{color: "grey"}}>
                        <h3>Chore Decider</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* Second carousel item - CrowSuite! */}
                    <Carousel.Item>
                        <Image src="/projects/CrowSuitePreview.png" fluid></Image>
                        <Carousel.Caption style={{color: "grey"}}>
                        <h3>CrowSuite</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>

            <Col lg/> 

            {/* Projects Information Card */}
            <Col xs={8} lg={4}>
                <Card className="shadow">
                    <Card.Body className='text-center'>
                        <Card.Text>
                        Interested in seeing some cool applications I've implemented? Visit my Project Page! 
                        </Card.Text>
                        {/* Anchor to Projects page */}
                        <Button className="shadow-sm" variant="success" as="a" href="/projects/">Explore Projects</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col lg/> 
            </Row>
    );
}

// preview to puzzle page
function Puzzle() {
    return(
        // a centered card with a mysterious title
        <Row className="row justify-content-center align-items-center">
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

/* A column outlining the rest of my application */
/* Essentially: headers and descriptional components and links underneath */
export default function HomePage() {
    return(
        <div>
            <MajorHeading message="WELCOME"/>

            <HGap given_height={"5vh"}/>

            <AboutMePreview/>

            <HGap given_height={"5vh"}/>

            <MajorHeading message="PROJECTS"/>

            <HGap given_height={"5vh"}/>

            <ProjectPreview/>

            <HGap given_height={"5vh"}/>

            <MajorHeading message="JUST FOR FUN"/>

            <HGap given_height={"5vh"}/>

            <Puzzle/>

            <HGap given_height={"10vh"}/>
        </div>
    )
}