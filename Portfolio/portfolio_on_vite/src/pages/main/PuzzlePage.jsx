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
import { BackToHome } from '../../utilities/BackButton';

/* React-specific Helpers */
import { Link } from "react-router";
import { useState } from 'react';

// Conditionally-displaying Lock Icon
function Lock({unlocked}) {
    return(
    <Container className='w-50'>
        <Col>
            <Row>
            {!unlocked && <Image src="/puzzle/closed_lock.png"></Image>}
            {unlocked && <Image src="/puzzle/open_lock.png"></Image>}
            </Row>
        </Col>
    </Container>
    )
}

// Conditionally-displaying Door which leads to /secret route
function HiddenDoor() {
    return(
        <Container >
            <Col className='d-flex justify-content-center'>
            <Link to="/secret">
                <Image style={{height: "5vw"}} src="/puzzle/opened_door.svg"></Image>
            </Link>
            </Col>
        </Container>
    )
}

// Image Generator for fetching images from APIs
function ImageGenerator({index, setImageURL, imageURL, setProgress}) {
    async function changeImage(endpoint_index) {
        try {
            // each endpoint will redirect to a different external image API 
            const api_endpoints = ["coffee", "hyrule", "elon", "duck", "dog", "art", "rick"];
            
            let url = "https://plush-duck-api.onrender.com/"
            url += api_endpoints[endpoint_index]; 
            setProgress((100 / 7) * (endpoint_index + 1)); // progress-bar correlates to order of letter

            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            // no error? the image url should be returned 
            const data = await response.text(); // convert it to text
            // update puzzle image url
            setImageURL(data);
            
          } catch (error) {
            console.error("Could not fetch data:", error);
          }
    }

    // this is so the tabs are in random order (part of the puzzle)
    const randomIndexes = [4, 3, 6, 0, 2, 5, 1];

    return(
        <div>
        <HGap given_height={"10vh"}/>

        <Container className="mt-3 w-50 bg-transparent shadow rounded">
            <HGap given_height={"5vh"}/>
            <Col className='d-flex flex-column'>
                {imageURL && <Image flex src={imageURL}/>}
                <HGap given_height={"10vh"}/>
                <Row className='justify-content-center'>
                    <Button
                    className='w-auto' 
                    variant="danger" 
                    onClick={() => {changeImage(randomIndexes[index])}}>
                    GENERATE
                    </Button>
                </Row>
            <HGap given_height={"5vh"}/>
            </Col>
        </Container>
        </div>
    )

}

// Tabs where each tab is a image generator with a different index 
function GameTabs({img, imgSetter, progressSetter}) {

    return(
        <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="text-bg-dark mb-3"
        fill
        >
            {/* 7 tabs, one for each image API */}
            {Array.from({ length: 7 }, (_, i) => (
            <Tab key={i} eventKey={i} title="???">
                <ImageGenerator 
                index={i} 
                setImageURL={imgSetter} 
                imageURL={img} 
                setProgress={progressSetter}>
                </ImageGenerator>
            </Tab>
            ))}
        </Tabs>
    )
}

// password submission
function Submission( {password, modalSetter, unlockedSetter, passwordSetter} ) {
    
    // check if password = cheddar 
    function handlePassword(event) {
        event.preventDefault();
        if (password.toLowerCase() == "cheddar") {
            unlockedSetter(true); 
        } else {
            modalSetter(true); 
        }  
    }

    return(
        <Container fluid> 
            <Col>
                <h1 className='text-center'>PASSCODE:</h1>
                <form onSubmit={handlePassword}>
                    <Col className='d-flex flex-column align-items-center'>
                        <Row className='w-50 m-3'>
                            <input
                            type="text"
                            onChange={(e) => passwordSetter(e.target.value)}
                            />
                        </Row>
                    <Button 
                    className="shadow-sm" 
                    variant="danger" 
                    type="submit">Submit
                    </Button>

                    </Col>
                </form>
            </Col>
        </Container>
)
}

// Modal/Pop-up Window for when User enters Wrong Password
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
    const [imageURL, setImageURL] = useState("/puzzle/plain_black_square.jpeg");
    const [password, setPassword] = useState(""); 
    const [unlocked, setUnlocked] = useState(false);
    const [progress, setProgress] = useState(0); 
    const [modalStatus, setModalStatus] = useState(false);

    return(
        <>
            <Col>
                {/* Back to Home Button */}
                <BackToHome/>

                {/* Modal if Wrong Password Entered */}
                <BadPasswordModal
                    status={modalStatus}
                    setStatus={setModalStatus}
                />

                <HGap given_height={"10vh"}></HGap>

                {/* Center Lock Icon */}
                <Lock unlocked={unlocked}></Lock>

                <HGap given_height={"5vh"}></HGap>

                {/* Passcode Input */}
                <Submission
                password={password} 
                modalSetter={setModalStatus} 
                unlockedSetter={setUnlocked} 
                passwordSetter={setPassword}>
                </Submission>

                <HGap given_height={"5vh"}/>

                {/* Hidden Door */}
                {unlocked && <HiddenDoor/>}

                <HGap given_height={"10vh"}/>

                {/* Progress Bar */}
                <Row className="row justify-content-center">
                    <ProgressBar 
                    className="w-75 shadow" 
                    striped variant="danger" 
                    now={progress}>
                    </ProgressBar>
                </Row>

                <HGap given_height={"10vh"}/>

                {/* Puzzle Tabs */}
                <GameTabs 
                img={imageURL} 
                imgSetter={setImageURL} 
                progressSetter={setProgress}>
                </GameTabs>

                <HGap given_height={"15vh"}/>
            </Col>
        </> 
    )
}