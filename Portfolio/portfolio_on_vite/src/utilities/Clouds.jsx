/* Bootstrap Components */
import VGap from "./VGap.jsx"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

/* These Clouds are for Aesthetic Purposes only */

// Cloud that takes up left half of the screen 
export function LeftCloud() {
    return(
        <Row>
            <Col>
                <Image fluid src="/home/left_cloud.png"></Image>
            </Col>
            <VGap given_width="50vw"></VGap>
        </Row>
    )
}

// Double Clouds! -> Very aesthetic :) 
export function DoubleClouds() {
    return(
        <Row>
            <Col xs={6}>
                <Image style={{width: "50vw"}} src="/home/left_cloud.png"></Image>
            </Col>
            <Col xs={6}>
                <Image style={{width: "50vw"}} src="/home/right_cloud.png"></Image>
            </Col>
        </Row>
    )
}

// Cloud that takes up right half of the screen 
export function RightCloud() {
    return(
        <Row>
            <VGap given_width="50vw"></VGap>
            <Col>
                <Image fluid src="/home/right_cloud.png"></Image>
            </Col>
        </Row>
    )
}