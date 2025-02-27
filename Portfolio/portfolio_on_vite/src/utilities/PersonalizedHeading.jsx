import Container from 'react-bootstrap/Container';
import '../scss/custom.scss';

export function MajorHeading({message}) {
    return(
        <Container className="shadow-lg bg-warning rounded">
            <hr></hr>
            <h1 className="text-bg-warning text-center display-1">{message}</h1>
            <hr></hr>
        </Container>
    )
}

export function MinorHeading({message}) {
    return(
        <Container style={{width: "50vw"}} className="bg-light shadow-lg rounded">
            <h2 className="text-center display-2">{message}</h2>
        </Container>
    )
}