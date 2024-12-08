import React from 'react'

const page = () => {
  return (
    <div>
    <header className="front-header main-header">
      <div className="container-front">
        {/* menu section */}
        <div className="row">
          <nav className="my-navbar d-flex align-items-center justify-content-sm-between">
            <a className="navbar-brand clickable" data-href="https://in.sduko.com">
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
    <div className="modal fade" id="search-modal" tabIndex={-1} role="dialog" aria-labelledby="search-modal" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <i className="fa fa-search" aria-hidden="true" />
              Search
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <form className="my-search-form_" action="https://in.sduko.com/" method="post" autoComplete="off" id="my-search-form">
            <div className="modal-body pt-4 p-4">                            
              <div className="form-row">
                <div className="col-sm-6 col-12 form-group">
                  <select className="browser-default custom-select-s form-control-s" id="category" />
                </div>
                <div className="col-sm-6 col-12 form-group">
                  <input className="form-control-s home-search" placeholder="Search Here..." id="search_key" name="escort" type="text" />
                </div>
                <div className="col-sm-4 col-12 form-group">
                  <select onchange="getvalstate(this);" name="state" className="browser-default custom-select-s form-control-s" id="find_states_data" />
                </div>
                <div className="col-sm-4 col-12 form-group">
                  <select onchange="getvalcity(this);" name="state" className="browser-default custom-select-s form-control-s" id="find_city_data" />
                </div>
                <div className="col-sm-4 col-12 form-group">
                  <select onchange="getvaldistrict(this);" name="city" className="browser-default custom-select-s form-control-s" id="find_distict_elements" />
                </div>
              </div>                        
              <div id="tags-filter" className="tags-filter">
                <p className="text-primary pb-4 pt-4 fw-500"><span className="icon-equalizer-svgrepo-com mr-2" />Filters</p>
                {/**/}
                <div id="accordion_ethnicity" className="accordion border-bottom">
                  <a data-toggle="collapse" href="#collapse_ethnicity" aria-expanded="false" className="text-dark collapsed">
                    <h6>
                      <span>
                        <span className="icon-world mr-2" />
                        Ethnicity
                      </span>
                      <span className="counter-badge-box ml-2 count" />
                      <span className="icon-chevron-right pull-right" />
                    </h6>
                  </a>
                  <div aria-labelledby="heading90" data-parent="#accordion_ethnicity" id="collapse_ethnicity" role="tabpanel" className="collapse">
                    <div className="accordion-body">
                      <div className="hiddenCB">
                        <input type="checkbox" name="tag_ethnicity" id="African" defaultValue="African" />
                        <label htmlFor="African">African</label>
                        <input type="checkbox" name="tag_ethnicity" id="Indian" defaultValue="Indian" />
                        <label htmlFor="Indian">Indian</label>
                        <input type="checkbox" name="tag_ethnicity" id="Asian" defaultValue="Asian" />
                        <label htmlFor="Asian">Asian</label>
                        <input type="checkbox" name="tag_ethnicity" id="Arab" defaultValue="Arab" />
                        <label htmlFor="Arab">Arab</label>
                        <input type="checkbox" name="tag_ethnicity" id="Latin" defaultValue="Latin" />
                        <label htmlFor="Latin">Latin</label>
                        <input type="checkbox" name="tag_ethnicity" id="Caucasian" defaultValue="Caucasian" />
                        <label htmlFor="Caucasian">Caucasian</label>
                      </div>
                    </div>
                    {/**/}
                  </div>
                </div>
                <div id="accordion_nationality" className="accordion border-bottom">
                  <a data-toggle="collapse" href="#collapse_nationality" aria-expanded="false" className="text-dark">
                    <h6>
                      <span>
                        <span className="icon-map f-sicon mr-2" />
                        Nationality
                      </span>
                      <span className="counter-badge-box ml-2 count" />
                      <span className="icon-chevron-right pull-right" />
                    </h6>
                  </a>
                  <div aria-labelledby="heading90" data-parent="#accordion_nationality" id="collapse_nationality" role="tabpanel" className="collapse">
                    <div className="accordion-body">
                      <div className="hiddenCB">
                        <ul className="nationality_tags_gride mb-0">
                          <li>
                            <input type="checkbox" name="search_tag__nationality" id="albanian" defaultValue="albanian" />
                            <label htmlFor="albanian">
                              <img src="static/images/flag-img/al.svg" />Albanian
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" name="search_tag__nationality" id="american" defaultValue="american" />
                            <label htmlFor="american">
                              <img src="static/images/flag-img/us.svg" />American
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" name="search_tag__nationality" id="arabic" defaultValue="arabic" />
                            <label htmlFor="arabic">
                              <img src="static/images/flag-img/sa.svg" />Arabic
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" name="search_tag__nationality" id="argentinian" defaultValue="argentinian" />
                            <label htmlFor="argentinian">
                              <img src="static/images/flag-img/ar.svg" />Argentinian
                            </label>
                          </li>
                        </ul>
                        <ul className="nationality_tags_gride" id="show-more-content">
                        </ul>
                        <a className="view-more" href="javascript:void(0);" id="show-more"> <span className="icon-plus mr-2" /> Show all </a>
                        <a className="view-more" href="javascript:void(0);" id="show-less"> <span className="icon-minus mr-2" /> Show less </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="accordion_breast" className="accordion border-bottom">
                  <a data-toggle="collapse" href="#collapse_breast" aria-expanded="false" className="text-dark">
                    <h6>
                      <span>
                        <span className="icon-breast-icon mr-2" />
                        Breast
                      </span>
                      <span className="counter-badge-box ml-2 count" />
                      <span className="icon-chevron-right pull-right" />
                    </h6>
                  </a>
                  <div aria-labelledby="heading90" data-parent="#accordion_breast" id="collapse_breast" role="tabpanel" className="collapse">
                    <div className="accordion-body">
                      <div className="hiddenCB">
                        <input type="checkbox" name="tag_breast" id="naturalboobs" defaultValue="naturalboobs" />
                        <label htmlFor="naturalboobs">Natural Boobs</label>
                        <input type="checkbox" name="tag_breast" id="busty" defaultValue="busty" />
                        <label htmlFor="busty">Busty</label>
                      </div>
                    </div>
                    {/**/}
                  </div>
                </div>
                <div id="accordion_hair" className="accordion border-bottom">
                  <a data-toggle="collapse" href="#collapse_hair" aria-expanded="false" className="text-dark">
                    <h6>
                      <span>
                        <span className="icon-business-woman-with-tie-icon mr-2" />
                        Hair
                      </span>
                      <span className="counter-badge-box ml-2 count" />
                      <span className="icon-chevron-right pull-right" />
                    </h6>
                  </a>
                  <div aria-labelledby="heading90" data-parent="#accordion_hair" id="collapse_hair" role="tabpanel" className="collapse">
                    <div className="accordion-body">
                      <div className="hiddenCB">
                        <input type="checkbox" name="tag_hair" id="blondhair" defaultValue="blondhair" />
                        <label htmlFor="blondhair">Blond Hair</label>
                        <input type="checkbox" name="tag_hair" id="brownhair" defaultValue="brownhair" />
                        <label htmlFor="brownhair">Brown Hair</label>
                        <input type="checkbox" name="tag_hair" id="blackhair" defaultValue="blackhair" />
                        <label htmlFor="blackhair">Black Hair</label>
                        <input type="checkbox" name="tag_hair" id="redhair" defaultValue="redhair" />
                        <label htmlFor="redhair">Red Hair</label>
                      </div>
                    </div>
                    {/**/}
                  </div>
                </div>
                <div id="accordion_body_type" className="accordion border-bottom">
                  <a data-toggle="collapse" href="#collapse_body_type" aria-expanded="false" className="text-dark">
                    <h6>
                      <span>
                        <span className="icon-female-hips-and-waist-svgrepo-com mr-2" />
                        Body type
                      </span>
                      <span className="counter-badge-box ml-2 count" />
                      <span className="icon-chevron-right pull-right" />
                    </h6>
                  </a>
                  <div aria-labelledby="heading90" data-parent="#accordion_body_type" id="collapse_body_type" role="tabpanel" className="collapse">
                    <div className="accordion-body">
                      <div className="hiddenCB singlecheck">
                        <input type="checkbox" name="tag_body_type" id="slim" defaultValue="slim" />
                        <label htmlFor="slim">Slim</label>
                        <input type="checkbox" name="tag_body_type" id="curvy" defaultValue="curvy" />
                        <label htmlFor="curvy">Curvy</label>
                      </div>
                    </div>
                    {/**/}
                  </div>
                </div>
                <div id="accordion_services" className="accordion border-bottom">
                  <a data-toggle="collapse" href="#collapse_services" aria-expanded="false" className="text-dark">
                    <h6>
                      <span>
                        <span className="icon-heart-eyes-face-svgrepo-com mr-2" />
                        Services
                      </span>
                      <span className="counter-badge-box ml-2 count" />
                      <span className="icon-chevron-right pull-right" />
                    </h6>
                  </a>
                  <div aria-labelledby="heading90" data-parent="#accordion_services" id="collapse_services" role="tabpanel" className="collapse">
                    <div className="accordion-body">
                      <div className="hiddenCB">
                        <input type="checkbox" name="tag_services" id="oral" defaultValue="oral" />
                        <label htmlFor="oral">Oral</label>
                        <input type="checkbox" name="tag_services" id="anal" defaultValue="anal" />
                        <label htmlFor="anal">Anal</label>
                        <input type="checkbox" name="tag_services" id="bdsm" defaultValue="bdsm" />
                        <label htmlFor="bdsm">BDSM</label>
                        <input type="checkbox" name="tag_services" id="girlfriendexperience" defaultValue="girlfriendexperience" />
                        <label htmlFor="girlfriendexperience">Girlfriend experience</label>
                        <input type="checkbox" name="tag_services" id="pornactresses" defaultValue="pornactresses" />
                        <label htmlFor="pornactresses">Porn actresses</label>
                        <input type="checkbox" name="tag_services" id="bodyejaculation" defaultValue="bodyejaculation" />
                        <label htmlFor="bodyejaculation">Body ejaculation</label>
                        <input type="checkbox" name="tag_services" id="eroticmassage" defaultValue="eroticmassage" />
                        <label htmlFor="eroticmassage">Erotic massage</label>
                        <input type="checkbox" name="tag_services" id="tantricmassage" defaultValue="tantricmassage" />
                        <label htmlFor="tantricmassage">Tantric massage</label>
                        <input type="checkbox" name="tag_services" id="fetish" defaultValue="fetish" />
                        <label htmlFor="fetish">Fetish</label>
                        <input type="checkbox" name="tag_services" id="frenchkiss" defaultValue="frenchkiss" />
                        <label htmlFor="frenchkiss">French kiss</label>
                        <input type="checkbox" name="tag_services" id="roleplay" defaultValue="roleplay" />
                        <label htmlFor="roleplay">Role play</label>
                        <input type="checkbox" name="tag_services" id="threesome" defaultValue="threesome" />
                        <label htmlFor="threesome">Threesome</label>
                        <input type="checkbox" name="tag_services" id="sexting" defaultValue="sexting" />
                        <label htmlFor="sexting">Sexting</label>
                        <input type="checkbox" name="tag_services" id="videocall" defaultValue="videocall" />
                        <label htmlFor="videocall">Videocall</label>
                      </div>
                    </div>
                    {/**/}
                  </div>
                </div>
                <div id="accordion_attention_to" className="accordion border-bottom">
                  <a data-toggle="collapse" href="#collapse_attention_to" aria-expanded="false" className="text-dark">
                    <h6>
                      <span>
                        <span className="icon-user mr-2" />
                        Attention to
                      </span>
                      <span className="counter-badge-box ml-2 count" />
                      <span className="icon-chevron-right pull-right" />
                    </h6>
                  </a>
                  <div aria-labelledby="heading90" data-parent="#accordion_attention_to" id="collapse_attention_to" role="tabpanel" className="collapse">
                    <div className="accordion-body">
                      <div className="hiddenCB">
                        <input type="checkbox" name="tag_attentionto" id="man" defaultValue="man" />
                        <label htmlFor="man">Men</label>
                        <input type="checkbox" name="tag_attentionto" id="women" defaultValue="women" />
                        <label htmlFor="women">Women</label>
                        <input type="checkbox" name="tag_attentionto" id="couples" defaultValue="couples" />
                        <label htmlFor="couples">Couples</label>
                        <input type="checkbox" name="tag_attentionto" id="disabled" defaultValue="disabled" />
                        <label htmlFor="disabled">Disabled</label>
                      </div>
                    </div>
                    {/**/}
                  </div>
                </div>
                <div id="accordion_place_of_service" className="accordion border-bottom">
                  <a data-toggle="collapse" href="#collapse_place_of_service" aria-expanded="false" className="text-dark collapsed">
                    <h6>
                      <span>
                        <span className="icon-coffee-location-icon mr-2" />
                        Place of service
                      </span>
                      <span className="counter-badge-box ml-2 count" />
                      <span className="icon-chevron-right pull-right" />
                    </h6>
                  </a>
                  <div aria-labelledby="heading90" data-parent="#accordion_place_of_service" id="collapse_place_of_service" role="tabpanel" className="collapse">
                    <div className="accordion-body">
                      <div className="hiddenCB">
                        <input type="checkbox" name="tag_place_of_service" id="athome" defaultValue="athome" />
                        <label htmlFor="athome">At home</label>
                        <input type="checkbox" name="tag_place_of_service" id="eventsandparties" defaultValue="eventsandparties" />
                        <label htmlFor="eventsandparties">Events and parties</label>
                        <input type="checkbox" name="tag_place_of_service" id="hotelmotel" defaultValue="hotelmotel" />
                        <label htmlFor="hotelmotel">Hotel / Motel</label>
                        <input type="checkbox" name="tag_place_of_service" id="clubs" defaultValue="clubs" />
                        <label htmlFor="clubs">Clubs</label>
                        <input type="checkbox" name="tag_place_of_service" id="outcall" defaultValue="outcall" />
                        <label htmlFor="outcall">Outcall</label>
                      </div>
                    </div>
                    {/**/}
                  </div>
                </div>
              </div>                            
            </div>
            <div className="modal-footer filters position-sticky fixed-bottom bg-white">
              <button id="resetBtn" type="button" className="btn btn-link sduko-text col">
                Delete all
              </button>
              <button type="submit" className="blue-g-btn form-search-btn col">
                <span className="icon-search" />
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="popup-wrapper" id="cookiesstyle">              
      <div className="popup-content">
        <div className="popup-header">
          <div className="sduko-logo-sign">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={82} height={72} viewBox="0 0 82 72">
              <defs>
                <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2={1} gradientUnits="objectBoundingBox">
                  <stop offset={0} stopColor="#0098df" />
                  <stop offset={1} stopColor="#0c4ea4" />
                </linearGradient>
                <linearGradient id="linear-gradient-2" x1="0.251" x2="0.5" y2={1} gradientUnits="objectBoundingBox">
                  <stop offset={0} stopColor="#ff007a" />
                  <stop offset={1} stopColor="#72003f" />
                </linearGradient>
                <linearGradient id="linear-gradient-3" x1="0.5" x2="0.5" y2={1} gradientUnits="objectBoundingBox">
                  <stop offset={0} stopColor="#bc005e" />
                  <stop offset={1} stopColor="#ae0058" />
                </linearGradient>
                <linearGradient id="linear-gradient-4" x1="0.5" x2="0.5" y2={1} gradientUnits="objectBoundingBox">
                  <stop offset={0} stopColor="#066cbc" />
                  <stop offset={1} stopColor="#0865b6" />
                </linearGradient>
              </defs>
              <g id="Group_59" data-name="Group 59" transform="translate(992 224)">
                <g id="Ellipse_40" data-name="Ellipse 40" transform="translate(-992 -224)" fill="none" stroke="#cecece" strokeWidth={1}>
                  <circle cx={36} cy={36} r={36} stroke="none" />
                  <circle cx={36} cy={36} r="35.5" fill="none" />
                </g>
                <g id="Group_1" data-name="Group 1" transform="translate(-977.269 -202.708)">
                  <path id="Path_13" data-name="Path 13" d="M8554.679,17399.916c-.526,1.4.205,1.207.965,1.592.054.893-.426.771-.08,1.881.257.818-.089.119.017.865.053.371.252.4.472.752l.035.348.02.209c1.769-2.979-.309-.314.044.037a2.4,2.4,0,0,0,.6.338c-.128-.129-.4-.055-.686-.084-.795,4.094,4.653,1.762,6.881,1.453a11.53,11.53,0,0,1-2.422,3.707c-2.823,3.168-6.914,4.379-10.942,2.465-.793-.379-1.333-.852-1.955-1.135l-.131-.121-.14-.115-.128-.131-.136-.117-.123-.137-.127-.121-.128-.139-.116-.127-.094-.062.094.063.116.127.128.139.127.121.123.137.136.117.128.131.14.115.131.121c.631.98,4.011,3.508,5.912,3.686,4.616.432,10.165-3.1,13.476-5.7,1.395-1.1,6.832-7.348,7.134-7.764,4.19-9.668-3.433-20.016-14.973-16.088a8.979,8.979,0,0,0-3.624,2.148c-1.029,1.211-1.448,2.855,1.139,3-.237,1.133-1.824,3.207-1.2,4.275.461.787.966.754.293,2.031C8555.425,17398.633,8555.017,17399.2,8554.679,17399.916Z" transform="translate(-8531.851 -17385.596)" fillRule="evenodd" fill="url(#linear-gradient)" />
                  <g id="Group_36" data-name="Group 36" transform="translate(0 0)">
                    <path id="Path_12" data-name="Path 12" d="M4553.726,17421.943c.167-.408-.272.205-.326.275-1.832,2.213-3.8,4.34-5.785,6.426a11.923,11.923,0,0,1-.9.861l-.062.049c-3.395,2.635-8.845,6.078-13.3,5.707-2.016-.166-4.775-2.168-6.075-3.672a10.618,10.618,0,0,1-1.425-1.559c-1.417-2.252-3.1-4.787-4.276-7.139-.05-.1-.553-1.01-.322-1.064a34.15,34.15,0,0,1,3.418,2.863c1.393,1.18,5.136,4.277,5.474.545l.02-.211-.049-.461c-.057.207.034.143-.122.078a4.7,4.7,0,0,1-.184-2.057c.074-.791.329-1.127,1.07-1.266l.114.217.087.416c-.376-.029-.5.209-.411.652.482-.236.479-.484.322-1.068l-.116-.217c-.387-.859,2.1-.432,1.094-2.273-.463-.854-1.44-1.541-1.051-2.783,1.183-3.787-.333-3.512.407-4.852a1.529,1.529,0,0,0-.049-1.668,10.37,10.37,0,0,0-13.416-3.756c-7.371,3.717-7.419,10.482-4.816,17.4,2.243,5.828,11.381,14.254,17.239,16.266,3.477,1.152,5.778.211,8.81-1.516a38.412,38.412,0,0,0,8.507-6.809,33.269,33.269,0,0,0,6.047-9.229Z" transform="translate(-4511.482 -17404.893)" fillRule="evenodd" fill="url(#linear-gradient-2)" />
                    <path id="Path_14" data-name="Path 14" d="M9387.525,21855.447c-.009-.16-.046-.5.1-.6s.409-.105.5-.229a.653.653,0,0,0,.037-.426c-.042-.34-.148-.3-.342-.516-.067-.082,0-.082.071-.1s.177-.057.21-.109a1.779,1.779,0,0,0,.068-.295c.06-.2.149-.189.28-.3.055-.049.029-.086.017-.158a1.4,1.4,0,0,0-.1-.354c-.023-.047-.054-.1-.079-.148-1.4-.676-1.669.064-1.4,1.268-.068.73-.853,1.893.517,2.059C9387.557,21855.529,9387.468,21855.607,9387.525,21855.447Z" transform="translate(-9368.891 -21835.713)" fillRule="evenodd" fill="url(#linear-gradient-3)" />
                  </g>
                  <path id="Path_15" data-name="Path 15" d="M11178.7,22398.924l-.021,1.588,1.069-.033.172-2.172-.677-.1Z" transform="translate(-11154.477 -22380.004)" fillRule="evenodd" fill="url(#linear-gradient-4)" />
                </g>
                <circle id="Ellipse_41" data-name="Ellipse 41" cx={11} cy={11} r={11} transform="translate(-932 -218)" fill="#ed0073" />
                <text id="_18_" data-name="18+" transform="translate(-930 -203)" fill="#fff" fontSize={11} fontFamily="OpenSans-Bold, Open Sans" fontWeight={700}><tspan x={0} y={0}>18+</tspan></text>
              </g>
            </svg>              
          </div>
          <h5 className="popup-title">Please review the following disclaimer before proceeding</h5>
        </div>
        <div className="popup-body">
          <div className="popup-body-inner text-center">		
            <p className="r3 px-md-5 px-sm-1">  I am <strong>over 18 years old</strong> and consent to viewing explicit content meant for an adult audience. </p>
            <hr className="my-1" />
            <p>I acknowledge that I have read and accepted the<br /> <a data-href="/terms-and-conditions/">Terms and Conditions</a></p>
          </div>
        </div>
        <div className="popup-footer">
          <a href="index.html" className="popup-btn">Decline</a>
          <button id="adultCookie" type="button" className="popup-btn popup-btn-primary" data-dismiss="modal">Accept</button>
        </div>
      </div>
    </div>
    <div className="banner-sec home-page-banner">
      <div className="container-front">
        {/* search form 5 collumn */}
        <div className="row">
          <div className="col-md-12 mb-5">
            <div className="form-group mb-0">
              <button type="submit" className="banner-search-btn" data-toggle="modal" data-target="#search-modal">
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
    <section className="home-section">
      <div className="container-front">
        <div className="row">
          <div className="col-lg-12">
            <a data-href="https://in.sduko.com/u/insert-post/" className="mt-4 pink-g-btn post-add mobilePostBtn d-none align-items-center justify-content-center clickable">
              <i className="fa fa-plus mr-2" aria-hidden="true" /> 
              Post Your Ad
            </a>
          </div>                
        </div>
        <div className="text-center w-100 homepage-f">
          <h1 className="h1-home">Post Your Adult Advertisement or Search Hot Advertisers</h1>
          <div className="plr-140">
            <h2 className="h2-home">Locate the Best Escorts in Your City</h2>
            <p className="txt_seo">Sduko is home to the top-rated female escorts in India. You come to a number of fresh classified ads for the sexy babes who are also eager to engage with you sexually. Get ready to bang up hot escorts, transsexual, swinger meeting, gay escorts, and adult meeting in your city.This is an open platform where pleasure seekers and escorts come to find their interests. If you are not able to find your dream girls, create your profile and ask for the services you are looking for. This is a highly visited adult classified ad portal that helps you find out the babes you dream of. Post your classified ads for FREE if you don’t find a perfect profile.</p>
          </div>
        </div>
        <div className="row categorey-row ajax-data"> 
          <div className="cols3">
            <div className="card escorts">
              <div data-href="javascript:;" className="cursor-pointer relative">
                <a href="escorts/index.html" title="Escorts" className="cate-pic-thumb">
                  <img src="../admin.sduko.com/static/21/07/20/1626791170.jpg" alt="Escorts" className="card-img-top" />
                </a>
                <h4 className="card-title-home">
                  <a href="escorts/index.html">                                        
                    <span className="card-title">
                      <span className="icon-womenseekmen" />
                      Escorts
                    </span>
                  </a>
                </h4>
              </div>
              <div className="card-body home">
                <div className="card-text">
                  <p>Hot and independent escorts ads. Sexy girls ready with their escort services to make you feel satisfied sexually.Women seeking men for a great session with their erotic services.</p>
                </div>
                <ul className="list-unstyled">
                  <li>
                    <a href="escorts/bangalore/index.html"> 
                      Bangalore Escorts
                    </a>
                  </li>
                  <li>
                    <a href="escorts/delhi/index.html"> 
                      Delhi Escorts
                    </a>
                  </li>
                  <li>
                    <a href="escorts/mumbai/index.html"> 
                      Mumbai Escorts
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="cols3">
            <div className="card massage">
              <div data-href="javascript:;" className="cursor-pointer relative">
                <a href="massage/index.html" title="Massage" className="cate-pic-thumb">
                  <img src="../admin.sduko.com/static/21/07/20/1626791191.jpg" alt="Massage" className="card-img-top" />
                </a>
                <h4 className="card-title-home">
                  <a href="massage/index.html">                                        
                    <span className="card-title">
                      <span className="icon-womenseekmen" />
                      Massage
                    </span>
                  </a>
                </h4>
              </div>
              <div className="card-body home">
                <div className="card-text">
                  <p>Best sensual massage ads. Sensual services to let you feel relaxed and calm. Sexy girls give you hot massage and full body massage.</p>
                </div>
                <ul className="list-unstyled">
                  <li>
                    <a href="massage/bangalore/index.html"> 
                      Bangalore Massage
                    </a>
                  </li>
                  <li>
                    <a href="massage/delhi/index.html"> 
                      Delhi Massage
                    </a>
                  </li>
                  <li>
                    <a href="massage/mumbai/index.html"> 
                      Mumbai Massage
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="cols3">
            <div className="card male-escorts">
              <div data-href="javascript:;" className="cursor-pointer relative">
                <a href="male-escorts/index.html" title="Male Escorts" className="cate-pic-thumb">
                  <img src="../admin.sduko.com/static/21/07/20/1626791181.jpg" alt="Male Escorts" className="card-img-top" />
                </a>
                <h4 className="card-title-home">
                  <a href="male-escorts/index.html">                                        
                    <span className="card-title">
                      <span className="icon-womenseekmen" />
                      Male Escorts
                    </span>
                  </a>
                </h4>
              </div>
              <div className="card-body home">
                <div className="card-text">
                  <p>Male escorts, gay escorts, and gigolos. Dating with call boys and male escorts for erotic services. Enjoy your fantasies with male model escorts.</p>
                </div>
                <ul className="list-unstyled">
                  <li>
                    <a href="male-escorts/bangalore/index.html"> 
                      Bangalore Male Escorts
                    </a>
                  </li>
                  <li>
                    <a href="male-escorts/delhi/index.html"> 
                      Delhi Male Escorts
                    </a>
                  </li>
                  <li>
                    <a href="male-escorts/mumbai/index.html"> 
                      Mumbai Male Escorts
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="cols3">
            <div className="card transsexual">
              <div data-href="javascript:;" className="cursor-pointer relative">
                <a href="transsexual/index.html" title="Transsexual" className="cate-pic-thumb">
                  <img src="../admin.sduko.com/static/24/06/04/665f0cf118c58.jpg" alt="Transsexual" className="card-img-top" />
                  
                </a>
                <h4 className="card-title-home">
                  <a href="transsexual/index.html">                                        
                    <span className="card-title">
                      <span className="icon-womenseekmen" />
                      Transsexual
                    </span>
                  </a>
                </h4>
              </div>
              <div className="card-body home">
                <div className="card-text">
                  <p>Transsexual dating. Discover the new sexual services with the sexiest transsexual in India. Shemale, ladyboy and TS escorts</p>
                </div>
                <ul className="list-unstyled">
                  <li>
                    <a href="transsexual/bangalore/index.html"> 
                      Bangalore Transsexual
                    </a>
                  </li>
                  <li>
                    <a href="transsexual/delhi/index.html"> 
                      Delhi Transsexual
                    </a>
                  </li>
                  <li>
                    <a href="transsexual/mumbai/index.html"> 
                      Mumbai Transsexual
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="cols3">
            <div className="card adult-meetings">
              <div data-href="javascript:;" className="cursor-pointer relative">
                <a href="adult-meetings/index.html" title="Adult Meetings" className="cate-pic-thumb">
                  <img src="../admin.sduko.com/static/24/06/04/665f0d087bbc1.jpg" alt="Adult Meetings" className="card-img-top" />
                </a>
                <h4 className="card-title-home">
                  <a href="adult-meetings/index.html">                                        
                    <span className="card-title">
                      <span className="icon-womenseekmen" />
                      Adult Meetings
                    </span>
                  </a>
                </h4>
              </div>
              <div className="card-body home">
                <div className="card-text">
                  <p>Casual dating, find your true love or NSA. Chat with local singles, girls or boys for a meeting. Meet with them and find a dating partner</p>
                </div>
                <ul className="list-unstyled">
                  <li>
                    <a href="adult-meetings/bangalore/index.html"> 
                      Bangalore Adult Meetings
                    </a>
                  </li>
                  <li>
                    <a href="adult-meetings/delhi/index.html"> 
                      Delhi Adult Meetings
                    </a>
                  </li>
                  <li>
                    <a href="adult-meetings/mumbai/index.html"> 
                      Mumbai Adult Meetings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="w-100 acc mt-4">
          <div className="accordion-acrd w-100 acc__card">
            <div className="accordion acc__title">
              <div className="accordian-title escorts">
                <a className="acc-left-span" href="escorts/index.html"> 
                  <span className="icon-womenseekmen" />
                  Escorts
                </a>
              </div>
            </div>                        
            <div className="panel acc__panel">
              <a href="escorts/bangalore.html">
                Bangalore
              </a>
              <a href="escorts/delhi.html">
                Delhi
              </a>
              <a href="escorts/mumbai.html">
                Mumbai
              </a>
            </div>  
          </div>
          <div className="accordion-acrd w-100 acc__card">
            <div className="accordion acc__title">
              <div className="accordian-title massage">
                <a className="acc-left-span" href="massage/index.html"> 
                  <span className="icon-womenseekmen" />
                  Massage
                </a>
              </div>
            </div>                        
            <div className="panel acc__panel">
              <a href="massage/bangalore.html">
                Bangalore
              </a>
              <a href="massage/delhi.html">
                Delhi
              </a>
              <a href="massage/mumbai.html">
                Mumbai
              </a>
            </div>  
          </div>
          <div className="accordion-acrd w-100 acc__card">
            <div className="accordion acc__title">
              <div className="accordian-title male-escorts">
                <a className="acc-left-span" href="male-escorts/index.html"> 
                  <span className="icon-womenseekmen" />
                  Male Escorts
                </a>
              </div>
            </div>                        
            <div className="panel acc__panel">
              <a href="male-escorts/bangalore.html">
                Bangalore
              </a>
              <a href="male-escorts/delhi.html">
                Delhi
              </a>
              <a href="male-escorts/mumbai.html">
                Mumbai
              </a>
            </div>  
          </div>
          <div className="accordion-acrd w-100 acc__card">
            <div className="accordion acc__title">
              <div className="accordian-title transsexual">
                <a className="acc-left-span" href="transsexual/index.html"> 
                  <span className="icon-womenseekmen" />
                  Transsexual
                </a>
              </div>
            </div>                        
            <div className="panel acc__panel">
              <a href="transsexual/bangalore.html">
                Bangalore
              </a>
              <a href="transsexual/delhi.html">
                Delhi
              </a>
              <a href="transsexual/mumbai.html">
                Mumbai
              </a>
            </div>  
          </div>
          <div className="accordion-acrd w-100 acc__card">
            <div className="accordion acc__title">
              <div className="accordian-title adult-meetings">
                <a className="acc-left-span" href="adult-meetings/index.html"> 
                  <span className="icon-womenseekmen" />
                  Adult Meetings
                </a>
              </div>
            </div>                        
            <div className="panel acc__panel">
              <a href="adult-meetings/bangalore.html">
                Bangalore
              </a>
              <a href="adult-meetings/delhi.html">
                Delhi
              </a>
              <a href="adult-meetings/mumbai.html">
                Mumbai
              </a>
            </div>  
          </div>
        </div>
      </div>   
    </section>  
    <footer className="footer-section">
      <div className="footer-container">
        <div className="row">
          <div className="col w-100">
            <div className="footer-menu">
              <ul>
                <li><a data-href="https://in.sduko.com/terms-and-conditions" className="clickable">Terms and Conditions</a></li>
                <li><a data-href="https://in.sduko.com/privacy-policy" className="clickable">Privacy Policy</a></li>
                <li><a data-href="https://in.sduko.com/contacts-us" className="clickable">Contacts Us</a></li>
                <li><a data-href="https://in.sduko.com/u/manage-your-ads" className="clickable">Manage your ad</a></li>
                <li><a data-href="https://in.sduko.com/promote-your-ads" className="clickable">Promote your ads</a></li>				
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
    {/* Login Modal */}
    <div className="modal fade" id="signup" tabIndex={-1} role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true" data-backdrop="static">
      <div className="modal-dialog modal-dialog-centered modal-md" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title menugride-title">
              <span className="icon-favicon" />
              Get into Sduko!
            </h4>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body promomodal text-center">
            <h6><strong>Publish and Manage </strong>your ads</h6>
            <div className="action">
              <p className="small">
                Have an account yet?
              </p>
              <a className="btn btn-primary w-75 mb-4" href="u/login.html">
                <span className="login-icons mr-1" /> 
                Login                            
              </a>
              <p className="small">
                Don't have an account yet?
              </p>
              <a href="u/register.html" className="btn btn-outline-primary w-75">                                
                <span className="sign-up-icons mr-1" /> 
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Login Modal */}
    {/* Menu List Modal */}
    {/* Side Nav For Mobile */}    
    <div id="sideModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel2" className="modal right fade">
      <div role="document" className="modal-dialog modal-dialog-slideout">
        <div className="modal-content">
          <div className="modal-body">
            <button type="button" data-dismiss="modal" aria-label="Close" className="close">
              <i className="text-clipped menu-close-icon close-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={28} height={28} className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </i>
            </button>
            <nav className="main-nav menu navbar navbar-light navbar-expand-lg">
              <p className="px-0 item-mobile">Publish ad</p>
              <a data-href="/u/post-insert/" className="btn btn-secondary pink-g-btn btn-block pt-3 pb-3"> 
                <i className="fa fa-plus mr-2" aria-hidden="true" /> 
                Post your ad
              </a>
              <p className="mt-4 px-0 item-mobile">Services for you!</p>
              <ul className="list-group list-group-flush item-mobile">
                <li className="list-group-item">
                  <a href="u/loginc568.html">
                    <span className="icon-heart" />
                    Promote your ads
                  </a>
                </li>
                <li className="list-group-item">
                  <a target="_blank" href="#">
                    <span className="icon-discuss" />
                    Sduko Blog
                  </a>
                </li>
                <li className="list-group-item">
                  <a target="_blank" href="#">
                    <span className="icon-support_agent" />
                    Sduko Help
                  </a>
                </li>
              </ul>
              <p className="px-0 item-mobile">Follow us</p>
              <ul className="social-link">
                <li className="list-group-item">
                  <a target="_blank" title="Youtube" className="youtube-link" href="javascript:void(0);">
                    <span className="icon-youtube" />
                    Youtube
                  </a>
                </li>
                <li className="list-group-item">
                  <a target="_blank" title="Instagram" className="instagram-link" href="https://www.instagram.com/sduko_eng/">
                    <span className="icon-instagram-svgrepo-com" />
                    Instagram
                  </a>
                </li>
                <li className="list-group-item">
                  <a title="twitter" target="_blank" className="twitter-link" href="https://twitter.com/sduko_eng/">
                    <span className="icon-x" />
                    Twitter
                  </a>
                </li>
                <li className="list-group-item">
                  <a title="Facebook" target="_blank" className="facebook-link" href="https://www.facebook.com/SdukoEng/">
                    <span className="icon-facebook" />
                    Facebook
                  </a>
                </li>                            
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    {/* Side Nav for Mobile */}
  </div>
  
  )
}

export default page