import { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import imgLogin from "assets/img/gallery/login.jpg";
import { Box } from "@mui/material";
import "./Login.css";

const Login = () => {
  const [userForm, setUserForm] = useState({ email: "", password: "" });

  console.log(userForm.email);
  const handleSubmit = (e) => {
    e.preventDefault();
    //logear
  };

  const handleChange = ({target}) => {
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
            <button className="btn">Login</button>
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
