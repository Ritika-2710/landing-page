import {useEffect, useState} from "react";
import axios from "axios";

const IndexPage = () => {
    const [user,setUser] = useState();
    useEffect(()=>{
        console.log("IndexPage.js>6");
        axios.get("http://localhost:3005/get_information").then(response=>
        {
            console.log("IndexPage.js>8",response)
            setUser(response.data)
        }).catch(error=>console.log(error))
    })
    return(<div>UserId : {user}</div>)
};
export default IndexPage
