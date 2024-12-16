import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const {data:blog,error,isLoading} = useFetch("http://localhost:8000/blogs/"+id);
  const handleClick =()=>{
    fetch("http://localhost:8000/blogs/"+blog.id,{method:'delete'}).then(()=>{navigate(-1)})
  }
  return (
    <div>
      <h2 className="blog-details">
        Blog Details - {id}
        {isLoading && <div>Loading ...........</div>}
        {error && <div>{error}</div>}
        {blog &&(
          <article>
            <h2>{blog.title}</h2>
            <p className='blog-author'>Written by {blog.author}</p>
            <p className='blog-body'>{blog.body}</p>
            <button onClick={handleClick}>Delete  </button>
          </article>
        )}

      </h2>
    </div>
  )
}

export default BlogDetails
