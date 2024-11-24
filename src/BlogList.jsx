const BlogList = ({ blogs, title, handleDelete }) => {


  return (
    <div className="blogList">
      {blogs.map((blog) => (
        <div className="blogPreview" key={blog.id}>
          <h2>{blog.title}</h2>

          <p className="author"> Written by: {blog.author}</p>
          <p>{blog.body}</p>
          <button className="button" onClick={() => handleDelete(blog.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
