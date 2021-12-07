import {Col, Container, Row} from "react-bootstrap";
import "./testimonial.scss"
const testidata=[
    {
        para:"Create custom landing pages with Fastland that converts more visitors than any website. Easy, Reliable & Fast.",
        image:"/Images/user1.png",
        title:"John Doe",
        designation:"Product Designer"
    },
    {
        para:"Create custom landing pages with Fastland that converts more visitors than any website. Easy, Reliable & Fast.",
        image:"/Images/user2.png",
        title:"Tiana Dokidis",
        designation:"CMO,Dotcorn",
    },
    {
        para:"Create custom landing pages with Fastland that converts more visitors than any website. Easy, Reliable & Fast.",
        image:"/Images/user3.png",
        title:"Talan Bergson",
        designation:"CEO,Greener"
    }
]
const Testimonial = () => {
    return(
            <section className="testimonial">
                <Container>
                    <Row>
                        {
                            testidata.map((value,index)=>{
                                return <Col md={6} lg={4} className="testi-col">
                                    <div className="stars d-flex mb-3">
                                    { [...Array(5)].map((value,i)=>(
                                    <i className="fa fa-star" aria-hidden="true"/>
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