import { Link } from "react-router-dom";
function Header({ title }) {
  return (
    <>
      <header className="Header">
        <h1>{title}</h1>
      </header>
      <nav className="Nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/BlogsPage">Blogs</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Header;
