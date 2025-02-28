import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {MajorHeading, MinorHeading } from '../../utilities/PersonalizedHeading';
import HGap from '../../utilities/HGap';
import Container from "react-bootstrap/Container"
import { LeftCloud, RightCloud } from '../../utilities/Clouds';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { BackToHome } from '../../utilities/BackButton';

function CrowSuiteSection() {
    return(
        <>
        <MinorHeading message={"CrowSuite"}></MinorHeading>
       
        <HGap given_height={"5vw"}></HGap>
        <Container fluid>
        <Row className='row justify-content-center align-items-center'>
        <Col lg>
        </Col>
        <Col xs={8} lg={4}>
            <Card className="text-center m-3">
      <Card.Header as="h5">CrowSuite</Card.Header>
      <Card.Body>
        <Card.Text>
            An online SocketIO game resemblant of the card game Big 2!
            But with a twist - birds for suits!
        </Card.Text>
        <Button className="center" variant="success" as="a" href="/projects/crowsuite">Read how it was made!</Button>
        <HGap given_height={"1vw"}></HGap>
        <Button target="_blank" variant="success" as="a" href="https://crowsuite.netlify.app">Play Online!</Button>
        
      </Card.Body>
    </Card>
    </Col >
    <Col lg>
    </Col>
    <Col xs={8} lg={4}>
        <Image fluid src="/CrowSuitePreview.png"></Image>
    </Col>
    <Col lg>
    </Col>
    </Row>
    </Container>
    <HGap given_height={"5vw"}></HGap>
    </>
    )
}

function ModalForDownload({status, setStatus}) {
    const handleClose = () => { setStatus(false) };

    return(
        <>
        <Modal show={status} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Download on Pause</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          Unfortunately Chore Decider is not available to download at the moment;
          it's in the progress of being revamped!
          You can still check out the blog on how it was made.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

function ChorganizerSection() {
    const [modalStatus, setModalStatus] = useState(false);

    return(
        <>
        <ModalForDownload status={modalStatus} setStatus={setModalStatus}></ModalForDownload>
        <MinorHeading message={"Chore Decider"}></MinorHeading>
        <HGap given_height={"5vh"}></HGap>
        <Container>
        <Row className="justify-content-center align-items-center">
        <Col lg>
        </Col>
        <Col xs={8} lg={4}>
            <Card className='text-center m-3'>
      <Card.Header as="h5">Chore Decider</Card.Header>
      <Card.Body>
        <Card.Text>
            A MacOS desktop application to help organize and distribute
            your chores - tailored to ACC Communities! 
        </Card.Text>
        <Button variant="success" as="a" href="/projects/chore_decider">Read how it was made!</Button>
        <HGap given_height={"1vw"}></HGap>
        <Button variant="success" onClick={() => setModalStatus(true)}>Download to try out!</Button>

      </Card.Body>
    </Card>
    </Col>
    <Col lg>
    </Col>
    <Col xs={8} lg={4}>
        <Image fluid src="/ChoreDeciderPreview.png"></Image>
    </Col>
    <Col lg>
    </Col>
    </Row>
    </Container>
    </>
    )
}

export default function ProjectHome() {
    return(
        <>
            <BackToHome></BackToHome>
            <MajorHeading message="PROJECTS"/>
            <RightCloud></RightCloud>
            <HGap given_height={"10vh"}></HGap>
            <CrowSuiteSection></CrowSuiteSection>
            <LeftCloud></LeftCloud>
            <HGap given_height={"10vh"}></HGap>
            <ChorganizerSection></ChorganizerSection>
            <HGap given_height={"10vh"}></HGap>
        </>
    )
}