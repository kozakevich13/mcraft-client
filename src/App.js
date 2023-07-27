import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Rules from "./pages/Rules";
import Donate from "./pages/Donate";
import Servers from "./pages/Servers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss";
import Profile from "./pages/Profile";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:postId",
        element: <Post />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/rules",
        element: <Rules />,
      },
      {
        path: "/servers",
        element: <Servers />,
      },
      {
        path: "/donate",
        element: <Donate />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
