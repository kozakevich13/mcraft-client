import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss";
import Profile from "./pages/Profile";
import { useState } from "react";
import UserContext from "./context/UserContext";

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
        path: "/post:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/profile",
        element: <Profile />,
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
  const [user, setUser] = useState(null);
  return (
    <div className="app">
      <div className="container">
        <UserContext.Provider value={{ user, setUser }}>
          <RouterProvider router={router} />
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;
