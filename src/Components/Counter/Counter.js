import {Col, Container, Row} from "react-bootstrap";
import "./counter.scss"
const Counter = ({counterdata}) => {
    return <section className="counter">
        <Container className="counter-container">
            <Row>
                {
                    counterdata.map((value,index)=>{
                        return <Col sm={6} md={6} lg={3} className="counter-col" key={index}>
                            <h1>{value.data}</h1>
                            <p className="counter-text">{value.description}</p>
                        </Col>
                    })
                }

            </Row>
        </Container>
    </section>
}
export default Counter;