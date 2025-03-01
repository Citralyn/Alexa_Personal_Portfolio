import Container from 'react-bootstrap/Container';

export function MajorHeading({message}) {
    return(
        <Container className="shadow-lg bg-warning rounded">
            <hr/>

            <h1 className="text-bg-warning text-center display-1">{message}</h1>

            <hr/>
        </Container>
    )
}

export function MediumHeading({message}) {
    return(
        <Container className="bg-light shadow-lg rounded w-75">
            <h2 className="text-center display-2">{message}</h2>
        </Container>
    )
}

export function MinorHeading({message}) {
    return(
        <Container className="bg-light shadow-lg rounded w-50">
            <h2 className="text-center display-2">{message}</h2>
        </Container>
    )
}