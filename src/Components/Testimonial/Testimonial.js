import {Col, Container, Row} from "react-bootstrap";
import "./testimonial.scss"
const Testimonial = ({testidata}) => {
    return(
            <section className="testimonial">
                <Container>
                    <Row>
                        {
                            testidata.map((value,index)=>{
                                return <Col md={6} lg={4} className="testi-col" key={index}>
                                    <div className="stars d-flex mb-3">
                                    { [...Array(5)].map((value,i)=>(
                                    <i className="fa fa-star" aria-hidden="true" key={i}/>
                                    ))}
                                    </div>

                                    <p className="para-text user-para mb-5">{value.para}</p>
                                    <div className="user-data">
                                        <div className="user-image">
                                            <img src={value.image} alt="Image not found"/>
                                        </div>
                                        <div className="data">
                                            <h3>{value.title}</h3>
                                            <p className="para-text">{value.designation}</p>
                                        </div>
                                    </div>
                                </Col>
                            })
                        }
                    </Row>
                </Container>
            </section>
        )
}
    export default Testimonial;