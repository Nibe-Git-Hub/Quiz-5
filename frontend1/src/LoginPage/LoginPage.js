import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions';
import '../RegisterPage/RegisterPage.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const loggingIn = useSelector(state => state.authentication.loggingIn);


  useEffect(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const { username, password } = credentials;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  };

  const { username, password } = credentials;

  return (
    <div className="register-page"> 
      <div className="register-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome back</h1>
          <p>Continue your photography journey</p>
        </div>
      </div>

      <div className="register-form-container">
        <div className="register-card">
          <div className="card-header">
            <h2>Log in</h2>
            <p className="subtitle">Access your gallery</p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className={`form-group ${submitted && !username ? 'has-error' : ''}`}>
              <label htmlFor="username">
                <i className="fas fa-camera"></i> Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                placeholder="Your username"
                value={username}
                onChange={handleChange}
              />
              {submitted && !username && (
                <span className="help-block">Username is required</span>
              )}
            </div>

            <div className={`form-group ${submitted && !password ? 'has-error' : ''}`}>
              <label htmlFor="password">
                <i className="fas fa-lock"></i> Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="••••••••"
                value={password}
                onChange={handleChange}
              />
              {submitted && !password && (
                <span className="help-block">Password is required</span>
              )}
            </div>

            <div className="form-group form-actions">
              <button
                type="submit"
                className="btn-register"
                disabled={loggingIn}
              >
                {loggingIn ? (
                  <>
                    <span className="spinner"></span> Logging in...
                  </>
                ) : (
                  'Sign in'
                )}
              </button>
              <Link to="/register" className="btn-link">
                Don't have an account? Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { LoginPage };