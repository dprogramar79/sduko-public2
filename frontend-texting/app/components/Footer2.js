import React from 'react'
import Link from 'next/link';

const Footer2 = () => {
// const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Footer Menu */}
        <div className="row">
          <div className="col w-100">
            <div className="footer-menu">
              <ul>
                <li>
                  <Link hrefLang=''
                    href="/"
                    className="clickable"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="clickable"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/u/contact-us"
                    className="clickable"
                  >
                    Contacts Us
                  </Link>
                </li>
                <li>
                  <a
                    href="/"
                    className="clickable"
                  >
                    Manage your ad
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="clickable"
                  >
                    Promote your ads
                  </a>
                </li>
                <li className="last">
                  {/* <a className="llnkft" href={frontendUrl}/> */}
                    <i aria-hidden="true" className="icon-globe"></i> Sduko
                    Network
                  {/* </a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="row copy-right-section">
          <div className="col w-100 text-center">
            <ul className="social-link">
              <li className="list-group-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Youtube"
                  className="youtube-link"
                  href="/"
                >
                  <span className="icon-youtube"></span>
                </a>
              </li>
              <li className="list-group-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="instagram-link"
                  href="https://www.instagram.com/"
                >
                  <span className="icon-instagram-svgrepo-com"></span>
                </a>
              </li>
              <li className="list-group-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                  className="twitter-link"
                  href="www.twitter.com"
                >
                  <span className="icon-x"></span>
                </a>
              </li>
              <li className="list-group-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                  className="facebook-link"
                  href="https://www.facebook.com/"
                >
                  <span className="icon-facebook"></span>
                </a>
              </li>
              <li className="list-group-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Blog"
                  className="blog-s-link"
                  href="/"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Scroll to Top */}
        <div className="row">
          <div className="col-lg-12 d-flex align-items-center justify-content-center">
            <div className="rta mt-4"></div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <a
        href="#"
        id="scrollToTop"
        className="progress"
        data-tooltip="Back To Top"
      >
        <div className="arrow-top"></div>
        <div className="arrow-top-line"></div>
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMinYMin meet"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </a>
    </footer>
  )
}

export default Footer2