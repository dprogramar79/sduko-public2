'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Link from 'next/link';
const SignUpPanel = () => {
  useEffect(() => {
    // Ensure Bootstrap's JavaScript is loaded
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);
const FRONTEND_URL='http://localhost:3000'
const BACKEND_URL='http://localhost:8000'

  return (
    <div className="container container-front logingpd mt-5 mb-5">
      <div className="login-panel relative">
        <div className="login-top-panle">
          <div className="login-right-panle">
            <div className="c-center">
              <h1 className="pink-color text-center">Sign up</h1>
              <div className="tipsaccount-box mt-4 mb-4">
                <div id="carouseltipslider" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item">
                      <span className="icon-bullhorn"></span> <br />
                      <strong>Publish and Manage</strong> your ads
                    </div>
                    <div className="carousel-item">
                      <span className="icon-bar-chart"></span> <br />
                      Discover all our <strong>news</strong>
                    </div>
                    <div className="carousel-item active">
                      <span className="icon-thumbs-o-up"></span> <br />
                      Activate our exclusive <strong>promotions</strong>
                    </div>
                  </div>
                </div>
              </div>
              <form
                className="my-search-form"
                action={BACKEND_URL +"/u/register"}
                method="post"
                autoComplete="off"
              >
                <input type="hidden" name="_token" value="aPbh82qdzEJPGFlNnTh2cHjn8brBhGPUhnP4DuyH" />
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control form-control-s m-0"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group position-relative">
                  <label htmlFor="password-field">Password</label>
                  <div className="position-relative">
                    <input
                      id="password-field"
                      name="password"
                      type="password"
                      className="form-control form-control-s password-input-toggle m-0"
                      placeholder="Password"
                    />
                    <i
                      toggle="#password-field"
                      className="fa fa-eye-slash toggle-password togglePassword"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <div className="form-group position-relative">
                  <div className="progress">
                    <div className="progress-bar" id="progress-bar"></div>
                  </div>
                  <div id="message">
                    <h3>Password must contain the following:</h3>
                    <p id="letter" className="invalid">
                      A <strong>lowercase</strong> letter
                    </p>
                    <p id="capital" className="invalid">
                      A <strong>capital (uppercase)</strong> letter
                    </p>
                    <p id="number" className="invalid">
                      A <strong>number</strong>
                    </p>
                    <p id="length" className="invalid">
                      Minimum <strong>8 characters</strong>
                    </p>
                  </div>
                </div>
                <div className="form-group">
                  <div className="checkbox-type-item">
                    <div className="onoff-collomn">
                      <div id="on-off-switch5" className="on-off-switch">
                        <input
                          name="terms"
                          className="switched-item"
                          type="checkbox"
                          id="checkboxterms"
                        />
                        <div className="on-off-wrap switched-off">
                          <span className="on-off-icon">
                            <span className="radiosp"></span>
                          </span>
                          <span className="on-off-text off-text">Yes</span>
                          <span className="on-off-text on-text">No</span>
                        </div>
                      </div>
                    </div>
                    <label htmlFor="checkboxterms" className="terms-text-box">
                      <p>
                        <strong>Terms, Conditions and Privacy Policy</strong>
                        <br />
                        I acknowledge and agree that I have read and understood the{' '}
                        <a href="javascript:void(0);" target="_blank" rel="noopener">
                          Terms and Conditions of use
                        </a>{' '}
                        and{' '}
                        <a href="javascript:void(0);" target="_blank" rel="noopener">
                          Privacy Policy
                        </a>
                        . I authorize any processing of my personal information to provide this
                        web service.
                      </p>
                    </label>
                  </div>
                </div>
                <div
                  className="h-captcha captcha-row"
                  data-sitekey="eb48d552-eca1-4a74-998b-f8e0e1b111f5"
                ></div>
                <button type="submit" className="blue-g-btn form-search-btn">
                  Sign up
                </button>
              </form>
              <div className="login-info text-center">
                <p>
                  Already have an account?{' '}
                  <Link
                    className="clickable"
                    href="/u/login"
                  >
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPanel;
