import Button from 'react-bootstrap/Button';

function CrowSuiteSection() {
    return(
        <>
            <h1>CROWSUITE</h1>
            <p>Small information about it</p>
            <p>Link: <a href="https://crowsuite.netlify.app/">Click Here!</a></p>
            <Button variant="primary" as="a" href="/projects/crowsuite">Read how it was made!</Button>
        </>
    )
}

function ChorganizerSection() {
    return(
        <>
            <h1>Chorganizer</h1>
            <p>Small information about it</p>
            <p>Download! <a href="src/assets/yellow_heart.png" download>Download and Try out!</a></p>
            <Button variant="primary" as="a" href="/projects/chorganizer">Read how it was made!</Button>
        </>
    )
}

export default function ProjectHome() {
    return(
        <>
            <CrowSuiteSection></CrowSuiteSection>
            <ChorganizerSection></ChorganizerSection>
        </>
    )
}