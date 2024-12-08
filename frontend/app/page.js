import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fontawesome.js';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';

export default function Home() {
  const FRONTEND_URL = 'https://localhost:3000/'
  return (
    <div  >
       <header className="front-header main-header">
    <div className="container-front">
      {/* menu section */}
      <div className="row">
        <nav className="my-navbar d-flex align-items-center justify-content-sm-between">
          <a className="navbar-brand clickable" data-href={FRONTEND_URL}>
            <div className="logo" />
            <span>India</span> 
          </a>
          <div className="right-side-nav d-flex align-items-center">
            <div className="after-login d-flex align-items-center">
              <ul className="navbar-nav d-flex align-items-center mr-2" id="main-nave">
                <li className="nav-item"> 
                  <a href="#" data-toggle="modal" data-target="#search-modal" className="search-mobile">                               
                    <span className="fa fa-search mr-2"> </span>
                  </a>
                </li>
                <li className="nav-item"> 
                  <a href="#" data-toggle="modal" data-target="#signup">                               
                    <span className="login-icons mr-1"> </span>
                  </a>
                </li>                     
              </ul>
              <div className="collapse front-colapse after-login-tabs">
                <a href="u/loginc568.html" className="pink-g-btn post-add d-flex align-items-center justify-content-center">
                  <i className="fa fa-plus mr-2" aria-hidden="true" />	Post Your Ad 
                </a>
              </div>
            </div>
            <a href="javascript:void(0);" className="fixed-hanger-btn" data-toggle="modal" data-target="#sideModal">
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
    </div>
  );
}
