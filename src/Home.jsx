import { useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
 
   const{data:blogs, isLoading, error} =  useFetch("http://localhost:8000/blogs");
    const [name,setName] = useState("shankarsan");



    return (
       
        <div className="home">
         {<h2>HomePage</h2>}   
            {<h2>All blogs</h2>}
            {error && <div>{error}</div>}
            { isLoading && <div><h1>Loading...........</h1></div>}
          {blogs && <BlogList blogs = {blogs} title ="all-blogs" />}
          </div>

  );  }
export default Home;
