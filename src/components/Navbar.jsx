import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          {/* <Link className="link" to="/?cat=art">
            <h6>Forum</h6>
          </Link> */}
          <Link className="link" to="/rules">
            <h6>Rules</h6>
          </Link>
          <Link className="link" to="/donate">
            <h6>Donate</h6>
          </Link>
          <Link className="link" to="/servers">
            <h6>Servers</h6>
          </Link>
          {/* <Link className="link" to="/?cat=design">
            <h6>Videos</h6>
          </Link> */}
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <>
              <Link className="link" onClick={logout}>
                Logout
              </Link>
              <Link className="link" to="/profile">
                Profile
              </Link>
            </>
          ) : (
            <Link className="link write" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
