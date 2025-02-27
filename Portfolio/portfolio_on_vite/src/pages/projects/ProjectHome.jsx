import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import PersonalizedHeading, { MinorHeading } from '../../utilities/PersonalizedHeading';
import HGap from '../../utilities/HGap';
import Container from "react-bootstrap/Container"
import { LeftCloud, RightCloud } from '../../utilities/Clouds';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function CrowSuiteSection() {
    return(
        <>
        <MinorHeading message={"CrowSuite"}></MinorHeading>
       
        <HGap given_height={"5vw"}></HGap>
        <Row>
        <Col xs={1} sm={1} md={1} lg={1} xl={1}>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
            <Card>
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
    <Col xs={1} sm={1} md={1} lg={1} xl={1}>
    </Col>
    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
        <Image style={{width: "40vw"}} src="/CrowSuitePreview.png"></Image>
    </Col>
    </Row>
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
          Unfortunately Chore Decider is not available to download at the moment,
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
        <Row>
        <Col xs={1} sm={1} md={1} lg={1} xl={1}>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
            <Card>
      <Card.Header as="h5">Chore Decider</Card.Header>
      <Card.Body>
        <Card.Text>
            A MacOS desktop application to help organize and distribute
            your chores - tailored to ACC Communities! 
        </Card.Text>
        <Button variant="success" as="a" href="/projects/chorganizer">Read how it was made!</Button>
        <HGap given_height={"1vw"}></HGap>
        <Button variant="success" onClick={() => setModalStatus(true)}>Download to try out!</Button>

      </Card.Body>
    </Card>
    </Col >
    <Col xs={1} sm={1} md={1} lg={1} xl={1}>
    </Col>
    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
        <Image style={{width: "40vw"}} src="/ChoreDeciderPreview.png"></Image>
    </Col>
    </Row>
    </>
    )
}

export default function ProjectHome() {
    return(
        <>
            <Button className="m-3" variant="secondary" as="a" href="/">Back to Main</Button>
            <PersonalizedHeading message="PROJECTS"></PersonalizedHeading>
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