import {Col, Container, Row} from "react-bootstrap";
import "./features.scss"
const Features = ({feature_data}) =>
{
    return(
        <section className="features">
            <div className="feature-image1">
                <img src={feature_data.images?feature_data.images[0]:""} alt={"image not found"}/>
            </div>
            <div className="feature-image2">
                <img src={feature_data.images?feature_data.images[1]:""} alt={"image not found"}/>
            </div>
          <Container>
              <Row>
                  <Col className="features-col-1">
                      <h1 dangerouslySetInnerHTML={{__html:feature_data.title}}/>
                      <p className="mt-4" dangerouslySetInnerHTML={{__html:feature_data.subtitle}}/>
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
                      {
                          feature_data.number_div?feature_data.number_div.map((value,index)=>{
                             return <div className="number-div" key={index}>
                                  <h1>{value.number}</h1>
                                  <h4 className="mt-4 mb-4">{value.title}</h4>
                                  <p className="para-text">{value.subtitle}</p>
                              </div>
                          }) : ""
                      }
                  </Col>
              </Row>
          </Container>
        </section>
    )
}
export default Features