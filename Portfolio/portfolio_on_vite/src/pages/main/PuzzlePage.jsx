/* Bootstrap Components */
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';

/* Custom utilities */
import HGap from '../../utilities/HGap';
import VGap from '../../utilities/VGap';
import { BackToHome } from '../../utilities/BackButton';
import { MajorHeading, MinorHeading } from '../../utilities/PersonalizedHeading';

/* React-specific Helpers */
import { Link } from "react-router";
import { useState } from 'react';



function Lock({unlocked}) {
    return(
    <Container className="rounded h-50">
    <Row className="row text-center justify-content-center align-items-center">
    <VGap></VGap>
    <Col>
        <Row>
        {!unlocked && <Image style={{width: "40vw"}} src="closed_lock.png"></Image>}
        {unlocked && <Image style={{width: "40vw"}} src="open_lock.png"></Image>}
        </Row>
    </Col>
    <VGap></VGap>
    </Row>
    </Container>
    )
}

function HiddenDoor() {
    return(
        <Link to="/secret">
            <Image style={{height: "5vw"}} src="opened_door.svg"></Image>
        </Link>
    )
}

function ImageGenerator({index, setImageURL, imageURL, setProgress}) {

    async function changeImage(endpoint_index) {
        try {
            const api_endpoints = ["coffee", "hyrule", "elon", "duck", "dog", "art", "rick"];
            
            let url = "https://plush-duck-api.onrender.com/"
            url += api_endpoints[endpoint_index]; 
            setProgress((100 / 7) * (endpoint_index + 1)); 

            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.text();
            setImageURL(data);
            setProgress((100 / 7) * (endpoint_index + 1)); 
            
          } catch (error) {
            console.error("Could not fetch data:", error);
          }
    }
    const randomIndexes = [4, 3, 6, 0, 2, 5, 1];

    return(
        <div>
        <HGap given_height={"10vh"}></HGap>
        <Container className="mt-3 w-50 bg-transparent shadow rounded">
        <HGap given_height={"20vh"}></HGap>
        <Row className="text-center justify-content-center align-items-center">
        <Col>
        <Row className="text-center justify-content-center align-items-center">
        {imageURL && <Image style={{width: "20vw"}} src={imageURL}></Image>}
        </Row>
        <HGap given_height={"10vh"}></HGap>
      <Button variant="danger" onClick={() => {changeImage(randomIndexes[index])}}>GENERATE</Button>
      <HGap given_height={"15vh"}></HGap>
        </Col>
        </Row>
        </Container>
        </div>
    )

}
function GameTabs({img, imgSetter, progressSetter}) {

    return(
    <Tabs
    defaultActiveKey="profile"
    id="uncontrolled-tab-example"
    className="text-bg-dark mb-3"
    fill
  >
      {Array.from({ length: 7 }, (_, i) => (


    <Tab key={i} eventKey={i} title="???">
        <ImageGenerator index={i} setImageURL={imgSetter} imageURL={img} setProgress={progressSetter}></ImageGenerator>

    </Tab>))}
  </Tabs>)

}

function Submission( {password, modalSetter, unlockedSetter, passwordSetter} ) {
    function handlePassword(event) {
        event.preventDefault();
        if (password.toLowerCase() == "cheddar") {
            unlockedSetter(true); 
        } else {
            modalSetter(true); 
        }
            
    }

    return(
        <Row className="row justify-content-center align-items-center">
        <Col></Col>
        <Col>
            <h1>PASSCODE:</h1>
        </Col>
        <Col>
        <form onSubmit={handlePassword}>
            <Row style={{width: "60vw"}}>
                <Col >
                <input
            
            style={{width: "40vw"}}
            type="text"
            onChange={(e) => passwordSetter(e.target.value)}
            />
                </Col>
                <Col>
                <Button className="shadow-sm" variant="danger" style={{width: "15vw"}} type="submit">Submit</Button>
                </Col>
            </Row>
        
        </form>
        </Col>
        <Col></Col>
        </Row>
)
}

function BadPasswordModal({status, setStatus}) {
    const handleClose = () => { setStatus(false) };

    return(
        <>
        <Modal className="text-center" show={status} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Wrong Password!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          Hmm... what are the images telling us?
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


export default function API_Page() {
    const [imageURL, setImageURL] = useState("/plain_black_square.jpeg");
    const [password, setPassword] = useState(""); 
    const [unlocked, setUnlocked] = useState(false);
    const [progress, setProgress] = useState(0); 
    const [modalStatus, setModalStatus] = useState(false);


    return(
        <>
            <Col>
                <BackToHome/>
                {/* Modal if Wrong Password Entered */}
                <BadPasswordModal
                    status={modalStatus}
                    setStatus={setModalStatus}
                />
                {/* Center Lock Logo */}
                <Lock unlocked={unlocked}></Lock>
                <HGap given_height={"10vh"}></HGap>

                <Submission password={password} modalSetter={setModalStatus} unlockedSetter={setUnlocked} passwordSetter={setPassword}></Submission>

<HGap given_height={"10vh"}></HGap>
<Row className="d-flex justify-content-center align-items-center">
            <VGap/><Col className="d-flex justify-content-center align-items-center">{unlocked && <HiddenDoor></HiddenDoor>}</Col><VGap/>
            </Row>


    <HGap given_height={"10vh"}></HGap>
            <Row className="row justify-content-center align-items-center">
                <ProgressBar className="shadow" style={{width: "50vw"}} striped variant="danger" now={progress}></ProgressBar>
            </Row>
            <HGap given_height={"10vh"}></HGap>
        <GameTabs img={imageURL} imgSetter={setImageURL} progressSetter={setProgress}></GameTabs>
    <HGap given_height={"15vh"}></HGap>

            </Col>
        </> 
    )
}