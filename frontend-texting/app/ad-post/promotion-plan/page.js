import React from 'react'

const page = () => {
  return (
    <div>
      <div>
        <section className="post-ads-section">
          <div className="container container-front">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="main-title-post-ad">
                  Publish for free in just a few steps!
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12 ads-post-first-section my-search-form">
                <ul className="progressbar">
                  <li className="personal active">
                    <strong>Ad Detail</strong>
                  </li>
                  <li className="photo active">
                    <strong>Your Gallery</strong>
                  </li>
                  <li className="promote active">
                    <strong>Select Plan</strong>
                  </li>
                  <li className="confirm">
                    <strong>Thank You</strong>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12 ads-post-first-section my-search-form">
                <div className="boder20 p-2 panel panel-default blue-light-bg mb-3 step-layout-planbg">
                  <div className="panel-heading relative">
                    <img src="https://in.sduko.com/static/image/rich-the-top.png" className="rich-the-top" />
                    <div className="hedpy d-flex justify-content-between align-items-center flex-column mb-4 position-relative">
                      <div className="product-panel-left d-flex align-items-center">
                        <div className="tp-prem-left-img">
                          <img src="https://in.sduko.com/static/image/product-top.png" alt />
                        </div>
                        <div className="tp-prem-right-img">
                          <span className="product-tabs-heading">CLIMB THE TOP</span>
                        </div>
                      </div>
                      {/* <button type="button" class="btn vip-dis-link vip-pos-link" data-toggle="modal" data-target="#vipdicoverModal">                                        
                              <i class="fa fa-eye" aria-hidden="true"></i>
                                  Show Example
                          </button>                                 */}
                    </div>
                    <div clas="mt-3">
                      <p className="mb-0 text-center">Make your ad reach to more clients by promoting your ads! <a href className="premi-add-link">LEARN MORE</a></p>
                    </div>
                  </div>
                  <div id="richTheTop" className="panel-collapse">
                    <div className="panel-body">
                      <div className="promotyourad">
                        <a href className="premi-add-link">promote your ads!</a>
                        <p>Please select the offer type and time slot to promote your ad.</p>
                      </div>
                      <div className="row services-items-row d-flex flex-wrap justify-content-around">
                      </div>
                      <div className="schedule-row mt-4">
                      </div>
                      <div className="row services-items-row d-flex flex-wrap mt-5 justify-content-center">
                        <div className="services-items product_box" id="5x1_pro" price={141.00} data-product-id={1}>
                          <div className="services-circle-outer">
                            <div className="services-circle-inner">
                              <span className="pl5x1_pro" />
                              {/* <span>5x1</span> */}
                            </div>
                          </div>
                          <div className="services-content">
                            <div className="plan-listing-with-img text-cente">
                              <input type="radio" defaultChecked="checked" name="radio" />
                              {/* <i class="fa fa-check" aria-hidden="true"></i> */}
                              <div className="plan-content-cont">
                                <div className="pro_item_desc">
                                  <p>5 TOP-UPS a day for 1 day</p>
                                </div>
                                <h3>Rs 141.00</h3>
                              </div>
                            </div>
                            <div className="credits-items">
                              <span className="credit-plan">
                                3
                              </span>
                              <span className="credit-title">
                                Credits
                              </span>
                              <i className="fa fa-check" aria-hidden="true" />
                            </div>
                          </div>
                        </div>
                        <div className="services-items product_box" id="5x3_pro" price={376.00} data-product-id={2}>
                          <div className="services-circle-outer">
                            <div className="services-circle-inner">
                              <span className="pl5x3_pro" />
                              {/* <span>5x3</span> */}
                            </div>
                          </div>
                          <div className="services-content">
                            <div className="plan-listing-with-img text-cente">
                              <input type="radio" defaultChecked="checked" name="radio" />
                              {/* <i class="fa fa-check" aria-hidden="true"></i> */}
                              <div className="plan-content-cont">
                                <div className="pro_item_desc">
                                  <p>5 TOP-UPS a day for 3 day</p>
                                </div>
                                <h3>Rs 376.00</h3>
                              </div>
                            </div>
                            <div className="credits-items">
                              <span className="credit-plan">
                                8
                              </span>
                              <span className="credit-title">
                                Credits
                              </span>
                              <i className="fa fa-check" aria-hidden="true" />
                            </div>
                          </div>
                        </div>
                        <div className="services-items product_box" id="5x7_pro" price={752.00} data-product-id={3}>
                          <div className="services-circle-outer">
                            <div className="services-circle-inner">
                              <span className="pl5x7_pro" />
                              {/* <span>5x7</span> */}
                            </div>
                          </div>
                          <div className="services-content">
                            <div className="plan-listing-with-img text-cente">
                              <input type="radio" defaultChecked="checked" name="radio" />
                              {/* <i class="fa fa-check" aria-hidden="true"></i> */}
                              <div className="plan-content-cont">
                                <div className="pro_item_desc">
                                  <p>5 TOP-UPS a day for 7 day</p>
                                </div>
                                <h3>Rs 752.00</h3>
                              </div>
                            </div>
                            <div className="credits-items">
                              <span className="credit-plan">
                                16
                              </span>
                              <span className="credit-title">
                                Credits
                              </span>
                              <i className="fa fa-check" aria-hidden="true" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="schedule-row mt-4">
                        <div id="select_time_range">
                          <div id="div_5x1_pro" className="time_day hidden">
                            <ul className="schedule-listing">
                              <li className="selectdiv set_354" data-range="9_12" current-price={141.00} exclusive-price={94.00} total-price={235.00}>
                                <input type="radio" className="select_time_data" name="time_slot_id" defaultValue={354} />
                                <span className="schedule-time" id={354}>9:00am - 012:00pm</span>
                                <span className="schedule-tick"><i className="fa fa-check" aria-hidden="true" /></span>
                              </li>
                              <li className="selectdiv set_355" data-range="12_3" current-price={141.00} exclusive-price={94.00} total-price={235.00}>
                                <input type="radio" className="select_time_data" name="time_slot_id" defaultValue={355} />
                                <span className="schedule-time" id={355}>12:00pm - 3:00pm</span>
                                <span className="schedule-tick"><i className="fa fa-check" aria-hidden="true" /></span>
                              </li>
                              <li className="selectdiv set_356" data-range="3_6" current-price={141.00} exclusive-price={94.00} total-price={235.00}>
                                <input type="radio" className="select_time_data" name="time_slot_id" defaultValue={356} />
                                <span className="schedule-time" id={356}>03:00pm - 06:00pm</span>
                                <span className="schedule-tick"><i className="fa fa-check" aria-hidden="true" /></span>
                              </li>
                              <li className="selectdiv set_357" data-range="6_9" current-price={141.00} exclusive-price={94.00} total-price={235.00}>
                                <input type="radio" className="select_time_data" name="time_slot_id" defaultValue={357} />
                                <span className="schedule-time" id={357}>06:00pm - 09:00pm</span>
                                <span className="schedule-tick"><i className="fa fa-check" aria-hidden="true" /></span>
                              </li>
                              <li className="selectdiv set_358" data-range="9_12" current-price={141.00} exclusive-price={94.00} total-price={235.00}>
                                <input type="radio" className="select_time_data" name="time_slot_id" defaultValue={358} />
                                <span className="schedule-time" id={358}>09:00pm - 12:00am</span>
                                <span className="schedule-tick"><i className="fa fa-check" aria-hidden="true" /></span>
                              </li>
                            </ul>
                            {/* <div class="d-flex align-items-center justify-content-center position-relative">
                                                          <button type="button" class="btn vip-dis-link" data-toggle="modal" data-target="#vipdicovertopModal">                                        
                                                          <i class="fa fa-eye" aria-hidden="true"></i>
                                                          Show Example
                                                          </button>     
                                                      </div>  */}
                          </div>
                        </div>
                        <div id="select_time_range">
                          <div id="div_5x3_pro" className="time_day hidden">
                            <ul className="schedule-listing">
                              <li className="selectdiv set_349" data-range="9_12" current-price={376.00} exclusive-price={188.00} total-price={564.00}>
                                <input type="radio" className="select_time_data" name="time_slot_id" defaultValue={349} />
                                <span className="schedule-time" id={349}>9:00am - 12:00pm</span>
                                <span className="schedule-tick"><i className="fa fa-check" aria-hidden="true" /></span>
                              </li>
                              <li className="selectdiv set_350" data-range="12_3" current-price={376.00} exclusive-price={188.00} total-price={564.00}>
                                <input type="radio" className="select_time_data" name="time_slot_id" defaultValue={350} />
                                <span className="schedule-time" id={350}>12:00pm - 03:00pm</span>
                                <span className="schedule-tick"><i className="fa fa-check" aria-hidden="true" /></span>
                              </li>
                              <li className="selectdiv set_351" data-range="3_6" current-price={376.00} exclusive-price={188.00} total-price={564.00}>
                                <input type="radio" className="select_time_data" name="time_slot_id" defaultValue={351} />
                                <span className="schedule-time" id={351}>03:00pm - 06:00pm</span>
                                <span className="schedule-tick"><i className="fa fa-check" aria-hidden="true" /></span>
                              </li>
                              <li className="selectdiv set_352" data-range="6_9" current-price={376.00} exclusive-price={188.00} total-price={564.00}>
                                <input type="radio" className="select_time_data" name="time_slot_id" defaultValue={352} />
                                <span className="schedule-time" id={352}>06:00pm - 09:00pm</span>
                                <span className="schedule-tick"><i className="fa fa-check" aria-hidden="true" /></span>
                              </li>
                              <li className="selectdiv set_353" data-range="9_12" current-price={376.00} exclusive-price={188.00} total-price={564.00}>
                                <input type="radio" className="select_time_data" name="time_slot_id" defaultValue={353} />
                                <span className="schedule-time" id={353}>09:00pm - 12:00am</span>
                                <span className="schedule-tick"><i className="fa fa-check" aria-hidden="true" /></span>
                              </li>
                            </ul>
                            {/* <div class="d-flex align-items-center justify-content-center position-relative">
                                                          <button type="button" class="btn vip-dis-link" data-toggle="modal" data-target="#vipdicovertopModal">                                        
                                                          <i class="fa fa-eye" aria-hidden="true"></i>
                                                          Show Example
                                                          </button>     
                                                      </div>  */}
                          </div>
                        </div>
                        <div id="select_time_range">
                          <div id="div_5x7_pro" className="time_day hidden">
                            <ul className="schedule-listing">
                              <li className="selectdiv set_359" data-range="9_12" current-price={752.00} exclusive-price={376.00} total-price={1128.00}>
                                <input type="radio" className="select_time_data" name="time_slot_id" defaultValue={359} />
                                <span className="schedule-time" id={359}>9:00am - 12:00pm</span>
                                <span className="schedule-tick"><i className="fa fa-check" aria-hidden="true" /></span>
                              </li>
                              <li className="selectdiv set_360" data-range="12_3" current-price={752.00} exclusive-price={376.00} total-price={1128.00}>
                                <input type="radio" className="select_time_data" name="time_slot_id" defaultValue={360} />
                                <span className="schedule-time" id={360}>12:00pm - 03:00pm</span>
                                <span className="schedule-tick"><i className="fa fa-check" aria-hidden="true" /></span>
                              </li>
                              <li className="selectdiv set_361" data-range="3_6" current-price={752.00} exclusive-price={376.00} total-price={1128.00}>
                                <input type="radio" className="select_time_data" name="time_slot_id" defaultValue={361} />
                                <span className="schedule-time" id={361}>03:00pm - 06:00pm</span>
                                <span className="schedule-tick"><i className="fa fa-check" aria-hidden="true" /></span>
                              </li>
                              <li className="selectdiv set_362" data-range="6_9" current-price={752.00} exclusive-price={376.00} total-price={1128.00}>
                                <input type="radio" className="select_time_data" name="time_slot_id" defaultValue={362} />
                                <span className="schedule-time" id={362}>06:00pm - 09:00pm</span>
                                <span className="schedule-tick"><i className="fa fa-check" aria-hidden="true" /></span>
                              </li>
                              <li className="selectdiv set_363" data-range="9_12" current-price={752.00} exclusive-price={376.00} total-price={1128.00}>
                                <input type="radio" className="select_time_data" name="time_slot_id" defaultValue={363} />
                                <span className="schedule-time" id={363}>9:00pm - 12:00am</span>
                                <span className="schedule-tick"><i className="fa fa-check" aria-hidden="true" /></span>
                              </li>
                            </ul>
                            {/* <div class="d-flex align-items-center justify-content-center position-relative">
                                                          <button type="button" class="btn vip-dis-link" data-toggle="modal" data-target="#vipdicovertopModal">                                        
                                                          <i class="fa fa-eye" aria-hidden="true"></i>
                                                          Show Example
                                                          </button>     
                                                      </div>  */}
                          </div>
                        </div>
                      </div>
                      <div className="row services-items-row night-plan-row d-flex flex-wrap justify-content-center mt-5">
                        <div className="services-items product_box" id="10x1_pro" price={188.00} data-product-id={5}>
                          <div className="services-circle-outer">
                            <div className="services-circle-inner">
                              <span className="pl10x1_pro" />
                              {/* <span>10x1</span> */}
                            </div>
                          </div>
                          <div className="services-content">
                            <div className="plan-listing-with-img text-cente">
                              <input type="radio" defaultChecked="checked" name="radio" />
                              {/* <i class="fa fa-check" aria-hidden="true"></i> */}
                              <div className="plan-content-cont">
                                <div className="pro_item_desc">
                                  <p>10 TOP-UPS a day for 1 day</p>
                                </div>
                                <h3>Rs 188.00</h3>
                              </div>
                            </div>
                            <div className="credits-items">
                              <span className="credit-plan">
                                4
                              </span>
                              <span className="credit-title">
                                Credits
                              </span>
                              <i className="fa fa-check" aria-hidden="true" />
                            </div>
                          </div>
                        </div>
                        <div className="services-items product_box" id="10x7_pro" price={940.00} data-product-id={7}>
                          <div className="services-circle-outer">
                            <div className="services-circle-inner">
                              <span className="pl10x7_pro" />
                              {/* <span>10x7</span> */}
                            </div>
                          </div>
                          <div className="services-content">
                            <div className="plan-listing-with-img text-cente">
                              <input type="radio" defaultChecked="checked" name="radio" />
                              {/* <i class="fa fa-check" aria-hidden="true"></i> */}
                              <div className="plan-content-cont">
                                <div className="pro_item_desc">
                                  <p>10 TOP-UPS a day for 7 days</p>
                                </div>
                                <h3>Rs 940.00</h3>
                              </div>
                            </div>
                            <div className="credits-items">
                              <span className="credit-plan">
                                20
                              </span>
                              <span className="credit-title">
                                Credits
                              </span>
                              <i className="fa fa-check" aria-hidden="true" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="schedule-row mt-4">
                        <div id="select_time_range">
                          <div id="div_10x1_pro" className="time_day hidden">
                            <ul className="schedule-listing">
                              <li className="selectdiv set_366" data-range="12_9" current-price={188.00} exclusive-price={94.00} total-price={282.00}>
                                <input type="radio" className="select_time_data" name="time_slot_id" defaultValue={366} />
                                <span className="schedule-time" id={366}>12:00am - 09:00am</span>
                                <span className="schedule-tick"><i className="fa fa-check" aria-hidden="true" /></span>
                              </li>
                            </ul>
                            {/* <div class="d-flex align-items-center justify-content-center position-relative">
                                                          <button type="button" class="btn vip-dis-link" data-toggle="modal" data-target="#vipdicovertopModal">                                        
                                                          <i class="fa fa-eye" aria-hidden="true"></i>
                                                          Show Example
                                                          </button>     
                                                      </div>   */}
                          </div>
                        </div>
                        <div id="select_time_range">
                          <div id="div_10x7_pro" className="time_day hidden">
                            <ul className="schedule-listing">
                              <li className="selectdiv set_365" data-range="12_9" current-price={940.00} exclusive-price={470.00} total-price={1410.00}>
                                <input type="radio" className="select_time_data" name="time_slot_id" defaultValue={365} />
                                <span className="schedule-time" id={365}>12:00am - 09:00am</span>
                                <span className="schedule-tick"><i className="fa fa-check" aria-hidden="true" /></span>
                              </li>
                            </ul>
                            {/* <div class="d-flex align-items-center justify-content-center position-relative">
                                                          <button type="button" class="btn vip-dis-link" data-toggle="modal" data-target="#vipdicovertopModal">                                        
                                                          <i class="fa fa-eye" aria-hidden="true"></i>
                                                          Show Example
                                                          </button>     
                                                      </div>   */}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 upgrade-section hidden">
                          <div className="increase-Premium premium-upgrade">
                            <div className="Premium-box">
                              <h5> Do You Want to Increase your Visibility? <br /> Premium Ad.</h5>
                              <a href="javascript:void(0)" className="group-btn"> <img src="https://in.sduko.com/static/image/Group-91.png" /> </a>
                            </div>
                            <p className="text-center">Up to 3 preview Pictures and the phone number visible in the ad list.</p>
                            <img src="https://in.sduko.com/static/image/Rectangle-49.png" className="scroll-group" />
                            <div className="premium-div-section">
                              <div className="premium-div-button">
                                <input type="checkbox" name="exclusive" id="exclusive-checkbox" className="hidden" />
                                <span id="exclusive-price" className="premmiun-btn">Premium Rs 00.00
                                  <img src="https://in.sduko.com/static/image/hot-price.png" className="hot-price" />
                                  <span className="checked-sign">&nbsp;</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="Choose-box mt-4">
                            <div className="total-pric-box">
                              <div className="parent-button">
                                <div className="text-right">
                                  <form method="POST" action="https://in.sduko.com/u/confirmOrder" acceptCharset="UTF-8"><input name="_token" type="hidden" defaultValue="NVaxOVB9I2ct78MPi34l5vBrGE60gR7IKCFs80dV" />
                                    <input type="hidden" name="profile_key" defaultValue="ine229496fc9c9153f773ceafb7d7eb6a2" />
                                    <input className="publish-btn" type="submit" defaultValue="Publish For Free" />
                                  </form>
                                </div>
                                <div className="text-right">
                                  <div className="total-price" id="total_price_text" />
                                  <input type="hidden" name="time_slot" id="time_slot" defaultValue />
                                  <input type="hidden" name="exclusive_amount" id="exclusive_amount" defaultValue={0.00} />
                                  <input type="hidden" name="total_price" id="total_price_val" defaultValue={0.00} />
                                  <input type="hidden" name="product_id" id="product_id" defaultValue />
                                  <input type="hidden" name="profile_key" id="profile_key" defaultValue="ine229496fc9c9153f773ceafb7d7eb6a2" />
                                  <input type="hidden" name="profile_id" id="profile_id" defaultValue={3060030} />
                                  <input className="promote-btn" type="submit" defaultValue="Promote" name="promote" id="promoteAdsFronted" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mt-2 paynoti text-center">
              <span className="small">
                For technical assistance you can send an email to: <strong><a href="/cdn-cgi/l/email-protection#3e4d4b4e4e514c4a1057577e4d5a4b5551105d5153"><span className="__cf_email__" data-cfemail="b0c3c5c0c0dfc2c49ed9def0c3d4c5dbdf9ed3dfdd">[email&nbsp;protected]</span></a>
                </strong>
                <br /> Support Center: <a href="tel:+91 000 800 0000000">+91 000 800 0000000</a> From Mon. to Fri. / From 02:00 PM to 10:00 PM
              </span>
            </div>
          </div>
        </section>
        <div className="modal fade" role="dialog" id="ErrorModal" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header position-releative align-items-center justify-content-start border-0">
                <div className="details-modal-close" data-dismiss="modal">
                  <img src="http://localhost/static/image/pop-close-icon.svg" alt="Close Icon" />
                </div>
                <h5 className="modal-title mTitle">Promote Your Ads</h5>
              </div>
              <div className="modal-body text-center mBodyText">
                <p>
                </p><p>Please select the offer type and time slot to promote your ad.</p>
                <p />
              </div>
              <div className="modal-footer d-flex align-items-center justify-content-end">
                <button type="button" className="btn common-btn-red" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page