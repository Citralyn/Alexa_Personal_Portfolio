import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';

import { useState } from 'react';


export default function API_Page() {
    const [imageURL, setImageURL] = useState("/change_me.jpeg");
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
            <Button variant="secondary" as="a" href="/">Back to Main</Button>
            <Image src={imageURL}></Image>
            <Button onClick={changeImage}></Button>
            <form onSubmit={handlePassword}>
            <label>
                What's the password?: :
                <input
                type="text"
                onChange={(e) => setPW(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
            </form>
            <Toast show={toast} onClose={toggleToast}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              position="top-start"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
        </>
        
    )
}