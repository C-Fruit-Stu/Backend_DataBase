import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Feed from "../components/Feed";
import { BlogsContext } from "../context/BlogsContextProvider";
import { useContext } from "react";
import { useParams } from "react-router-dom";

function BlogsPage() {
  const {
    blogs,
    setBlogs,
    search,
    setSearch,
    searchResults,
    setSearchResults,
  } = useContext(BlogsContext);
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));
  return (
    <>
      <div className="App">
        <Header title="Blogs" />
        <Nav
          search={search}
          setSearch={setSearch}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
        <main className="PostPage">
          <article className="post">
            {blogs.length ? (
              <Feed blogs={blogs} />
            ) : (
              <p style={{ marginTop: "2rem" }}>No blog found</p>
            )}
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
}
export default BlogsPage;
