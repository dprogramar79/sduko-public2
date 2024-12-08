import React from 'react'

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="row">
                    <div className="col w-100">
                        <div className="footer-menu">
                            <ul>
                                <li><a data-href="https://in.sduko.com/terms-and-conditions" className="clickable">Terms and
                                    Conditions</a></li>
                                <li><a data-href="https://in.sduko.com/privacy-policy" className="clickable">Privacy Policy</a>
                                </li>
                                <li><a data-href="https://in.sduko.com/contacts-us" className="clickable">Contacts Us</a></li>
                                <li><a data-href="https://in.sduko.com/u/manage-your-ads" className="clickable">Manage your
                                    ad</a></li>
                                <li><a data-href="https://in.sduko.com/promote-your-ads" className="clickable">Promote your
                                    ads</a></li>
                                <li className="last"><a className="llnkft" href="https://www.sduko.com/">
                                    <i aria-hidden="true" className="icon-globe" /> Sduko Network</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row copy-right-section">
                    <div className="col w-100 text-center">
                        <ul className="social-link">
                            <li className="list-group-item">
                                <a target="_blank" title="Youtube" className="youtube-link" href="javascript:void(0);">
                                    <span className="icon-youtube" />
                                </a>
                            </li>
                            <li className="list-group-item">
                                <a target="_blank" title="Instagram" className="instagram-link" href="https://www.instagram.com/sduko_eng/">
                                    <span className="icon-instagram-svgrepo-com" />
                                </a>
                            </li>
                            <li className="list-group-item">
                                <a title="twitter" target="_blank" className="twitter-link" href="https://twitter.com/sduko_eng/">
                                    <span className="icon-x" />
                                </a>
                            </li>
                            <li className="list-group-item">
                                <a title="Facebook" target="_blank" className="facebook-link" href="https://www.facebook.com/SdukoEng/">
                                    <span className="icon-facebook" />
                                </a>
                            </li>
                            <li className="list-group-item">
                                <a target="_blank" title="Blog" className="blog-s-link" href="javascript:void(0);">Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 d-flex align-items-center justify-content-center">
                        <div className="rta mt-4" />
                    </div>
                </div>
            </div>
            <a href="#" id="scrollToTop" className="progress" data-tooltip="Back To Top">
                <div className="arrow-top" />
                <div className="arrow-top-line" />
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </a>
        </footer>

    )
}

export default Footer