import Container from 'react-bootstrap/Container';

export default function PersonalizedHeading({message}) {
    return(
        <Container class="bg-primary">
            <hr></hr>
            <h1 className="text-center display-1">{message}</h1>
            <hr></hr>
        </Container>
    )
}