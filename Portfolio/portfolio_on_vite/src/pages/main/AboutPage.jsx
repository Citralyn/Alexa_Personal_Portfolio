import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

export default function AboutPage() {
    return(
        <div className="text-center">
            <Button variant="secondary" as="a" href="/">Back to Main</Button>
            <h1>All about Alexa!</h1>
            <p>Some description, maybe an image, etc</p>
            <p>Add me on Github! github link here <a href="https://github.com/Citralyn">:D</a></p>
            <p>I like to draw, read comics before i sleep, workout..</p>
            <p>Currently tring to learn piano and get better at Cantonese</p>
            <Image src="../src/assets/bunny_apple.jpg"></Image>
        </div>
    )
}