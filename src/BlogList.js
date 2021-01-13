const BlogList = ({ value, handleDelete }) => {
  return (
    <div>
      {value.map(({ title, id, body }) => (
        <div className="blog-preview" key={id}>
          <h2>{title}</h2>
          <h3>{body}</h3>
          <button onClick={() => handleDelete(id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
