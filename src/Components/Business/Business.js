import {Col, Container, Row} from "react-bootstrap";
import "./business.scss"
const Business = () => {
    return(
        <section className="business">
            <Container>
                <Row>
                    <Col  lg={6}>
                       <div className="business-image">
                           <div className="business-main-image">
                               <img src={"/Images/business1.png"} alt={"Image Not Found"}/>
                           </div>
                           <div className="business-sub-image1">
                               <img src={"/Images/business2.png"} alt={"Image Not Found"}/>
                           </div>
                           <div className="business-sub-image2">
                               <img src={"/Images/business3.png"} alt={"Image Not Found"}/>
                           </div>
                           <div className="business-card">
                               <div><h1>68%</h1><span className="business-circle">1</span></div>
                               <p>Extra growth for<br/> your company.</p>
                           </div>
                           <div className="business-sub-image3">
                               <img src={"/Images/business4.png"} alt={"Image Not Found"}/>
                           </div>
                       </div>
                    </Col>
                    <Col lg={6}>
                        <div className="business-text">
                            <h1>Get instant
                                growth result
                                for business.</h1>
                            <p className="para-text mt-3">Create custom landing pages with Fastland that converts more visitors than any website.
                                Easy, Reliable & Fast. The best medicines & biggest brands within 30 minutes at your home.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Business