'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { useEffect } from 'react';

const SignupModal = () => {
  useEffect(() => {
    // Ensure Bootstrap's JavaScript is loaded
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return (
    <div
      className="modal fade"
      id="signup"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      data-backdrop="static"
    >
      <div className="modal-dialog modal-dialog-centered modal-md" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title menugride-title">
              <span className="icon-favicon"></span>
              Get into Sduko!
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body promomodal text-center">
            <h6>
              <strong>Publish and Manage</strong> your ads
            </h6>
            <div className="action">
              <p className="small">Have an account yet?</p>
              {/* <a className="btn btn-primary w-75 mb-4" href="u/login.html"> */}
              <Link href="/u/login" className="btn btn-primary w-75 mb-4">Login

                <span className="login-icons me-1"></span>
                Login
              {/* </a> */}
              </Link>

              <p className="small">Don't have an account yet?</p>
              <Link  href="u/register" className="btn btn-outline-primary w-75">
                <span className="sign-up-icons me-1"></span>
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
