import {Col, Container, Row} from "react-bootstrap";
import "./login.scss"
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useNavigate();
    const submitData = (e) => {
        axios.post("http://localhost:3005/login-credentials", JSON.stringify({
            email,
            password,
        }),{
            "headers": {
                "content-type": "application/json"
            },
        }
    ).then(response=>
        history('/Index')
    ).catch(error => {console.log(error)})
        console.log(email,password);
        e.preventDefault();
    }
    const resetData = () => {
        document.getElementById("login-form").reset();
    }
    return(
        <section className="login">
        <Container>
            <Row className="login-row">
                <Col md={6} lg={6}>
                  <div className="login-image">
                    <img src={"/Images/login.svg"} alt={"Login"}/>
                  </div>
                </Col>
                <Col md={6} lg={6}>
                    <div className="login-details">
                        <form id={"login-form"} onSubmit={(e)=>{submitData(e)}}>
                        <h1>Login</h1>
                        <input type={"text"} placeholder={"Enter your email"}  onChange={(e)=>{setEmail(e.target.value)}}/>
                        <input type={"text"} placeholder={"Enter your password"} onChange={(e)=>{setPassword(e.target.value)}}/>
                        <button className="login-button" onClick={resetData}>Submit</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
        </section>
    )
}
export default Login