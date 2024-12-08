'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Link from 'next/link';
const LoginPanel = () => {
  useEffect(() => {
    // Ensure Bootstrap's JavaScript is loaded
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return (
    <div className="container container-front logingpd mt-5 mb-5">
      <div className="login-panel relative">
        <div className="login-top-panle">
          <div className="login-right-panle">
            <div className="c-center">
              <h1 className="pink-color text-center">Login</h1>
              <div className="tipsaccount-box mt-4 mb-4">
                <div id="carouseltipslider" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item">
                      <span className="icon-bullhorn"></span> <br />
                      <strong>Publish and Manage </strong>your ads
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
                action="htttp:localhost:3000/u/login"
                method="post"
              >
                <input type="hidden" name="_token" value="aPbh82qdzEJPGFlNnTh2cHjn8brBhGPUhnP4DuyH" />
                <input type="hidden" name="redirect_to" value="" />
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control form-control-s"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group mb-0 position-relative">
                  <label htmlFor="password">Password</label>
                  <div className="position-relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control form-control-s"
                      placeholder="Password"
                    />
                    <i
                      toggle="#password"
                      className="fa fa-eye-slash toggle-password togglePassword"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <div
                  className="h-captcha captcha-row"
                  data-sitekey="eb48d552-eca1-4a74-998b-f8e0e1b111f5"
                ></div>
                <button type="submit" className="blue-g-btn form-search-btn">
                  Login
                </button>
              </form>
              <div className="login-info text-center">
                <p>
                  <Link href="/u/password-recover/" className="forgot-password">
                    Forgot your password?
                  </Link>
                </p>
                <p>
                  Don't have an account?{' '}
                  <Link
                    className="clickable"
                    href="/u/register"
                  >
                    Sign up
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

export default LoginPanel;
