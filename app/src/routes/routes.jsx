import Home from "../pages/Home";
import NewPost from "../components/NewPost";
import BlogsPage from "../pages/BlogsPage";
import About from "../pages/About";
import Missing from "../pages/Missing";
import { createBrowserRouter } from "react-router-dom";
import BlogsContextProvider from "../context/BlogsContextProvider";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/BlogsPage",
  element: <BlogsContextProvider><BlogsPage /></BlogsContextProvider>,
  },
  {
    path: "/BlogsPage/:id",
    element: <NewPost />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "*",
    element: <Missing />,
  },
]);
