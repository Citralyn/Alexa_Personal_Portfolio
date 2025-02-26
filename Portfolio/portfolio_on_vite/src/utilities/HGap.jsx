import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HGap({given_height}) {
    return(
        <Row>
            <Col style={{height: given_height}}></Col>
        </Row>
    )
}