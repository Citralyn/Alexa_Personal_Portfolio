import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useState } from 'react';

function RecipeCard() {
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    )
}

export default function SecretPage() {
    const [recipe, setRecipe] = useState("");
    const [recipeLink, setLink] = useState("");
    const [recipeImg, setImg] = useState("");

    async function getRecipe() {
        try {
            const url = `http://localhost:3000/getRecipe`
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.text();
            
            
          } catch (error) {
            console.error("Could not fetch data:", error);
          }
    }

    return(
        <>
            <RecipeCard></RecipeCard>
            <Button onClick={getRecipe}></Button>
        </>
        
    )
}