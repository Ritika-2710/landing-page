import {Col, Container, Row} from "react-bootstrap";
import "./submain.scss"
import Submain_part from "./Submain_part";
const Submain = () =>
{
    return(
        <section className="submain">
            <div className="submain-image">
            <img src={"/Images/img2.png"} alt={"image not found"}/>
            </div>
            <Container className="submain_container">
                <Row>
                    <Col md={12} lg={6} className="submain-heading">
                       <h1>Your business needs a
                           better shape today.</h1>
                    </Col>
                    <Col md={12} lg={6} className="submain-text">
                        <p className="para-text">Create custom landing pages with
                            Fastland that converts more visitors
                            than any website. Easy & Fast.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Submain_part/>
                </Row>
            </Container>
        </section>
    )
}
export default Submain