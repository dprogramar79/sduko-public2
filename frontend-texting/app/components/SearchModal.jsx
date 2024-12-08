import React from 'react'

const SearchModal = () => {
  return (
    <div className="modal fade" id="search-modal" tabIndex={-1} role="dialog" aria-labelledby="search-modal" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <i className="fa fa-search" aria-hidden="true" />
              Search
            </h5>
            {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button> */}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
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
                  <select   name="state" className="browser-default custom-select-s form-control-s" id="find_states_data" />
                </div>
                <div className="col-sm-4 col-12 form-group">
                  <select   name="state" className="browser-default custom-select-s form-control-s" id="find_city_data" />
                </div>
                <div className="col-sm-4 col-12 form-group">
                  <select   name="city" className="browser-default custom-select-s form-control-s" id="find_distict_elements" />
                </div>
              </div>
              <div id="tags-filter" className="tags-filter">
                <p className="text-primary pb-4 pt-4 fw-500"><span className="icon-equalizer-svgrepo-com mr-2" />Filters</p>
                {/**/}
                <div id="accordion_ethnicity" className="accordion border-bottom">
                  <a data-bs-toggle="collapse" href="#collapse_ethnicity" aria-expanded="false" className="text-dark collapsed">
                    <h6>
                      <span>
                        <span className="icon-world mr-2" />
                        Ethnicity
                      </span>
                      <span className="counter-badge-box ml-2 count" />
                      <span className="icon-chevron-right pull-right" />
                    </h6>
                  </a>
                  <div aria-labelledby="heading90" data-bs-parent="#accordion_ethnicity" id="collapse_ethnicity" role="tabpanel" className="collapse">
                    <div className="accordion-body">
                      <div className="hiddenCB">
                        <input type="checkbox" name="tag_ethnicity" id="African" value="African" />
                        <label htmlFor="African">African</label>
                        <input type="checkbox" name="tag_ethnicity" id="Indian" value="Indian" />
                        <label htmlFor="Indian">Indian</label>
                        <input type="checkbox" name="tag_ethnicity" id="Asian" value="Asian" />
                        <label htmlFor="Asian">Asian</label>
                        <input type="checkbox" name="tag_ethnicity" id="Arab" value="Arab" />
                        <label htmlFor="Arab">Arab</label>
                        <input type="checkbox" name="tag_ethnicity" id="Latin" value="Latin" />
                        <label htmlFor="Latin">Latin</label>
                        <input type="checkbox" name="tag_ethnicity" id="Caucasian" value="Caucasian" />
                        <label htmlFor="Caucasian">Caucasian</label>
                      </div>
                    </div>
                    {/**/}
                  </div>
                </div>
                <div id="accordion_nationality" className="accordion border-bottom">
                  <a data-bs-toggle="collapse" href="#collapse_nationality" aria-expanded="false" className="text-dark">
                    <h6>
                      <span>
                        <span className="icon-map f-sicon mr-2" />
                        Nationality
                      </span>
                      <span className="counter-badge-box ml-2 count" />
                      <span className="icon-chevron-right pull-right" />
                    </h6>
                  </a>
                  <div aria-labelledby="heading90" data-bs-parent="#accordion_nationality" id="collapse_nationality" role="tabpanel" className="collapse">
                    <div className="accordion-body">
                      <div className="hiddenCB">
                        <ul className="nationality_tags_gride mb-0">
                          <li>
                            <input type="checkbox" name="search_tag__nationality" id="albanian" value="albanian" />
                            <label htmlFor="albanian">
                              <img src="static/images/flag-img/al.svg" />Albanian
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" name="search_tag__nationality" id="american" value="american" />
                            <label htmlFor="american">
                              <img src="static/images/flag-img/us.svg" />American
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" name="search_tag__nationality" id="arabic" value="arabic" />
                            <label htmlFor="arabic">
                              <img src="static/images/flag-img/sa.svg" />Arabic
                            </label>
                          </li>
                          <li>
                            <input type="checkbox" name="search_tag__nationality" id="argentinian" value="argentinian" />
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
                  <a data-bs-toggle="collapse" href="#collapse_breast" aria-expanded="false" className="text-dark">
                    <h6>
                      <span>
                        <span className="icon-breast-icon mr-2" />
                        Breast
                      </span>
                      <span className="counter-badge-box ml-2 count" />
                      <span className="icon-chevron-right pull-right" />
                    </h6>
                  </a>
                  <div aria-labelledby="heading90" data-bs-parent="#accordion_breast" id="collapse_breast" role="tabpanel" className="collapse">
                    <div className="accordion-body">
                      <div className="hiddenCB">
                        <input type="checkbox" name="tag_breast" id="naturalboobs" value="naturalboobs" />
                        <label htmlFor="naturalboobs">Natural Boobs</label>
                        <input type="checkbox" name="tag_breast" id="busty" value="busty" />
                        <label htmlFor="busty">Busty</label>
                      </div>
                    </div>
                    {/**/}
                  </div>
                </div>
                {/* <div id="accordion_hair" className="accordion border-bottom">
                  <a data-bs-toggle="collapse" href="#collapse_hair" aria-expanded="false" className="text-dark">
                    <h6>
                      <span>
                        <span className="icon-business-woman-with-tie-icon mr-2" />
                        Hair
                      </span>
                      <span className="counter-badge-box ml-2 count" />
                      <span className="icon-chevron-right pull-right" />
                    </h6>
                  </a>
                  <div aria-labelledby="heading90" data-bs-parent="#accordion_hair" id="collapse_hair" role="tabpanel" className="collapse">
                    <div className="accordion-body">
                      <div className="hiddenCB">
                        <input type="checkbox" name="tag_hair" id="blondhair" value="blondhair" />
                        <label htmlFor="blondhair">Blond Hair</label>
                        <input type="checkbox" name="tag_hair" id="brownhair" value="brownhair" />
                        <label htmlFor="brownhair">Brown Hair</label>
                        <input type="checkbox" name="tag_hair" id="blackhair" value="blackhair" />
                        <label htmlFor="blackhair">Black Hair</label>
                        <input type="checkbox" name="tag_hair" id="redhair" value="redhair" />
                        <label htmlFor="redhair">Red Hair</label>
                      </div>
                    </div>
                    
                  </div>
                </div> */}
                <div id="accordion_hair" className="accordion border-bottom">
                  <a
                    data-bs-toggle="collapse"
                    href="#collapse_hair"
                    aria-expanded="false"
                    className="text-dark"
                  >
                    <h6>
                      <span>
                        <span className="icon-business-woman-with-tie-icon mr-2"></span>
                        Hair
                      </span>
                      <span className="counter-badge-box ml-2 count"></span>
                      <span className="icon-chevron-right pull-right"></span>
                    </h6>
                  </a>
                  <div
                    aria-labelledby="heading90"
                    data-bs-parent="#accordion_hair"
                    id="collapse_hair"
                    role="tabpanel"
                    className="collapse"
                  >
                    <div className="accordion-body">
                      <div className="hiddenCB">
                        <div>
                          <input
                            type="checkbox"
                            name="tag_hair"
                            id="blondhair"
                            value="blondhair"
                          />
                          <label htmlFor="blondhair">Blond Hair</label>
                        </div>

                        <div>
                          <input
                            type="checkbox"
                            name="tag_hair"
                            id="brownhair"
                            value="brownhair"
                          />
                          <label htmlFor="brownhair">Brown Hair</label>
                        </div>

                        <div>
                          <input
                            type="checkbox"
                            name="tag_hair"
                            id="blackhair"
                            value="blackhair"
                          />
                          <label htmlFor="blackhair">Black Hair</label>
                        </div>

                        <div>
                          <input
                            type="checkbox"
                            name="tag_hair"
                            id="redhair"
                            value="redhair"
                          />
                          <label htmlFor="redhair">Red Hair</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="accordion_body_type" className="accordion border-bottom">
                  <a data-bs-toggle="collapse" href="#collapse_body_type" aria-expanded="false" className="text-dark">
                    <h6>
                      <span>
                        <span className="icon-female-hips-and-waist-svgrepo-com mr-2" />
                        Body type
                      </span>
                      <span className="counter-badge-box ml-2 count" />
                      <span className="icon-chevron-right pull-right" />
                    </h6>
                  </a>
                  <div aria-labelledby="heading90" data-bs-parent="#accordion_body_type" id="collapse_body_type" role="tabpanel" className="collapse">
                    <div className="accordion-body">
                      <div className="hiddenCB singlecheck">
                        <input type="checkbox" name="tag_body_type" id="slim" value="slim" />
                        <label htmlFor="slim">Slim</label>
                        <input type="checkbox" name="tag_body_type" id="curvy" value="curvy" />
                        <label htmlFor="curvy">Curvy</label>
                      </div>
                    </div>
                    {/**/}
                  </div>
                </div>
                <div id="accordion_services" className="accordion border-bottom">
                  <a data-bs-toggle="collapse" href="#collapse_services" aria-expanded="false" className="text-dark">
                    <h6>
                      <span>
                        <span className="icon-heart-eyes-face-svgrepo-com mr-2" />
                        Services
                      </span>
                      <span className="counter-badge-box ml-2 count" />
                      <span className="icon-chevron-right pull-right" />
                    </h6>
                  </a>
                  <div aria-labelledby="heading90" data-bs-parent="#accordion_services" id="collapse_services" role="tabpanel" className="collapse">
                    <div className="accordion-body">
                      <div className="hiddenCB">
                        <input type="checkbox" name="tag_services" id="oral" value="oral" />
                        <label htmlFor="oral">Oral</label>
                        <input type="checkbox" name="tag_services" id="anal" value="anal" />
                        <label htmlFor="anal">Anal</label>
                        <input type="checkbox" name="tag_services" id="bdsm" value="bdsm" />
                        <label htmlFor="bdsm">BDSM</label>
                        <input type="checkbox" name="tag_services" id="girlfriendexperience" value="girlfriendexperience" />
                        <label htmlFor="girlfriendexperience">Girlfriend experience</label>
                        <input type="checkbox" name="tag_services" id="pornactresses" value="pornactresses" />
                        <label htmlFor="pornactresses">Porn actresses</label>
                        <input type="checkbox" name="tag_services" id="bodyejaculation" value="bodyejaculation" />
                        <label htmlFor="bodyejaculation">Body ejaculation</label>
                        <input type="checkbox" name="tag_services" id="eroticmassage" value="eroticmassage" />
                        <label htmlFor="eroticmassage">Erotic massage</label>
                        <input type="checkbox" name="tag_services" id="tantricmassage" value="tantricmassage" />
                        <label htmlFor="tantricmassage">Tantric massage</label>
                        <input type="checkbox" name="tag_services" id="fetish" value="fetish" />
                        <label htmlFor="fetish">Fetish</label>
                        <input type="checkbox" name="tag_services" id="frenchkiss" value="frenchkiss" />
                        <label htmlFor="frenchkiss">French kiss</label>
                        <input type="checkbox" name="tag_services" id="roleplay" value="roleplay" />
                        <label htmlFor="roleplay">Role play</label>
                        <input type="checkbox" name="tag_services" id="threesome" value="threesome" />
                        <label htmlFor="threesome">Threesome</label>
                        <input type="checkbox" name="tag_services" id="sexting" value="sexting" />
                        <label htmlFor="sexting">Sexting</label>
                        <input type="checkbox" name="tag_services" id="videocall" value="videocall" />
                        <label htmlFor="videocall">Videocall</label>
                      </div>
                    </div>
                    {/**/}
                  </div>
                </div>
                <div id="accordion_attention_to" className="accordion border-bottom">
                  <a data-bs-toggle="collapse" href="#collapse_attention_to" aria-expanded="false" className="text-dark">
                    <h6>
                      <span>
                        <span className="icon-user mr-2" />
                        Attention to
                      </span>
                      <span className="counter-badge-box ml-2 count" />
                      <span className="icon-chevron-right pull-right" />
                    </h6>
                  </a>
                  <div aria-labelledby="heading90" data-bs-parent="#accordion_attention_to" id="collapse_attention_to" role="tabpanel" className="collapse">
                    <div className="accordion-body">
                      <div className="hiddenCB">
                        <input type="checkbox" name="tag_attentionto" id="man" value="man" />
                        <label htmlFor="man">Men</label>
                        <input type="checkbox" name="tag_attentionto" id="women" value="women" />
                        <label htmlFor="women">Women</label>
                        <input type="checkbox" name="tag_attentionto" id="couples" value="couples" />
                        <label htmlFor="couples">Couples</label>
                        <input type="checkbox" name="tag_attentionto" id="disabled" value="disabled" />
                        <label htmlFor="disabled">Disabled</label>
                      </div>
                    </div>
                    {/**/}
                  </div>
                </div>
                <div id="accordion_place_of_service" className="accordion border-bottom">
                  <a data-bs-toggle="collapse" href="#collapse_place_of_service" aria-expanded="false" className="text-dark collapsed">
                    <h6>
                      <span>
                        <span className="icon-coffee-location-icon mr-2" />
                        Place of service
                      </span>
                      <span className="counter-badge-box ml-2 count" />
                      <span className="icon-chevron-right pull-right" />
                    </h6>
                  </a>
                  <div aria-labelledby="heading90" data-bs-parent="#accordion_place_of_service" id="collapse_place_of_service" role="tabpanel" className="collapse">
                    <div className="accordion-body">
                      <div className="hiddenCB">
                        <input type="checkbox" name="tag_place_of_service" id="athome" value="athome" />
                        <label htmlFor="athome">At home</label>
                        <input type="checkbox" name="tag_place_of_service" id="eventsandparties" value="eventsandparties" />
                        <label htmlFor="eventsandparties">Events and parties</label>
                        <input type="checkbox" name="tag_place_of_service" id="hotelmotel" value="hotelmotel" />
                        <label htmlFor="hotelmotel">Hotel / Motel</label>
                        <input type="checkbox" name="tag_place_of_service" id="clubs" value="clubs" />
                        <label htmlFor="clubs">Clubs</label>
                        <input type="checkbox" name="tag_place_of_service" id="outcall" value="outcall" />
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

  )
}

export default SearchModal