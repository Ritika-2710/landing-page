import {Col, Container, Row} from "react-bootstrap";
import "./business.scss"
const Business = ({business_data}) => {
    return(
        <section className="business">
            <Container>
                <Row>
                    <Col  lg={6}>
                       <div className="business-image">
                           <div className="business-main-image">
                               <img src={business_data.images && business_data.images[0]} alt={"Image Not Found"}/>
                           </div>
                           <div className="business-sub-image1">
                               <img src={business_data.images && business_data.images[1]} alt={"Image Not Found"}/>
                           </div>
                           <div className="business-sub-image2">
                               <img src={business_data.images && business_data.images[2]} alt={"Image Not Found"}/>
                           </div>
                           <div className="business-card">
                               <div><h1>68%</h1><span className="business-circle"><i className="fa fa-arrow-up"
                                                                                     aria-hidden="true"/></span></div>
                               <p>Extra growth for<br/> your company.</p>
                           </div>
                           <div className="business-sub-image3">
                               <img src={business_data.images && business_data.images[3]} alt={"Image Not Found"}/>
                           </div>
                       </div>
                    </Col>
                    <Col lg={6}>
                        <div className="business-text">
                            <h1>{business_data.title}</h1>
                            <p className="para-text mt-3">{business_data.subtitle}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Business