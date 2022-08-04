import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUser from "hooks/useUser";
import Spinner from "components/Spinner/Spinner";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import imgLogin from "assets/img/gallery/login.jpg";
import "./Login.css";

const Login = () => {
  const [userForm, setUserForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { login, isLogged, isLogginLoading, hasLoginError, message } =
    useUser();

  useEffect(() => {
    if (isLogged) navigate("/cart");
  }, [isLogged, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ userForm });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserForm({ ...userForm, [name]: value });
  };

  return (
    <section className="form__container">
      <form className="form" onSubmit={handleSubmit}>
        <div
          className="form-wrapper"
          style={{ backgroundImage: `url(${imgLogin})` }}
        >
          {isLogginLoading && (
            <div className="form-loading">
              <Spinner />
            </div>
          )}
          {hasLoginError && (
            <p className="form-error">
              <ErrorOutlineIcon /> {message}
            </p>
          )}
          <div className="form-content">
            <div className="form-group">
              <EmailOutlinedIcon className="login-icons" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={userForm.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <HttpsOutlinedIcon className="login-icons" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={userForm.password}
                onChange={handleChange}
              />
              <a href="/" className="form-text">
                Forgot password?
              </a>
            </div>
            <button className="btn" type="submit">
              Login
            </button>
            <p className="form-text">
              Don't have account?{" "}
              <Link to="/signup">
                <span> Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
