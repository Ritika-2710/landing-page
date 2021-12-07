import {Col, Container, Row} from "react-bootstrap";
import "./main.scss"
const Main = () =>
{
    return(
        <section className="main">
            <Container>
                <Row>
                    <Col lg={6} className="main-firstpart">
                      <div className="main-headings">
                          <h1>Stop waiting.</h1>
                          <h1>Grow your</h1>
                          <h1>business.</h1>
                      </div>
                        <div className="para-text sub-text mt-3 mb-5">
                            Create custom landing pages with Fastland
                            that converts more visitors than any website.
                        </div>
                        <div className="valueinput">
                            <input type="text" placeholder="Enter your email"/>
                            <button className="main-button">Start for free</button>
                        </div>
                        <p className="para-text span-text mt-3">By clicking the button, you are agreeing with our <span>Terms and Conditions.</span></p>
                    </Col>
                    <Col lg={6} className="main-secondpart">
                        <div className="main-image">
                          <img src="/Images/ipad.png" className="image"  />
                        </div>
                        <div className="sub-image">
                            <img src="/Images/img1.png"  />
                        </div>
                        <div className="sub-image2">
                            <img src="/Images/img2.png" />
                        </div>
                        <div className="sub-image3">
                            <img src="/Images/img3.png"  />
                        </div>
                        <div className="sub-image4">
                            <img src="/Images/img4.png"  />
                        </div>
                        <div className="sub-image5">
                            <img src="/Images/img5.png" />
                        </div>
                        <div className="sub-image6">
                            <img src="/Images/img6.png" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Main