import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BackToHome } from '../../utilities/BackButton';
import Toast from 'react-bootstrap/Toast';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { MajorHeading } from '../../utilities/PersonalizedHeading';
import { Link } from "react-router";


import { useState } from 'react';

function HiddenDoor() {
    return(
        <Link to="/secret">
            <Image style={{height: "5vw"}} src="opened_door.svg"></Image>
        </Link>
    )
}


export default function API_Page() {
    const [imageURL, setImageURL] = useState("/plain_black_square.jpeg");
    const [pw, setPW] = useState(""); 
    const [unlocked, setUnlocked] = useState(false);
    const [progress, setProgress] = useState(0); 
    const [text, setText] = useState(""); 
    const [toast, setToast] = useState(false);


    function toggleToast() {
        setToast(!toast); 
    }

    

    async function changeImage(endpoint_index) {
        try {
            const api_endpoints = ["coffee", "hyrule", "emoji", "duck", "dog", "art", "rick"];
            
            let url = "http://localhost:3000/"
            url += api_endpoints[endpoint_index]; 
            setProgress((100 / 7) * (endpoint_index + 1)); 

            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.text();
            if (data[0] == '&') {
                // if an emoji 
                setImageURL(null);
                setText(data)
            } else {
                setImageURL(data);
                setText(null);
            }
            console.log(data)
            
          } catch (error) {
            console.error("Could not fetch data:", error);
          }
    }

    function handlePassword(event) {
        event.preventDefault();
        if (pw == "cheddar") {
            setToast(true);
            setUnlocked(true); 
        } else {
            alert("WRONG")
        }
            
    }

    return(
        <>
            <Col>
            
            <BackToHome></BackToHome>
            <h1 className="text-center">???</h1>
            <Row style={{height: "10vw"}}>
            </Row>
            <Row className="row justify-content-center align-items-center">
                <ProgressBar style={{width: "50vw"}} variant="secondary" now={progress}></ProgressBar>
            </Row>
            <Row style={{height: "5vw"}}>
            </Row>
            <Row className="row text-center justify-content-center align-items-center">
                <Col >
                    <Col>
                    <Button onClick={() => {changeImage(6)}}>?</Button>
                    </Col>
                    <Col>
                    <Button onClick={() => {changeImage(5)}}>Art</Button>
                    </Col>
                    <Col>
                    <Button onClick={() => {changeImage(3)}}>Duck</Button>
                    </Col>
                </Col>
                <Col>
                    {imageURL && <Image style={{width: "20vw"}} src={imageURL}></Image>}
                    {text && <MajorHeading message={text}/>}
                </Col>
                <Col>
                <Col>
                    <Button onClick={() => {changeImage(1)}}>Hytale</Button>
                    </Col>
                    <Col>
                    <Button onClick={() => {changeImage(0)}}>Coffee</Button>
                    </Col>
                    <Col>
                    <Button onClick={() => {changeImage(4)}}>Dog</Button>
                    </Col>
                    <Col>
                    <Button onClick={() => {changeImage(2)}}>Emoji</Button>
                    </Col>
                </Col>
            </Row>
            <Row style={{height: "5vw"}}>
            </Row>
            <Row>
                <Col>
                    <h1>PASSCODE:</h1>
                </Col>
                <Col>
                <form onSubmit={handlePassword}>
                <input
                    type="text"
                    onChange={(e) => setPW(e.target.value)}
                    />
                <button type="submit">Submit</button>
                </form>
                </Col>
                <Col>
                    {!unlocked && <Image style={{height: "5vw"}} src="closed_lock.png"></Image>}
                    {unlocked && <Image style={{height: "5vw"}} src="open_lock.png"></Image>}
                </Col>
                <Col>
                    {unlocked && <HiddenDoor></HiddenDoor>}
                </Col>
            </Row>
            </Col>
        </> 
    )
}