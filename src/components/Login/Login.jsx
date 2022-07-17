import { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import imgLogin from "assets/img/gallery/login.jpg";
import { Box } from "@mui/material";
import "./Login.css";

const Login = () => {
  const [userForm, setUserForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    //logear
  };

  return (
    <section className="form__container">
      <form className="form" onSubmit={handleSubmit}>
        <div
          className="form-wrapper" style={{ backgroundImage: `url(${imgLogin})` }}
          
        >

          <div className="form-content">
            <div className="form-group">
              <EmailOutlinedIcon className="login-icons" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={userForm.email}
              />
            </div>
            <div className="form-group">
              <HttpsOutlinedIcon className="login-icons"/>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={userForm.email}
              />
              <p className="form-text">Forgot Password?</p>
            </div>
            <button>LOGIN</button>
            <p className="form-text">
              Don't have account? <span>Sign Up</span>
            </p>
            </div>
          </div>
      </form>
    </section>
  );
};

export default Login;
