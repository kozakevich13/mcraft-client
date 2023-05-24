import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import env from "react-dotenv";

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
        <button type="submit">Login</button>
        <p>this is error</p>
        <span>
          Don't you have an account?<Link to={"/login"}>Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
