import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HGap from "../../utilities/HGap";
import Container from "react-bootstrap/Container";

export default function SecretPage() {
    return(
        <>
        {/* Gap of space */}
        <HGap given_height={"50vw"}/>

        <Row className="row justify-content-center">
            <Col/> {/* Columns on each side */}

            <Col>
                <Image className="shadow" src="/holy_cheese.jpeg"></Image>
            </Col>

            <Col/> {/* Columns on each side */}
        </Row>

        {/* Gap of space */}
        <HGap given_height={"50vw"}/>
        </>
       
    )
}