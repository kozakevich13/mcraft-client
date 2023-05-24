import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(process.env.REACT_APP_BASE_URL, {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div className="auth">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          name="name"
        />
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
        <button type="submit">Register</button>
        <p>this is error</p>
        <span>
          Don't you have an account?<Link to={"/login"}>Login</Link>
        </span>
      </form>

      <Link className="home-link" to={"/"}>
        Home
      </Link>
    </div>
  );
};

export default Register;
