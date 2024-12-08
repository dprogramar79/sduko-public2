'use client'
import { useEffect, useState } from 'react';
import React from 'react'
import Sidebar from './Sidebar22';
import SearchModal from './SearchModal';
import '../static/css/head-foot816e.css'
import '../static/css/home-layout816e.css'
import PopupWrapper from './PopupWrapper';
import Link from 'next/link';
const Navbar = () => {
  useEffect(() => {
    // Ensure Bootstrap JS is loaded
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  return (
    <>
      <header className="front-header main-header">
        <div className="container-front">
          {/* menu section */}
          <div className="row">
            <nav className="my-navbar d-flex align-items-center justify-content-sm-between">
              <a className="navbar-brand clickable" data-href="/">
                <div className="logo" />
                <span>India</span>
              </a>
              <div className="right-side-nav d-flex align-items-center">
                <div className="after-login d-flex align-items-center">
                  {/* <ul className="navbar-nav d-flex align-items-center mr-2" id="main-nave">
                    <li className="nav-item">
                      <a href="#" data-toggle="modal" data-target="#search-modal" className="search-mobile">
                        <i className="fa fa-search mr-2"> </i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" data-toggle="modal" data-target="#signup">
                        <span className="login-icons mr-1"> </span>
                      </a>
                    </li>
                  </ul> */}
                  <ul className="navbar-nav d-flex align-items-center mr-2" id="main-nave">
                    <li className="nav-item">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        // data-bs-target="#searchModal"
                        data-bs-target="#search-modal"
                        className="search-mobile"
                      >
                        <span className="fa fa-search mr-2"> </span>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        // data-bs-target="#signupModal"
                        data-bs-target="#signup"
                      >
                        <span className="login-icons mr-1"> </span>
                      </a>
                    </li>
                  </ul>
                  <div className="collapse front-colapse after-login-tabs">
                    <Link href="/ad-post/insert-post" className="pink-g-btn post-add d-flex align-items-center justify-content-center">
                      <i className="fa fa-plus mr-2" aria-hidden="true" /> Post Your Ad
                    </Link>
                  </div>
                </div>
                {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#sideModal"
      >
        Open Sidebar22
      </button> */}
                <a className="fixed-hanger-btn" data-bs-toggle="modal"
                  data-bs-target="#sideModal">
                  <span className="spce">
                    <span className="sp-liine1" />
                    <span className="sp-liine2" />
                    <span className="sp-liine3" />
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* <Sidebar/> */}
      <SearchModal />
      {/* <PopupWrapper/> */}
    </>
  )
}

export default Navbar