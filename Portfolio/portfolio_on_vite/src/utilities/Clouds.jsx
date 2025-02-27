import HGap from "./HGap.jsx"
import VGap from "./VGap.jsx"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export function LeftCloud() {
    return(
        <Row>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <Image style={{width: "50vw"}} src="/left_cloud.png"></Image>
            </Col>
            <VGap given_width="50vw"></VGap>
        </Row>
    )
}

export function DoubleClouds() {
    return(
        <Row>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <Image style={{width: "50vw"}} src="/left_cloud.png"></Image>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <Image style={{width: "50vw"}} src="/right_cloud.png"></Image>
            </Col>
        </Row>
    )
}

export function RightCloud() {
    return(
        <Row>
            <VGap given_width="50vw"></VGap>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <Image style={{width: "50vw"}} src="/right_cloud.png"></Image>
            </Col>
        </Row>
    )
}