import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
const HeroSection = () => {
  return (
   <div style={{width:'100vw',height:'fit-content'}}>
  <div className="banner-sec home-page-banner">
  <div className="container-front">
    {/* search form 5 collumn */}
    <div className="row">
      <div className="col-md-12 mb-5">
        <div className="form-group mb-0">
          <button type="submit" className="banner-search-btn" data-bs-toggle="modal" data-bs-target="#search-modal">
            <span>
              Search by City, Category...
            </span>
            <i className="fa fa-search" aria-hidden="true" />
            

          </button>
        </div>
      </div>
      <div className="col-md-12 claim text-right">find love</div>
    </div>
  </div>
</div>
</div>
  )
}

export default HeroSection