import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import FunFact from '../../utilities/FunFact';

import { DoubleClouds, LeftCloud, RightCloud } from '../../utilities/Clouds';

import VGap from '../../utilities/VGap';

import { BackToHome  } from '../../utilities/BackButton';
import { MajorHeading, MinorHeading } from '../../utilities/PersonalizedHeading';

import { useState } from 'react'; 
import HGap from '../../utilities/HGap';

function Yay() {
    return(
        <h1>yay</h1>
    )
}

function Basic() {
    return (
        <Row className="row justify-content-center align-items-center">
        <Card className='bg-transparent shadow justify-content-center align-items-center text-center' style={{ width: '30vw' }}>
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
    const [visibility, setVisibility] = useState(0);

    window.addEventListener('scroll', () => {
        console.log(window.scrollY);
        setVisibility(window.scrollY / 100);
    })
    
    return(
        <>
        <BackToHome/>
        <MajorHeading message="About Me"></MajorHeading>
        <HGap given_height={"10vh"}></HGap>
        <Basic></Basic>
        <DoubleClouds></DoubleClouds>
        <HGap given_height={"20vh"}></HGap>
        <Container className="text-center">
            <h2>Some things I like to do are...</h2>
        </Container>
        <HGap given_height={"20vh"}></HGap>
        <RowFacts1></RowFacts1>
        <RowFacts2></RowFacts2>

        </>
    )
}