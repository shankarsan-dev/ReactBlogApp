// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';


// const Create = () => {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("dd");
//   const [author,setAuthor] = useState("");
//   const [isLoading, setIsLoading] = useState('false');
//   const history = useHistory();


// const handleSubmit = (e)=>{
//   e.preventDefault();
//   const blog ={title,body, author};
//   console.log(blog);
//   setIsLoading(true);
//   fetch("http://localhost:8000/blogs",{
//     method: "POST",
//     headers: {"Content-Type":"application/json"},
//     body: JSON.stringify(blog)
    

//   }).then(()=>{console.log("new blog added");
//     setIsLoading(false)
    
//   }
// )
// history.go(-1);
// }

//   return (
  
//     <div className = "create">
//       <h2>Add a new blog</h2>
//       <form onSubmit={handleSubmit}>
//           <label htmlFor="">Blog Title: </label>
//            <input type="text" value ={title} onChange={(e)=>{
//             setTitle(e.target.value);
//            }} required/>
//            <label htmlFor="">Blog Body: </label>
//            <textarea name="" id="" required  value ={body} onChange={(e)=>{
//             setBody(e.target.value);
//            }}></textarea>
//            <label htmlFor="">Author: </label>
//            <input type="text" value={author} onChange={(e)=>{setAuthor(e.target.value)}} required/>
//           {!isLoading && <button>Submit</button>} 
//           {isLoading && <button>Submit</button>} 
//       </form>

//       {title}
//       {body}
//       {author}
//     </div>
//   )
// }

// export default Create
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsLoading(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    })
      .then(() => {
        console.log("new blog added");
        setIsLoading(false);
        navigate(-1); // Navigate back after successful submission
      })
      .catch((err) => {
        console.error("Error adding blog:", err);
        setIsLoading(false);
      });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Create;
