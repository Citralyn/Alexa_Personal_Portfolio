import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useState } from 'react';

function RecipeCard({title, desc, link, img}) {
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            {desc}
            </Card.Text>
            <Button as="a" href={link}>Visit</Button>
        </Card.Body>
        </Card>
    )
}

export default function SecretPage() {
    const [recipeTitle, setTitle] = useState("");
    const [recipeDesc, setDesc] = useState("");
    const [recipeLink, setLink] = useState("");
    const [recipeImg, setImg] = useState("");

    async function getRecipe() {
        try {
            const url = `http://localhost:3000/get_recipe`
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data[0].title)
            setTitle(data[0].title);
            setDesc(data[0].description);
            setLink(data[0].link);
            setImg(data[0].image);
            console.log(data);
            
            
          } catch (error) {
            console.error("Could not fetch data:", error);
          }
    }

    return(
        <>
            <RecipeCard 
            title={recipeTitle}
            desc={recipeDesc}
            link={recipeLink}
            img={recipeImg}
            ></RecipeCard>
            <Button onClick={getRecipe}></Button>
        </>
        
    )
}