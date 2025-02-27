import HGap from "./HGap.jsx"
import VGap from "./VGap.jsx"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export function LeftCloud() {
    return(
        <Row>
            <Col style={{width: "50vw"}}>
                <Image src="/left_cloud.png"></Image>
            </Col>
            <VGap given_width="50vw"></VGap>
        </Row>
    )
}


export function RightCloud() {
    return(
        <Row>
            <VGap given_width="50vw"></VGap>
            <Col style={{width: "50vw"}}>
                <Image src="/right_cloud.png"></Image>
            </Col>
        </Row>
    )
}