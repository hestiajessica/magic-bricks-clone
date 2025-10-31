import React from "react";
import Home from "./home";
import Contact from "./contact";
import Properties from "./properties";
import { BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom';

let Routing=()=>{
    return(
        
    <div>
        <HashRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/properties"   element={<Properties />} />
    <Route path="/contact"  element={<Contact />} />
  </Routes>
</HashRouter>

</div>
        

    )
}
export default Routing;