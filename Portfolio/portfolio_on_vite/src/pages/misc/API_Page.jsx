import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';



export default function API_Page() {
    const [imageURL, setImageURL] = useState("https://d1p1su8170li4z.cloudfront.net/book_covers/11226/focus@2x.jpg?git=2601e8031b5f119880269e725f27da0b81d2a575&ts=1665716051");

    async function changeImage(keyword) {
        try {
            const url = `http://localhost:3000/${keyword}`
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

    return(
        <>
            <h1>I call one or more APIs</h1>
            <p> A bunch of APIS spell at the word, get auth key</p>
            <p> Use my API</p>
            <Image src={imageURL}></Image>
            <Button onClick={() => {changeImage("coffee")}}>coffee</Button>
            <Button onClick={() => {changeImage("duck")}}>duck</Button>
        </>
        
    )
}