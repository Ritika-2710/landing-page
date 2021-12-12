const constant = {
    page1:[
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
    ],
    page2:{
        title: [
            "Stop waiting.", "Grow your", "business.",
        ],
        subtitle:"Create custom landing pages with Fastland that converts more visitors than any website.",
        input:"Enter your email"
    },
    page3:{
        image:"/Images/img2.png",
        title:"Your business needs a better shape today.",
        subtitle:"Create custom landing pages with Fastland that converts more visitors than any website. Easy & Fast.",
        subdata:[
            {
                title:"Manage Smartly",
                para:"Stay on top of your task lists and stay in touch with what's happening",
                number:"1",
            },
            {
                title:"Communicate Fast",
                para:"Stay on top of your task lists and stay in touch with what's happening",
                number:"2",
            },
            {
                title:"Influence Easily",
                para:"Stay on top of your task lists and stay in touch with what's happening",
                number:"3",
            },
        ]
    },
    page4:{
        images:["/Images/spiral.png","/Images/circle.png"],
        title:"Best features available <br/> for your social marketing.",
        subtitle:"Create custom landing pages with Fastland that converts <br/> more visitors than any website. Easy & Fast.",
        number_div:[
            {
                number:"01",
                title:"Real data access",
                subtitle:"Create custom landing pages with Fastland that converts more visitors than any website."
            },
            {
                number:"02",
                title:"Real data access",
                subtitle:"Create custom landing pages with Fastland that converts more visitors than any website."
            }
        ]
    },
    page5:{
        images:["/Images/business1.png","/Images/business2.png","/Images/business3.png","/Images/business4.png"],
        title:"Get instant growth result for business.",
        subtitle:"Create custom landing pages with Fastland that converts more visitors than any website. Easy, Reliable & Fast. The best medicines & biggest brands within 30 minutes at your home.",
    },
    page6:{
        title:"Save your extra money by using our service.",
        subtitle:"Create custom landing pages with Fastland that converts more visitors than any website. Easy, Reliable & Fast.",
        images:["/Images/service1.png","/Images/service2.png"]
    },
    page7:[
        {
            para:"Create custom landing pages with Fastland that converts more visitors than any website. Easy, Reliable & Fast.",
            image:"/Images/user1.png",
            title:"John Doe",
            designation:"Product Designer"
        },
        {
            para:"Create custom landing pages with Fastland that converts more visitors than any website. Easy, Reliable & Fast.",
            image:"/Images/user2.png",
            title:"Tiana Dokidis",
            designation:"CMO,Dotcorn",
        },
        {
            para:"Create custom landing pages with Fastland that converts more visitors than any website. Easy, Reliable & Fast.",
            image:"/Images/user3.png",
            title:"Talan Bergson",
            designation:"CEO,Greener"
        }
    ],
    page8:[
        {
            data:"15M",
            description:"New Visitors every Month"
        },
        {
            data:"49%",
            description:"Extra conversion on any niche."
        },
        {
            data:"$2M",
            description:"Extra saved by customers."
        },
        {
            data:"93%",
            description:"Success rate on last 05 years."
        }
    ],
    page9:{
        image:"/Images/footer.png",
        title:"It’s easy to get <br/> started. Start now.",
        input:"Enter your email",
        button_title:"Start for free",
        footer_description:{
            title:"Fastland",
            subtitle:"The best medicines & biggest brands within 30 minutes at your home. Experience the power of MedCartel today.",
            footerdata:[
                {
                    title:"company",
                    datas:["About us","Privacy Policy","Terms & Conditions","Reviews","Contact"]
                },
                {
                    title:"More links",
                    datas:["About us","Privacy Policy","Terms & Conditions","Reviews","Contact"]
                }
            ]
        }
    }
};
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require('express-session');
app.use(bodyParser.json());
const cors=require("cors");
const corsOptions ={
    origin:'*',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}


app.use(cors(corsOptions))

// session middleware
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie:{
        maxAge:3600000,
        httpOnly:false
    },
    resave: false
}));

app.use(cookieParser());
var session1;
app.get("/api", (req, res) => {
    res.send("hello world");
});
app.post("/store-data", (req, res) => {
    res.send(constant)
});
app.post("/login-credentials", (req, res) => {

    const data = req.body;
    // res.setHeader("Content-Type","text/html");
    session1=req.session;
    session1.email = data.email;
    req.session.save(function(err) {
        console.log("index.js>175 session saved");
        console.log("index.js>183",session1.email);
        return res.send("user is logged in");
    })

});
app.get("/get_information",(req,res)=>{
    session1=req.session;
    console.log("index.js>180",session1.email);
})

const PORT = process.env.PORT || 3005;

app.listen(PORT, console.log(`Server running successfully on port ${PORT}`));
