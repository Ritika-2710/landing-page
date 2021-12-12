import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./Components/Authentication/Login";
import Combinefiles from "./Components/CombineFiles/Combinefiles";
import {Route, Routes} from "react-router-dom";
import IndexPage from "./Components/Authentication/IndexPage";

function App() {

  return (
    <div className="App">
        <Routes>
            <Route exact path='/Login' element={< Login />}/>
            <Route exact path='/Index' element={<IndexPage/>}/>
            <Route exact path='/' element={< Combinefiles />}/>
        </Routes>
    </div>
  );
}

export default App;
