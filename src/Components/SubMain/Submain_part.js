import "./submain_part.scss"
import {Col} from "react-bootstrap";
const Submain_part = ({subpart}) => {
    return(
        <>
            {subpart? subpart.map((values,index)=>{
                return(
                <Col md={6} lg={4} className="submain-part" key={index}>
                <span className="circle-div">{values.number}</span>
                    <h2 className="mt-4">{values.title}</h2>
                <p className="para-text submain-text">{values.para}</p>
                </Col>
                )}) : ""
            }

        </>
    )
}
export default Submain_part