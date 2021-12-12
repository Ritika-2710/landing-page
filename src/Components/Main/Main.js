import {Col, Container, Row} from "react-bootstrap";
import "./main.scss"
import {useEffect, useState} from "react";
const Main = ({main_data}) =>
{
    console.log(main_data.title);
    return(
        <section className="main">
            <Container>
                <Row>
                    <Col lg={6} className="main-firstpart">
                      <div className="main-headings">
                          {
                              main_data.title? main_data.title.map((value,index)=>{
                                  return <h1 key={index}>{value}</h1>
                              }) : ""
                          }
                      </div>
                        <div className="para-text sub-text mt-3 mb-5">
                            {main_data.subtitle}
                        </div>
                        <div className="valueinput">
                            <input type="text" placeholder={main_data.input}/>
                            <button className="main-button">Start for free</button>
                        </div>
                        <p className="para-text span-text mt-3">By clicking the button, you are agreeing with our <span>Terms and Conditions.</span></p>
                    </Col>
                    <Col lg={6} className="main-secondpart">
                        <div className="main-image">
                          <img src={"/Images/ipad.png"} className="image" alt={"image not found"} />
                        </div>
                        <div className="sub-image">
                            <img src={"/Images/img1.png"} alt={"image not found"} />
                        </div>
                        <div className="sub-image2">
                            <img src={"/Images/img2.png"} alt={"image not found"}/>
                        </div>
                        <div className="sub-image3">
                            <img src={"/Images/img3.png"} alt={"image not found"} />
                        </div>
                        <div className="sub-image4">
                            <img src={"/Images/img4.png"} alt={"image not found"} />
                        </div>
                        <div className="sub-image5">
                            <img src={"/Images/img5.png"} alt={"image not found"} />
                        </div>
                        <div className="sub-image6">
                            <img src={"/Images/img6.png"} alt={"image not found"}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Main