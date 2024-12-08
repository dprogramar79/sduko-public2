import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS bundle
import { Container, Row, Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
   

    <header className="front-header main-header">
      <Container className="container-front">
        {/* Menu section */}
        <Row>
          <Nav className="my-navbar d-flex align-items-center justify-content-sm-between">
            <a className="navbar-brand clickable" href="https://in.sduko.com">
              <div className="logo"></div>
              <span>India</span>
            </a>

            <div className="right-side-nav d-flex align-items-center">
              <div className="after-login d-flex align-items-center">
                <ul className="navbar-nav d-flex align-items-center mr-2" id="main-nave">
                  <li className="nav-item">
                    <a href="#" data-toggle="modal" data-target="#search-modal" className="search-mobile">
                      <span className="fa fa-search mr-2"></span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" data-toggle="modal" data-target="#signup">
                      <span className="login-icons mr-1"></span>
                    </a>
                  </li>
                </ul>
                <div className="collapse front-colapse after-login-tabs">
                  <a href="u/loginc568.html" className="pink-g-btn post-add d-flex align-items-center justify-content-center">
                    <i className="fa fa-plus mr-2" aria-hidden="true"></i> Post Your Ad
                  </a>
                </div>
              </div>

              <a href="javascript:void(0);" className="fixed-hanger-btn" data-toggle="modal" data-target="#sideModal">
                <span className="spce">
                  <span className="sp-liine1"></span>
                  <span className="sp-liine2"></span>
                  <span className="sp-liine3"></span>
                </span>
              </a>
            </div>
          </Nav>
        </Row>
      </Container>
    </header>
  

  )
}

export default Navbar