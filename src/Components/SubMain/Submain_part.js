import "./submain_part.scss"
import {Col} from "react-bootstrap";
const data=[
    {
        title:"Manage Smartly",
        para:"Stay on top of your task lists and stay in touch with what's happening"
    },
    {
        title:"Communicate Fast",
        para:"Stay on top of your task lists and stay in touch with what's happening"
    },
    {
        title:"Influence Easily",
        para:"Stay on top of your task lists and stay in touch with what's happening"
    },
]
const Submain_part = () => {
    return(
        <>
            {data.map((values,index)=>{
                return(
                <Col md={6} lg={4} className="submain-part">
                <span className="circle-div" key={index}>1</span>
                <h2 key={index} className="mt-4">{values.title}</h2>
                <p className="para-text submain-text" key={index}>{values.para}</p>
                </Col>
                )})
            }

        </>
    )
}
export default Submain_part