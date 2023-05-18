import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="login" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button>Register</button>
        <p>this is error</p>
        <span>
          Do you have an account?<Link to={"/login"}>Auth</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
