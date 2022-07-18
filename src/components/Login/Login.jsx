import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import useUser from "hooks/useUser";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import imgLogin from "assets/img/gallery/login.jpg";
import "./Login.css";

const Login = () => {
  const [userForm, setUserForm] = useState({ email: "", password: "" });
  const [, setLocation] = useLocation();
  const { login, isLogged } = useUser();

  useEffect(() => {
    if (isLogged) setLocation("/cart");
  }, [isLogged, setLocation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(value);
    setUserForm({ ...userForm, [name]: value });
  };

  return (
    <section className="form__container">
      <form className="form" onSubmit={handleSubmit}>
        <div
          className="form-wrapper"
          style={{ backgroundImage: `url(${imgLogin})` }}
        >
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
                value={userForm.email}
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
              <a href="./">
                <span> Sign Up</span>
              </a>
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
