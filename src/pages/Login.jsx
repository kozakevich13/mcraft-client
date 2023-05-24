import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const login = (event) => {
    event.preventDefault();
    axios
      .post(process.env.REACT_APP_BASE_URL_LOGIN, {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.message) {
          setLoginStatus(res.data.message);
        } else {
          setLoginStatus(res.data[0].email);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="auth">
      <h1>Login</h1>

      <form>
        <input
          required
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <input
          required
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
        <button onClick={login}>Login</button>
        <p>{loginStatus}</p>
        <span>
          Don't you have an account?<Link to={"/register"}>Register</Link>
        </span>
      </form>
      <Link className="home-link" to={"/"}>
        Home
      </Link>
    </div>
  );
};

export default Login;
