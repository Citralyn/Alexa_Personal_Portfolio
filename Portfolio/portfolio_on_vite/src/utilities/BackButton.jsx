import Button from 'react-bootstrap/Button';

// Back Button to route back to project page (secretly an anchor)
export function BackToProjects() {
    return(
        <Button className="m-3 shadow" variant="outline-secondary" as="a" href="/projects">Back to Projects</Button>
    )
}

// Back Button to route back to home page (secretly an anchor)
export function BackToHome() {
    return(
        <Button className="m-3 shadow" variant="outline-secondary" as="a" href="/">Back to Main</Button>
    )
}