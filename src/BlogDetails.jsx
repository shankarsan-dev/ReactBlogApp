import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {

  const {id} = useParams();
  const {data:blog,error,isLoading} = useFetch("http://localhost:8000/blogs/"+id);
  return (
    <div>
      <h2 className="blog-details">
        Blog Details - {id}
        {isLoading && <div>Loading ...........</div>}
        {error && <div>{error}</div>}
        {blog &&(
          <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <p>{blog.body}</p>
          </article>
        )}

      </h2>
    </div>
  )
}

export default BlogDetails
