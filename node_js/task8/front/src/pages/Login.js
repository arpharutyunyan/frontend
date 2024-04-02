import React, {useCallback, useState} from 'react';
import image from '../assets/images/signin-image.jpg'
import {Link, useNavigate} from "react-router-dom";
import Input from "../components/form/Input";
import {loginRequest} from "../store/actions/users";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";

function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onChange = useCallback((path) => (ev) => {
    setFormData({ ...formData, [path]: ev.target.value })
    setErrors({ ...errors, [path]: '' });
  }, [formData, errors]);

  const handleSubmit = useCallback(async (ev) => {
    ev.preventDefault();
    const { payload } = await dispatch(loginRequest(formData));
    if (payload.status === 'ok') {
      navigate('/');
    } else if (payload.errors) {
      setErrors(payload.errors);
    } else {
      toast.error(payload.message || 'Something went wrong')
    }
  }, [formData]);

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
              <form onSubmit={handleSubmit} className="register-form" id="login-form">
                <Input value={formData.email}
                       onChange={onChange('email')}
                       type="email" name="email" id="email" placeholder="Your Email"
                       error={errors.email}
                />
                <Input value={formData.password}
                       onChange={onChange('password')}
                       type="password" name="pass" id="pass" placeholder="Password"
                       error={errors.password}
                />
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
