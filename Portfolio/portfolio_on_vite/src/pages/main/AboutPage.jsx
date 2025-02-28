/* Bootstrap Components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import FunFact from '../../utilities/FunFact';

/* Custom utilities */
import HGap from '../../utilities/HGap';
import { BackToHome  } from '../../utilities/BackButton';
import { MajorHeading, MinorHeading } from '../../utilities/PersonalizedHeading';
import { DoubleClouds, LeftCloud, RightCloud } from '../../utilities/Clouds';


function BasicProfile() {
    return (
        <Row className="row justify-content-center align-items-center">
        {/* Row for Centered Card */}
            <Card className='bg-transparent shadow justify-content-center align-items-center text-center' style={{ width: '30vw' }}>
            {/* Transparent background for cool effect */}
            <Card.Img style={{width: "10vw"}} className="rounded m-5 shadow" variant="top" src="/me_with_umbrella.png" />
            <Card.Body>
                <Card.Title>Hi, I'm Alexa!</Card.Title>
                <Card.Text>
                I’m a sophomore at UCI currently pursuing a degree in Computer Science.
                </Card.Text>
            </Card.Body>
            </Card>
        </Row>
      );
}


function RowFacts1() {
    return(
        <Row>
            <Col>
                <FunFact index={2}></FunFact>
            </Col>
            <Col>
                <FunFact index={1}></FunFact>
            </Col>
            <Col>
                <FunFact index={0}></FunFact>
            </Col>
        </Row>
    )
}

function RowFacts2() {
    return(
        <Row>
            <Col>
                <FunFact index={3}></FunFact>
            </Col>
            <Col>
                <FunFact index={4}></FunFact>
            </Col>
        </Row>
    )
}
export default function AboutPage() {
    
    return(
        <>
        <BackToHome/> {/* Back Button */}
        {/* Header */}
        <MajorHeading message="About Me"/>
        <HGap given_height={"10vh"}/>

        {/* Profile and Aesthetic Clouds */}
        <BasicProfile/>
        <DoubleClouds/>
        <HGap given_height={"20vh"}></HGap>

        {/* Cute Fun Fact Widgets */}
        <Container className="text-center">
            <h2>Some things I like to do are...</h2>
        </Container>

        <HGap given_height={"20vh"}></HGap>
        <RowFacts1></RowFacts1>
        <RowFacts2></RowFacts2>
        </>
    )
}