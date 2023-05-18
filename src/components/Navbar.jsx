import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
          <Link className="link" to={""}>
            <h5>Форум</h5>
          </Link>
          <Link className="link" to={""}>
            <h5>Правила</h5>
          </Link>
          <Link className="link" to={""}>
            <h5>Донат</h5>
          </Link>
          <Link className="link" to={""}>
            <h5>Сервера</h5>
          </Link>
          <Link className="link" to={""}>
            <h5>Гайди</h5>
          </Link>
          <Link className="link" to={""}>
            <h5>Відео</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
