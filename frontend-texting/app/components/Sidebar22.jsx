
// 'use client'
// import { useEffect } from 'react';
// import Link from 'next/link';
import React from "react";
import './sidebar.css'
import Link from 'next/link';
export default function Sidebar() {
    // useEffect(() => {
    //     // Ensure Bootstrap JS is loaded
    //     require('bootstrap/dist/js/bootstrap.bundle.min.js');
    //   }, []);
    return (
        <div
            id="sideModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myModalLabel2"
            className="modal right fade"
        >
            <div role="document" className="modal-dialog modal-dialog-slideout">
                <div className="modal-content">
                    <div className="modal-body">
                        <button
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            className="close"
                        >
                            <i className="text-clipped menu-close-icon close-menu-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    width="28"
                                    height="28"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </i>
                        </button>
                        <nav className="main-nav menu navbar navbar-light navbar-expand-lg">
                            <p className="px-0 item-mobile">Publish ad</p>
                            <a
                                data-href="/u/post-insert/"
                                className="btn btn-secondary pink-g-btn btn-block pt-3 pb-3"
                            >
                                <i className="fa fa-plus mr-2" aria-hidden="true"></i>
                                Post your ad
                            </a>
                            <p className="mt-4 px-0 item-mobile">Services for you!</p>
                            <ul className="list-group list-group-flush item-mobile">
                                <li className="list-group-item">
                                    <a href="/ad-post/promotion-plan">
                                        <span className="icon-heart"></span>
                                        Promote your ads
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <Link target="_blank" href="/">
                                        <span className="icon-discuss"></span>
                                        Sduko Blog
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link target="_blank" href="/">
                                        <span className="icon-support_agent"></span>
                                        Sduko Help
                                    </Link>
                                </li>
                            </ul>
                            <p className="px-0 item-mobile">Follow us</p>
                            <ul className="social-link">
                                <li className="list-group-item">
                                    <Link
                                        target="_blank"
                                        title="Youtube"
                                        className="youtube-link"
                                        href="hhtps://m.youtube.com"
                                    >
                                        <span className="icon-youtube"></span>
                                        Youtube
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <a
                                        target="_blank"
                                        title="Instagram"
                                        className="instagram-link"
                                        href="https://www.instagram.com/sduko_eng/"
                                    >
                                        <span className="icon-instagram-svgrepo-com"></span>
                                        Instagram
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a
                                        title="twitter"
                                        target="_blank"
                                        className="twitter-link"
                                        href="https://twitter.com/sduko_eng/"
                                    >
                                        <span className="icon-x"></span>
                                        Twitter
                                    </a>
                                </li>
                                <li className="list-group-item">
                                    <a
                                        title="Facebook"
                                        target="_blank"
                                        className="facebook-link"
                                        href="https://www.facebook.com/SdukoEng/"
                                    >
                                        <span className="icon-facebook"></span>
                                        Facebook
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
