import {useEffect} from "react";
import axios from "axios";

const IndexPage = () => {
    useEffect(()=>{
        console.log("IndexPage.js>6");
        axios.get("http://localhost:3005/get_information").then(response=>console.log(response)).catch(error=>error)
    })
    return(<div>Hello</div>)
};
export default IndexPage
