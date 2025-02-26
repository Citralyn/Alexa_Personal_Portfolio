import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import ProgressBar from 'react-bootstrap/ProgressBar';


import { useState } from 'react';


export default function API_Page() {
    const [imageURL, setImageURL] = useState("/plain_black_square.jpeg");
    const [pw, setPW] = useState(""); 
    const [toast, setToast] = useState(false);

    function toggleToast() {
        setToast(!toast); 
    }

    async function changeImage() {
        try {
            const url = "https://plush-duck-api.onrender.com/duck"
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.text();
            setImageURL(data); 
            
          } catch (error) {
            console.error("Could not fetch data:", error);
          }
    }

    function handlePassword(event) {
        event.preventDefault();
        if (pw == "duck") {
            setToast(true);
        } else {
            alert("WRONG")
        }
            
    }

    return(
        <>
            <Col className="bg-danger">
            <Button variant="secondary" as="a" href="/">Back to Main</Button>
            <Row style={{height: "10vw"}}>
            </Row>
            <Row className="row justify-content-center align-items-center">
                <ProgressBar style={{width: "50vw"}} variant="secondary" now={50}></ProgressBar>
            </Row>
            <Row style={{height: "5vw"}}>
            </Row>
            <Row className="row text-center justify-content-center align-items-center">
                <Col >
                    <Col>
                        <h1>dsdf</h1>
                    </Col>
                    <Col>
                        <h1>dsdf</h1>
                    </Col>
                    <Col>
                        <h1>dsdf</h1>
                    </Col>
                </Col>
                <Col>
                    <Image style={{width: "20vw"}} src="me_with_umbrella.png"></Image>
                </Col>
                <Col>
                    <Col>
                        <h1>dsdf</h1>
                    </Col>
                    <Col>
                        <h1>dsdf</h1>
                    </Col>
                    <Col>
                        <h1>dsdf</h1>
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
                    <Image style={{height: "5vw"}} src="happy_sun.gif"></Image>
                </Col>
                <Col>
                    <Image style={{height: "5vw"}} src="happy_sun.gif"></Image>
                </Col>
            </Row>
            </Col>
        </> 
    )
}