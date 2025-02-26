import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function VGap({given_width}) {
    return(
        <Col>
            <Row style={{width: given_width}}></Row>
        </Col>
    )
}