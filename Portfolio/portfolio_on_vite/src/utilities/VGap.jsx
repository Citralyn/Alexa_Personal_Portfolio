/* Bootstrap Components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* VGap for customizable vertical gaps between components */
export default function VGap({given_width}) {
    return(
        <Col>
            <Row style={{width: given_width}}></Row>
        </Col>
    )
}