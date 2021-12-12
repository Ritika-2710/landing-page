import Header from "../Header/Header";
import Main from "../Main/Main";
import Submain from "../SubMain/Submain";
import Features from "../Features/Features";
import Business from "../Business/Business";
import Service from "../Service/Service";
import Testimonial from "../Testimonial/Testimonial";
import Counter from "../Counter/Counter";
import Footer from "../Footer/Footer";
import {useEffect, useState} from "react";
import axios from "axios";

const Combinefiles = () => {
    const [data,setData] = useState({
        page1:[],
        page2:{},
        page3:{},
        page4:{},
        page5:{},
        page6:{},
        page7:[],
        page8:[],
        page9:{},
    });
    useEffect(()=>{
        axios.post("http://localhost:3005/store-data").then(response=>{
            setData(response.data)
            console.log(data)}).
        catch(error=>{console.log(error)})
    },[])
    return(
        <div>
            <Header header_data={data.page1}/>
            <Main main_data={data.page2}/>
            <Submain submain_data={data.page3}/>
            <Features feature_data={data.page4}/>
            <Business business_data={data.page5}/>
            <Service service_data={data.page6}/>
            <Testimonial testidata={data.page7}/>
            <Counter counterdata={data.page8}/>
            <Footer footer={data.page9}/>
        </div>
    )
}
export default Combinefiles