import React from 'react';
import image from '../assets/images/signin-image.jpg'
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <div className="login-wrapper">
      <section className="sign-in">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={image} alt="sing up image"/>
              </figure>
              <Link to="/register" className="signup-image-link">
                Create an account</Link>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Sign up</h2>
              <form method="POST" className="register-form" id="login-form">
                <div className="form-group">
                  <input type="text" name="your_name" id="your_name" placeholder="Your Name"/>
                </div>
                <div className="form-group">
                  <input type="password" name="your_pass" id="your_pass" placeholder="Password"/>
                </div>
                <div className="form-group">
                  <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember
                    me</label>
                </div>
                <div className="form-group form-button">
                  <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                </div>
              </form>
              <div className="social-login">
                <span className="social-label">Or login with</span>
                <ul className="socials">
                  <li><a href="https://colorlib.com/etc/regform/colorlib-regform-7/#"><i
                    className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                  <li><a href="https://colorlib.com/etc/regform/colorlib-regform-7/#"><i
                    className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                  <li><a href="https://colorlib.com/etc/regform/colorlib-regform-7/#"><i
                    className="display-flex-center zmdi zmdi-google"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
