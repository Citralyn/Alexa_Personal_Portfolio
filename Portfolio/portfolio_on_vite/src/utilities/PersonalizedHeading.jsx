/* Bootstrap Components */
import Container from 'react-bootstrap/Container';

/* Custom Headings for throughout my app: one major, one medium, and one minor */

export function MajorHeading({message}) {
    return(
        <Container className="shadow-lg bg-warning rounded">
            <hr/>

            {/* Display-1 and h1! */}
            <h1 className="text-bg-warning text-center display-1">{message}</h1>

            <hr/>
        </Container>
    )
}

// a slightly wider version of minor heading
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