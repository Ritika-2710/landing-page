import {Col, Container, Row} from "react-bootstrap";
import "./header.scss"
import {useState} from "react";
const data = [
    {
        title:"Home",
        subdata:["Marketing","Project Management","IT Services","Services","Agency","Digital Agency","App Presenting","Startup"],
    },
    {
        title:"Pages",
        subdata:["About Us","Blog","Careers","Pricing","Account","Utility","Contact"]
    },
    {
        title:"Portfolios",
        subdata:["About Us","Blog","Careers","Pricing","Account","Utility","Contact"]
    },
    {
        title:"Blogs",
        subdata:["About Us","Blog","Careers","Pricing","Account","Utility","Contact"]
    },
    {
        title:"Contact",
        subdata:[`Contact&nbsp;One`,"Contact&nbsp;Two",]
    },
]
const Header = ()=>
{
    const [showDiv,setshowDiv] = useState(false);
    return(
        <section>
            <Container fluid>
                <Row>
                    <Col md={6} lg={6} className="header-part1">
                        <div className="logo">
                            <h2>FASTLAND</h2>
                        </div>
                        <div className="menu">
                            <ul className="header-ul">
                                {
                                    data.map((value,index) =>
                                    {
                                       return (
                                           <li className="header-li" key={index}>
                                                <span >
                                                    {value.title}
                                                </span>
                                               <div className="li-div">
                                                   <ul className="li-div-ul">
                                                       {
                                                           value.subdata.map((value1,index1)=>{
                                                               return <li className="li-div-li" dangerouslySetInnerHTML={{__html:value1}} />

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
                    <Col md={6} lg={6} className="header-part2">
                        <p className="para-text header-login">Login</p>
                        <button className="button">Get Started</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default  Header