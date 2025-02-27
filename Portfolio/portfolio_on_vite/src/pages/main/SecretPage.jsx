import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HGap from "../../utilities/HGap";

export default function SecretPage() {
    return(
        <>
        <HGap given_height={"50vh"}></HGap>
        <Row>
            <Col>
            </Col>
            <Col>
            <Image className="shadow" src="/holy_cheese.jpeg"></Image>
            </Col>
            <Col>
            </Col>
        </Row>
        <HGap given_height={"50vh"}></HGap>
        </>
       
    )
}