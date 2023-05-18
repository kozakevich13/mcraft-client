import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="login" />
        <input required type="password" placeholder="password" />
        <button>Login</button>
        <p>this is error</p>
        <span>
          Don't you have an account?<Link to={"/register"}>Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
