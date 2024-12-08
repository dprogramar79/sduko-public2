'use client'
import { useEffect } from 'react';

const SearchSection = () => {
  useEffect(() => {
    // Dynamically load Bootstrap's JavaScript for modal functionality
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return (
    <div className="search-section">
      <div className="container-front">
        <div className="row">
          <div className="col-lg-12 bg-white mt-3">
            <div className="topstikysearch">
              <a href="#" data-bs-toggle="modal" data-bs-target="#search-modal">
                <div className="d-flex justify-content-between align-items-center py-2 px-3">
                  <span className="textgeo">
                    <span className="icon-location me-2"></span> Delhi - Delhi
                  </span>
                  <span className="fa fa-search"></span>
                </div>
              </a>
              <div className="form-row tag-row-inline px-1 pt-2 pb-0">
                <div className="tag_list searchfilter">
                  <ul id="tagsList"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
