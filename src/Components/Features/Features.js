import {Col, Container, Row} from "react-bootstrap";
import "./features.scss"
const Features = () =>
{
    return(
        <section className="features">
            <div className="feature-image1">
                <img src={"/Images/spiral.png"} alt={"image not found"}/>
            </div>
            <div className="feature-image2">
                <img src={"/Images/circle.png"} alt={"image not found"}/>
            </div>
          <Container>
              <Row>
                  <Col className="features-col-1">
                      <h1>Best features available<br/>
                          for your social marketing.</h1>
                      <p className="mt-4">Create custom landing pages with Fastland that converts<br/>
                          more visitors than any website. Easy & Fast.</p>
                  </Col>
              </Row>
              <Row className="mt-5 features-row">
                  <Col lg={3} className="features-col-2">
                      <ul>
                          <li className="active">Analytics</li>
                          <li className="active">Advertisement</li>
                          <li className="active">Sales Report</li>
                      </ul>
                  </Col>
                  <Col lg={9} className="features-col-3">
                      <div className="number-div">
                          <h1>01.</h1>
                          <h4 className="mt-4 mb-4">Real data access</h4>
                          <p className="para-text">Create custom landing pages with
                              Fastland that converts more visitors
                              than any website.</p>
                      </div>
                      <div className="number-div">
                          <h1>02.</h1>
                          <h4 className="mt-4 mb-4">Real data access</h4>
                          <p className="para-text">Create custom landing pages with
                              Fastland that converts more visitors
                              than any website.</p>
                      </div>
                  </Col>
              </Row>
          </Container>
        </section>
    )
}
export default Features