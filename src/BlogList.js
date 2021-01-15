const BlogList = ({ value }) => {
  return (
    <div>
      {value.map(({ title, id, body }) => (
        <div className="blog-preview" key={id}>
          <h2>{title}</h2>
          <h3>{body}</h3>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
