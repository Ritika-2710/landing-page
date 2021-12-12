import {Col, Container, Row} from "react-bootstrap";
import "./header.scss"
import {useState} from "react";
import {Link} from "react-router-dom";
const Header = ({header_data})=> {
    const [isMobile,issetMobile] = useState(false);
    return (
        <section>
            <Container fluid>
                <Row>
                    <Col md={6} lg={6} className="header-part1">
                        <div className="logo">
                            <h2>FASTLAND</h2>
                        </div>
                        <div className="menu">
                            <ul className={"header-ul " +(isMobile ? "mobile-menu" : "")} onClick={()=>issetMobile(!isMobile)}>
                                {
                                    header_data.map((value, index) => {
                                        return (
                                            <li className="header-li" key={index}>
                                                <span>
                                                    {value.title}
                                                </span>
                                                <div className="li-div">
                                                    <ul className="li-div-ul">
                                                        {
                                                            value.subdata.map((value1, index1) => {
                                                                return <li className="li-div-li" key={index1}
                                                                           dangerouslySetInnerHTML={{__html: value1}}/>

                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </Col>
                    <Col md={6} lg={6} className={"header-part2 "  +(isMobile ? "mobile-btn" : "")} onClick={()=>issetMobile(!isMobile)}>
                       <p className={"para-text header-login "}><Link to={"/Login"}>Login</Link></p>
                        <button className="button">Get Started</button>
                        <button className="mobile-menu-icon btn btn-primary" onClick={()=>issetMobile(!isMobile)}>
                            {isMobile ? <i className="fa fa-times" aria-hidden="true"/> :
                                <i className="fa fa-bars" aria-hidden="true"/>}
                        </button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default  Header