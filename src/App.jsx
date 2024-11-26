import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import Create from "./Create";
import Home from "./Home";
import Navbar from "./Navbar";
const App = ()=>{
  const title = "Welcome to my blog!"

  return (
 <Router>
    <div className="App">
      <Navbar></Navbar>
       <div className = "content">
        <Routes>
        <Route exact path="/" element ={<Home/>}>
        </Route>
        <Route path = "/create" element ={<Create/>}>

        </Route>
        <Route path = "/blogs/:id" element ={<BlogDetails/>}>
        </Route>
        </Routes> 
         
        </div>
      </div>

 </Router>

  );
}

export default App;
