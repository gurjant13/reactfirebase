import Register from './Register';
import Addrecord from './Addrecord';
import Listdetails from './Listdetails';

import Insertapidata from './Insertapidata';
import Snapdata from './Snapdata';

import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (

    <div className = "App">
    <Routes>
    <Route path="/" element={<Register/>} />
    <Route path="/Addrecord" element={<Addrecord/>} />
    <Route path="/Listdetails" element={<Listdetails/>} />

    <Route path="/Insertapidata" element={<Insertapidata/>} />
    <Route path="/Snapdata" element={<Snapdata/>} />
    </Routes>
    </div>

    // react-router v5 uses the following syntax
    // check react-router version in package.json

    // <div className = "App">

    // <Route exact path="/" component={Register} />
    // <Route exact path="/user" component={Userdata} />

    // </div>



    );
}

export default App;

// alert("d");

