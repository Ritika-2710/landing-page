import {Col, Container, Row} from "react-bootstrap";
import "./service.scss"
const Service = ({service_data}) => {
    return(
        <section className="service">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="service-text">
                            <h1>{service_data.title}</h1>
                            <p className="para-text mt-3 mb-5">{service_data.subtitle}</p>
                        </div>
                    </Col>
                    <Col lg={6} className="service-card">
                        <div className="service-div-card">
                            <div className="service-div">
                                <h1>$271,824</h1>
                                <p className="para-text">Annual revenue</p>
                            </div>
                            <div className="service-div mt-3">
                                <h1>$4,249</h1>
                                <p className="para-text">Savings using other services</p>
                            </div>
                            <div className="special-div">
                                <h1>$4,249</h1>
                                <p className="para-text">Savings using other services</p>
                            </div>
                        </div>
                        <div className="service-images">
                            <div className="service-image1">
                                <img src={service_data.images && service_data.images[0]} alt={"Image Not Found"}/>
                            </div>
                            <div className="service-image2">
                                <img src={service_data.images && service_data.images[1]} alt={"Image Not Found"}/>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}
export default Service