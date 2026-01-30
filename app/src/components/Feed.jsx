import MyBlogs from "./MyBlogs";
const Feed = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <MyBlogs key={blog.id} blog={blog} />
      ))}
    </>
  );
};

export default Feed;
