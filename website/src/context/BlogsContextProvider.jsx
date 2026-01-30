import { createContext, useState } from "react";

export const BlogsContext = createContext({});

function BlogsContextProvider({ children }) {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Blog 1",
      theme: "Books",
      datetime: "July 01, 2025 11:11:11 PM",
      body: "Blog 1 body",
    },
    {
      id: 2,
      title: "Blog 2",
      theme: "Books",
      datetime: "July 01, 2025 11:11:11 PM",
      body: "Blog 2 body",
    },
    {
      id: 3,
      title: "Blog 3",
      theme: "Books",
      datetime: "July 01, 2025 11:11:11 PM",
      body: "Blog 3 body",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <BlogsContext.Provider
      value={{
        blogs,
        setBlogs,
        search,
        setSearch,
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </BlogsContext.Provider>
  );
}

export default BlogsContextProvider;
