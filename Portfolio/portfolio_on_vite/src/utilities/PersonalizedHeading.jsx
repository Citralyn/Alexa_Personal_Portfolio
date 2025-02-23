import Container from 'react-bootstrap/Container';
import '../scss/custom.scss';

export default function PersonalizedHeading({message}) {
    return(
        <Container>
            <hr></hr>
            <h1 className="text-bg-warning text-center display-1">{message}</h1>
            <hr></hr>
        </Container>
    )
}