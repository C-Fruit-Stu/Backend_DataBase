import { Link } from "react-router-dom";
import { BlogsContext } from "../context/BlogsContextProvider";



function Nav({ search, setSearch, searchResults, setSearchResults }) {
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Posts</label>
        <input
          id="search"
          type="text"
          placeholder="Search Blogs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
     
    </nav>
  );
}
export default Nav;
