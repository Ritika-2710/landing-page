import {Col, Container, Row} from "react-bootstrap";
import "./footer.scss"
const Footer = ({footer}) => {
    return(
        <section className="footer">
            <div className="footer-image">
              <img src={footer.image} alt={"Image not found"}/>
            </div>
            <Container>
                <Row>
                    <Col className="footer-heading">
                        <h1 dangerouslySetInnerHTML={{__html:footer.title}}/>
                    </Col>
                </Row>
                <Row>
                    <Col className="footer-input">
                      <input type={"text"} placeholder={footer.input}/>
                      <button>{footer.button_title}</button>
                    </Col>
                </Row>
                {
                    console.log(footer.footer_description && footer.footer_description.title)
                }
                <Row className="footer-description">
                    <Col md={6} lg={3} className="footer-part1">
                        <h2>{footer.footer_description && footer.footer_description.title}</h2>
                        <p className="para-text">{footer.footer_description && footer.footer_description.subtitle}</p>
                    </Col>
                    {
                        footer.footer_description?footer.footer_description.footerdata.map((value,index)=>{
                          return <Col md={6} lg={3} className="footer-part2" key={index}>
                              <h3>{value.title}</h3>
                              <ul>
                                  {
                                      value.datas.map((value1,index1)=>{
                                          return <li key={value1}>{value1}</li>
                                      })
                                  }
                              </ul>
                          </Col>
                        }):""
                    }
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
                            <i className="fa fa-envelope-o" aria-hidden="true"/>
                            <p>info@medcartel.com</p>
                        </span>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Footer