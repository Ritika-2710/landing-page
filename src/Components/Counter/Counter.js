import {Col, Container, Row} from "react-bootstrap";
import "./counter.scss"
const Counter = () => {
    return <section className="counter">
        <Container className="counter-container">
            <Row>
                <Col md={6} lg={3}>
                  <h1>15M</h1>
                    <p className="counter-text">New Visitors <br/> every Month</p>
                </Col>
                <Col md={6} lg={3}>
                    <h1>49%</h1>
                    <p className="counter-text">Extra conversion
                        on any niche.
                    </p>
                </Col>
                <Col md={6} lg={3}>
                    <h1>$2M</h1>
                    <p className="counter-text">Extra saved by
                        customers.</p>
                </Col>
                <Col md={6} lg={3}>
                    <h1>93%</h1>
                    <p className="counter-text">Success rate on
                        last 05 years.
                    </p>
                </Col>
            </Row>
        </Container>
    </section>
}
export default Counter;