import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function CrowSuiteSection() {
    return(
        <>
        <h1 className="text-center">CROWSUITE</h1>
        <Row>
        <Col xs={1} sm={1} md={1} lg={1} xl={1}>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
            <Card>
      <Card.Header as="h5">CrowSuite</Card.Header>
      <Card.Body>
        <Card.Text>
            An online SocketIO game resemblant of the card game Big 2!
            But with a twist - birds for suits!
        </Card.Text>
        <Button variant="primary" as="a" href="/projects/crowsuite">Read how it was made!</Button>
        <Button target="_blank" variant="primary" as="a" href="https://crowsuite.netlify.app">Play Online!</Button>

      </Card.Body>
    </Card>
    </Col >
    <Col xs={1} sm={1} md={1} lg={1} xl={1}>
    </Col>
    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
        <Image style={{width: "40vw"}} src="/CrowSuitePreview.png"></Image>
    </Col>
    </Row>
    </>
    )
}

function ChorganizerSection() {

    function handleDownload() {
        alert("Unfortunately Chore Decider is not available to download at the moment \
 - it's in the progress of being revamped! \
You can still check out the blog on how it was made.")
    }
    return(
        <>
        <h1 className="text-center">CHORE DECIDER</h1>
        <Row>
        <Col xs={1} sm={1} md={1} lg={1} xl={1}>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
            <Card>
      <Card.Header as="h5">Chore Decider</Card.Header>
      <Card.Body>
        <Card.Text>
            A MacOS desktop application to help organize and distribute
            your chores - tailored to ACC Communities! 
        </Card.Text>
        <Button variant="primary" as="a" href="/projects/chorganizer">Read how it was made!</Button>
        <Button onClick={handleDownload}>Download to try out!</Button>

      </Card.Body>
    </Card>
    </Col >
    <Col xs={1} sm={1} md={1} lg={1} xl={1}>
    </Col>
    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
        <Image style={{width: "40vw"}} src="/ChoreDeciderPreview.png"></Image>
    </Col>
    </Row>
    </>
    )
}

export default function ProjectHome() {
    return(
        <>
            <Button variant="secondary" as="a" href="/">Back to Main</Button>
            <CrowSuiteSection></CrowSuiteSection>
            <ChorganizerSection></ChorganizerSection>
        </>
    )
}