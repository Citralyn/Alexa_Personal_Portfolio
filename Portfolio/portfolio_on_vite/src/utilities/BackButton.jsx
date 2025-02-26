import Button from 'react-bootstrap/Button';

export function BackToProjects() {
    return(
        <Button className="m-3 shadow" variant="outline-secondary" as="a" href="/projects">Back to Projects</Button>
    )
}

export function BackToHome() {
    return(
        <Button className="m-3 shadow" variant="outline-secondary" as="a" href="/">Back to Main</Button>
    )
}