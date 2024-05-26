import React from "react";
import "./Sign-Up.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
function SignUp() {
  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
  };

  return (
    <div className="login-container">
      <div className="background-design">
        <div className="login-form">
          <h2>Create Account</h2>
          <form action="/register" method="post">
            <div className="form-group">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="UserName"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="confirm_password"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="contact"
                id="contact"
                placeholder="Contact"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="file"
                name="photo"
                id="photo"
                accept="image/*"
                required
              />
            </div>
            
            <ReCAPTCHA
              sitekey="6LeZAKApAAAAADIDKMBS_b0nhKqsNWLQB04fgP9a"
              onChange={handleCaptchaChange}
            />
            <button type="submit" className="login-btn">
              Sign Up
            </button>
          </form>
          <h5>Already Have An Account?</h5>
          <h5>
            Click To{" "}
            <span >
              <Link to="/Login" className="login-link-color">
                Login
              </Link>
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
