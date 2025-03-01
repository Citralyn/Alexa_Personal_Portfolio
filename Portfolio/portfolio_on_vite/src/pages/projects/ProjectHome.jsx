import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from "react-bootstrap/Container"
import Modal from 'react-bootstrap/Modal';

import {MajorHeading, MinorHeading } from '../../utilities/PersonalizedHeading';
import HGap from '../../utilities/HGap';
import { LeftCloud, RightCloud } from '../../utilities/Clouds';
import { BackToHome } from '../../utilities/BackButton';

import { useState } from 'react';

function CrowSuiteSection() {
    return(
        <>
        <MinorHeading message={"CrowSuite"}/>
       
        <HGap given_height={"5vw"}/>

        <Container fluid>
        <Row className='row justify-content-center align-items-center'>
            <Col lg/>

            <Col xs={12} md={8} lg={4}>
                <Card className="text-center m-3">
                    <Card.Header as="h5">CrowSuite</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            An online SocketIO game resemblant of the card game Big 2!
                            But with a twist - birds for suits!
                        </Card.Text>
                        <Button 
                        className="center" 
                        variant="success" 
                        as="a" 
                        href="/projects/crowsuite">
                        Read how it was made!
                        </Button>
                        <HGap given_height={"1vw"}/>
                        <Button 
                        target="_blank" 
                        variant="success" 
                        as="a" 
                        href="https://crowsuite.netlify.app">
                        Play Online!
                        </Button>
        
                    </Card.Body>
                </Card>
            </Col >

            <Col lg/>

            <Col xs={10} lg={4}>
                <Image fluid src="/projects/CrowSuitePreview.png"></Image>
            </Col>

            <Col lg/>
        
        </Row>
    </Container>

    <HGap given_height={"5vw"}/>
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

function ChoreDeciderSection() {
    const [modalStatus, setModalStatus] = useState(false);

    return(
        <>
        <ModalForDownload 
        status={modalStatus} 
        setStatus={setModalStatus}
        />

        <MinorHeading message={"Chore Decider"}/>

        <HGap given_height={"5vh"}/>

        <Container>
            <Row className="justify-content-center align-items-center">
                <Col lg/>
                
                <Col xs={12} md={8} lg={4}>
                    <Card className='text-center m-3'>
                        <Card.Header as="h5">Chore Decider</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                A MacOS desktop application to help organize and distribute
                                your chores - tailored to ACC Communities! 
                            </Card.Text>

                            <Button 
                            variant="success" 
                            as="a" 
                            href="/projects/chore_decider">
                            Read how it was made!
                            </Button>

                            <HGap given_height={"1vw"}/>

                            <Button 
                            variant="success" 
                            onClick={() => setModalStatus(true)}
                            >Download to try out!
                            </Button>

                        </Card.Body>
                    </Card>
                </Col>
                
                <Col lg/>

                <Col xs={10} lg={4}>
                    <Image fluid src="/projects/ChoreDeciderPreview.png"></Image>
                </Col>
                
                <Col lg/>
            </Row>
        </Container>
    </>
    )
}

export default function ProjectHome() {
    return(
        <>
            <BackToHome/>
            
            {/* Header and cloud decor */}
            <MajorHeading message="PROJECTS"/>
            <RightCloud/>

            <HGap given_height={"10vh"}/>

            {/* CrowSuite Preview and cloud decor */}
            <CrowSuiteSection/>
            <LeftCloud/>

            <HGap given_height={"10vh"}/>

            {/* Chore Decider Preview */}
            <ChoreDeciderSection/>

            <HGap given_height={"10vh"}/>
        </>
    )
}