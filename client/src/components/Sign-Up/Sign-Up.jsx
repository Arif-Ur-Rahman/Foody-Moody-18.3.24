import React from 'react';
import './Sign-Up.css';
import ReCAPTCHA from 'react-google-recaptcha';

function SignUp() {
  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
  };

  return (
    <div className="login-container">
      <div className="background-design"></div>
      <div className="login-form">
        <h2>Create Account</h2>
        <h5>Alredy Have An Account?</h5>
        <h5>Click To <span>Login</span></h5>
        <form action="/register" method="post">
          <div className="form-group">
            <input type="text" name="username" id="username" placeholder="UserName" required />
          </div>
          <div className="form-group">
            <input type="text" name="Name" id="name" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" id="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="password" name="password" id="password" placeholder="Password" required />
          </div>
          <ReCAPTCHA
            sitekey="your-site-key-here"
            onChange={handleCaptchaChange}
          />
          <button type="submit" className="login-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
