import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Header";
import {BrowserRouter as Router} from "react-router-dom";
import Main from "./Components/Main/Main";
import Submain from "./Components/SubMain/Submain";
import Features from "./Components/Features/Features";
import Business from "./Components/Business/Business";
import Service from "./Components/Service/Service";
import Testimonial from "./Components/Testimonial/Testimonial";
import Counter from "./Components/Counter/Counter";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          <Main/>
          <Submain/>
          <Features/>
          <Business/>
          <Service/>
          <Testimonial/>
          <Counter/>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
