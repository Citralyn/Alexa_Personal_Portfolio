import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';

//fluid = "xl" -> fluid (container fills up whole screen) until XL 
// maybe just set everything to auto? 
export default function TestPage() {
    return (
        <div>
       <Container>
      <Row>
        <Col className="bg-info" md={4}>md=4</Col>
        <Col className="bg-success" md={{ span: 2, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
      </Row>
      <Row>
        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
      </Row>
    </Container>

    <Container className="text-center">
      <Row>
        <Col sm={8}>sm=8</Col>
        <Col sm={4}>sm=4</Col>
      </Row>
      <Row>
        <Col className="bg-info" lg>lg=true</Col>
        <Col className="bg-primary" md>md=true</Col>
        <Col className="bg-success" sm>sm=true</Col>
      </Row>
    </Container>

        <Container className="text-center bg-info">
        <Col xl="auto">Variable width content</Col>
        </Container>

        <Container className="text-center bg-danger">
        <Col xs="auto">Variable width content</Col>
        </Container>
        
        <Container className="bg-primary" fluid="xl">
          <Row>
            <Col>1 of 1</Col>
          </Row>
        </Container>

        <Container className="bg-secondary" fluid="md">
          <Row>
            <Col>1 of 1</Col>
          </Row>
        </Container>
        </div>

      );
}
