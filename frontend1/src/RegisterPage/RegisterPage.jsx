import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions';
import './RegisterPage.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const registering = useSelector(state => state.registration.registering);

  const [user, setUser] = useState({ username: '', password: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (user.username && user.password) {
      dispatch(userActions.register(user));
    }
  };

  return (
    <div className="register-page">
      <div className="register-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Capture the moment</h1>
          <p>Join the world's best photography community</p>
        </div>
      </div>

      <div className="register-form-container">
        <div className="register-card">
          <div className="card-header">
            <h2>Create an account</h2>
            <p className="subtitle">Start sharing your vision today</p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className={`form-group ${submitted && !user.username ? 'has-error' : ''}`}>
              <label htmlFor="username">
                <i className="fas fa-camera"></i> Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                placeholder="Your username"
                value={user.username}
                onChange={handleChange}
              />
              {submitted && !user.username && (
                <span className="help-block">Username is required</span>
              )}
            </div>

            <div className={`form-group ${submitted && !user.password ? 'has-error' : ''}`}>
              <label htmlFor="password">
                <i className="fas fa-lock"></i> Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="••••••••"
                value={user.password}
                onChange={handleChange}
              />
              {submitted && !user.password && (
                <span className="help-block">Password is required</span>
              )}
            </div>

            <div className="form-group form-actions">
              <button
                type="submit"
                className="btn-register"
                disabled={registering}
              >
                {registering ? (
                  <>
                    <span className="spinner"></span> Creating...
                  </>
                ) : (
                  'Sign up'
                )}
              </button>
              <Link to="/login" className="btn-link">
                Already have an account? Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { RegisterPage };