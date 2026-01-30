import { Link } from "react-router-dom";
function MyBlog({ blog }) {
  return (
    <article className="post">
      <Link to={`/BlogsPage/${blog.id}`}>
        <h2>{blog.title}</h2>
        <h3>{blog.theme}</h3>
        <p className="postDate">{blog.datetime}</p>
      </Link>
      <p className="postBody">{
        (blog.body).length <=25 ? blog.body : `${(blog.body).slice(0,25)}...`
        }</p>
    </article>
  );
}
export default MyBlog;
