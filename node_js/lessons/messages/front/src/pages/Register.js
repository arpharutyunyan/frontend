import React, { useCallback, useState } from 'react';
import image from '../assets/images/signup-image.jpg'
import { Link, useNavigate } from "react-router-dom";
import { registerRequest } from "../store/actions/users";
import { useDispatch } from "react-redux";
import Input from "../components/form/Input";
import { toast } from "react-toastify";

function Messages(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const onChange = useCallback((path) => (ev) => {
    setFormData({ ...formData, [path]: ev.target.value })
    setErrors({ ...errors, [path]: '' });
  }, [formData, errors]);

  const handleSubmit = useCallback(async (ev) => {
    ev.preventDefault();
    const { payload } = await dispatch(registerRequest(formData));
    if (payload.status === 'ok') {
      navigate('/login');
    } else if (payload.errors) {
      setErrors(payload.errors);
    } else {
      toast.error(payload.message || 'Something went wrong')
    }
  }, [formData]);
  return (
    <div className="login-wrapper">
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form onSubmit={handleSubmit} className="register-form" id="register-form">
                <Input
                  value={formData.firstName}
                  onChange={onChange('firstName')}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="First Name"
                  error={errors.firstName}
                />
                <Input
                  value={formData.lastName}
                  onChange={onChange('lastName')}
                  type="text" name="name" id="name"
                  placeholder="Last Name"
                  error={errors.lastName}
                />
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
                  <label className="label-agree-term">
                    <input type="checkbox" name="agree-term"/>
                    {' I agree allstatements in '}
                    <a href="https://colorlib.com/etc/regform/colorlib-regform-7/#" className="term-service">Terms of
                      service</a>
                  </label>
                </div>
                <div className="form-group form-button">
                  <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure><img src={image} alt="sing up image"/></figure>
              <Link to="/login" className="signup-image-link">I am
                already member</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Messages;
