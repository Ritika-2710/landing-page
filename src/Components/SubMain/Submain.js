import {Col, Container, Row} from "react-bootstrap";
import "./submain.scss"
import Submain_part from "./Submain_part";
const Submain = ({submain_data}) =>
{
    console.log(submain_data);
    return(
        <section className="submain">
            <div className="submain-image">
            <img src={submain_data.image} alt={"image not found"}/>
            </div>
            <Container className="submain_container">
                <Row>
                    <Col md={12} lg={6} className="submain-heading">
                       <h1>{submain_data.title}</h1>
                    </Col>
                    <Col md={12} lg={6} className="submain-text">
                        <p className="para-text">{submain_data.subtitle}
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Submain_part subpart={submain_data.subdata}/>
                </Row>
            </Container>
        </section>
    )
}
export default Submain