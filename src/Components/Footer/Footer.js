import {Col, Container, Row} from "react-bootstrap";
import "./footer.scss"
const Footer = () => {
    return(
        <section className="footer">
            <div className="footer-image">
              <img src={"/Images/footer.png"} alt={"Image not found"}/>
            </div>
            <Container>
                <Row>
                    <Col className="footer-heading">
                        <h1>It’s easy to get<br/>
                            started. Start now.
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="footer-input">
                      <input type={"text"} placeholder="Enter your email"/>
                      <button>Start for free</button>
                    </Col>
                </Row>
                <Row className="footer-description">
                    <Col md={6} lg={3} className="footer-part1">
                        <h2>Fastland</h2>
                        <p className="para-text">The best medicines & biggest
                            brands within 30 minutes at your
                            home. Experience the power of
                            MedCartel today.</p>
                    </Col>
                    <Col md={6} lg={3} className="footer-part2">
                        <h3>company</h3>
                        <ul>
                            <li>About us</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Reviews</li>
                            <li>Contact</li>
                        </ul>
                    </Col>
                    <Col md={6} lg={3} className="footer-part2">
                        <h3>More links</h3>
                        <ul>
                            <li>About us</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Reviews</li>
                            <li>Contact</li>
                        </ul>
                    </Col>
                    <Col md={6} lg={3} className="footer-part4">
                        <h3>Contact details</h3>
                        <span className="mt-3">
                            <i className="fa fa-map-marker" aria-hidden="true"/>
                            <p>Amsterdam
                              Netherlands</p>
                        </span>
                        <span className="mt-3">
                            <i className="fa fa-phone" aria-hidden="true"/>
                            <p>+31 62 19 22 705
                                7 Days - 8am - 10pm
                            </p>
                        </span>
                        <span className="mt-3">
                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                            <p>info@medcartel.com</p>
                        </span>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Footer