import React from 'react'

const page = () => {
  return (
    <div>
      <form method="POST" action="http://localhost/u/post-image/ine229496fc9c9153f773ceafb7d7eb6a2" acceptCharset="UTF-8" id="myForm"><input name="_token" type="hidden" defaultValue="NVaxOVB9I2ct78MPi34l5vBrGE60gR7IKCFs80dV" />
  <input name="insert_key" type="hidden" defaultValue="ine229496fc9c9153f773ceafb7d7eb6a2" />
  <input name="insert_id" type="hidden" defaultValue={3060030} />
  <section className="post-ads-section">
    <div className="container container-front">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="main-title-post-ad">
            Publish for Free
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 ads-post-first-section my-search-form">
          <ul className="progressbar">
            <li className="personal active">
              <strong>Insert</strong>
            </li>
            <li className="photo active">
              <strong>Your Photos</strong>
            </li>
            <li className="promote">
              <strong>Verify</strong>
            </li>
            <li className="confirm">
              <strong>Finish</strong>
            </li>
          </ul>
          <div className="post-ad-center uploadph">
            <div className="edittextp">
              <a href="http://localhost/c/post-update/ine229496fc9c9153f773ceafb7d7eb6a2">
                <span className="icon-edit" />
                Edit Profile
              </a>
            </div>
            <div className="editadd-box panelar">
              <div className="ad-card-body">
                <h5 className="small">Title : provide escort </h5>
                <h5 className="small">Text : I am an individual committed to providing care, compassion, and understanding in my interactions with others. I embrace life with a deep sense of empathy, recognizing the complexities and challenges p
                </h5>
                <h5 className="detailtag small text-uppercase">
                  <b>25 Years </b> | Massage |
                  <i className="icon-location" /> <b><span translate="no" className="notranslate">Ahmedabad</span></b> | <b><span translate="no" className="notranslate">Sarkhej</span></b>
                </h5>
              </div>
            </div>
            <div className="form-section-title">Your Photos</div>
            <div className="outeruploadbox">
              <div className="up-img-row upload-photo-hidden" id="img-drag-and-drop">
                <div className="progress multipleimg img-default-outd" id="pro">
                  <div id="myBar" className="progress-bar" style={{width: '0%'}}>0%</div>
                </div>
                <div className="img-default-col cff removebox" id="removebox">
                  <div className="img-v-center" id="drop_file_zone" ondragover="return false">
                    <input className="upload-input" type="file" style={{display: 'none'}} id="selectfile" name="image[]" multiple accept="image/gif, image/jpeg, image/png" />
                    <p>YOU CAN UPLOAD UP TO <span className="imgcount">10</span> PICTURES</p>
                    <a href="javascript:;" onclick="file_explorer();" style={{textDecoration: 'none'}}> 
                      <i className="icon-camera" />
                    </a>
                    <p className="img-drag-drop">Drag the picture here or click to select them</p>
                  </div>
                </div>
              </div>
              <div className="panel-heading text-center">
                <div className="info-alert-msg">
                  <small>
                    <span className="icon-info-circle" />
                    Only one picture visible for free ads
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-4">
        <div className="col-md-12 text-right">
          <div className="contineu-btn-col">
            <input type="submit" className="pink-g-btn Continue-btns disabled" name="continue" defaultValue="Continue" />
          </div>
        </div>
      </div>
      <input type="hidden" name="base_img_data" id="profile_img_data" />
      <div className="modalbox" id="modalbox">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Crop</h5>
              <button type="button" className="close" onclick="toggleText()">×</button>
            </div>
            <div className="modal-body">
              <div id="cropper">
                <canvas id="cropperImg" width={0} height={0} />
              </div>
            </div>
            <div className="slidrotbx">
              <div className="sliderwrap">
                <a href="javascript:void(0);" id="zoom-out" className="incrbtn"><i className="icon-minus" /></a>
                <div id="slider" className="ep-slider-bar" />
                <a href="javascript:void(0);" className="decrbtn" id="zoom-in"><i className="icon-plus" /></a>
              </div>
              <div className="rotatebtn">
                <button type="button" className id="rotateLeft">
                  <span className="docs-tooltip">
                    Rotate <i className="icon-rotate-left" />
                  </span>
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <div className="btngrpcrop">
                <button className="btn btn-secondary cropImageBtn" onclick="toggleText()" id="modalClose" type="button"> Cancel</button>
                <button className="btn btn-secondary cropImageBtn" id="cropImageBtn" type="button">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-12">
          <div className="card help-support-box">
            <div className="pt-4 card-body shadow-sm rounded">
              <div className="pb-1">
                <span className="mr-2">
                  <span className="icon-support_agent" />
                </span>
                <span><b>Need help?</b></span>
              </div>
              <div className="small pl-md-3 ml-md-3">Contact us through one of our channels from <b>Monday</b> to <b>Friday</b> from 2pm to 9pm.
              </div>
              <div className="pl-md-3 ml-md-3 pt-4 pb-0 pb-2 btm-bx">
                <h6 className="d-md-inline d-sm-block">
                  <a href="javascript:void(0);" target="_blank">
                    <span className="icon-whatsapp1 mr-2" />WhatsApp
                  </a>
                </h6>
                <h6 className="d-md-inline d-sm-block p-2">
                  <a href="javascript:void(0);" target="_blank">
                    <span className="icon-telegram mr-2" />Telegram
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</form>

    </div>
  )
}

export default page