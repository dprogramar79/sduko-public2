import React from 'react'

const page = () => {
  return (
    <section className="home-section content-section">
  <div className="container container-front">
    <nav className="breadcrumb-row">
      <div className="search open">
        <a href="http://localhost:3000/escorts/delhi" title="Back to Search">
          <span className="search-button">
            <span className="search-icon" />
          </span> <div className="bks">Back to search</div>  
        </a>
      </div>
      <ol itemScope itemType="https://schema.org/BreadcrumbList" id="sk1" className="breadcrumb mybrcrumb">
        <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem" className="breadcrumb-item homeIcon">
          <a itemProp="item" aria-label="Home" href="http://localhost:3000/" itemScope itemType="http://schema.org/Service" id="http://localhost:3000/" itemID="http://localhost:3000/">   
            <i itemProp="name" className="fa fa-home">  
              <span className="bcseo-text">  
                Sduko India
              </span>
            </i>   
          </a>
          <meta itemProp="position" content={1} />
        </li>
        <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem" className="breadcrumb-item">
          <a itemProp="item" aria-label="Cat Name" href="http://localhost:3000/escorts/" itemScope itemType="http://schema.org/Service" id="http://localhost:3000/escorts/" itemID="http://localhost:3000/escorts/">
            <div itemProp="name">Escorts</div>
          </a>
          <meta itemProp="position" content={2} />
        </li>
        <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem" className="breadcrumb-item">
          <a itemProp="item" aria-label="State Name" href="http://localhost:3000/escorts/delhi-region/" itemScope itemType="http://schema.org/Place" id="http://localhost:3000/delhi-region/" itemID="http://localhost:3000/delhi-region/">
            <div itemProp="name">Delhi region Escorts</div>
          </a>
          <meta itemProp="position" content={3} />
        </li>
        <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem" className="breadcrumb-item">
          <a itemProp="item" aria-label="City Name" href="http://localhost:3000/escorts/delhi/" itemScope itemType="http://schema.org/Place" id="http://localhost:3000/escorts/delhi/" itemID="http://localhost:3000/escorts/delhi/">
            <div itemProp="name">Delhi Escorts</div>
          </a>
          <meta itemProp="position" content={4} />
        </li>
      </ol>
    </nav>
     
    {/* <div class="details-content vue-ajax-pro-detail"></div> */}
    <div className="details-content">
      <div className="details-row">
        <div className="details-left-items">
          <div className="aded-date">
            <span><b>28 NOVEMBER</b></span> -
            <span>Ad ID: in0p2p0es </span>
          </div>
          <h6 className="tagcard">
            <strong className="bolder-txt"><span className="icon-user-svgrepo-com-1" /> 21 Years</strong>
            <strong className="bolder-txt"><span className="icon-location-pin-svgrepo-com" /> Delhi</strong>
          </h6>
          <h1 className="item-title mt-2">
            A21 Delhi city best call girls 24 x 7 available full safe and secure
          </h1>
        </div>
        <div className="details-right-items">
          <div className="coll-to-action-row">
            <div className="item-card-contact">
              <a aria-label="Phone" href="javascript:;" data-last="9351 401837" className="btntelephone"><i className="fa fa-phone" /> <span className="mobile-view-text">9351 401837</span><span className="desktop-view-text">9351 401837</span></a>
              <a aria-label="whatsapp" target="_blank" href="https://api.whatsapp.com/send?phone=+919351 401837&text=Hi%2Csaw%20your%20ad%20on%20Sduko%20%22A21%20Delhi%20city%20best%20call%20girls%28...%29%22%2C%20and%20I%27d%20like%20to%20meet%20you." className="btncontact"><i className="fa fa-whatsapp" /> WHATSAPP</a>
            </div>
          </div>
        </div>
      </div>
      <div className="sduko-gallery">
        <div className="lightboxpophide">
          <div>
            {/* Gallery modal */}
            <div className="modal fade modal-fullscreen-xl" id="images-modal" tabIndex={-1} role="dialog" aria-labelledby="images-modalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header detailphoto d-flex justify-content-start align-items-center">
                    <button type="button" data-dismiss="modal" aria-label="Close" className="close m-0 p-0">
                      <i className="fa fa-chevron-left mr-2" aria-hidden="true" />
                    </button>
                    <h5 className="modal-title"><a data-dismiss="modal" aria-label="Close">Back to the ad</a></h5>
                  </div>
                  <div className="modal-body">
                    <img src="https://in-static.emgsd.com/uploads/in/24/11/28/f9ulvybkfu5ryiz4fqb861tjhbgs01vu.jpg" className="img-fluid" alt="A21 Delhi city best call girls 24 x 7 available full safe and secure" />
                    <img src="https://in-static.emgsd.com/uploads/in/24/11/28/c5mkhnnvpj2tiqtgdz7j4haqdxwp0qos.jpg" className="img-fluid" alt="A21 Delhi city best call girls 24 x 7 available full safe and secure" />
                    <img src="https://in-static.emgsd.com/uploads/in/24/11/28/4i9xwqekkplcrbinmjipxljbuckqmzn2.jpg" className="img-fluid" alt="A21 Delhi city best call girls 24 x 7 available full safe and secure" />
                  </div>
                </div>
              </div>
            </div>
            <button type="button" className="btn btn-open-modal" data-toggle="modal" data-target="#images-modal">
              <span className="icon-zoom_out_map" />
              Show All
            </button>
            {/* Gallery modal */}
          </div>
          <div className="gallery-section masonry" id="galleryGrid">
            <div className="carousel-controls">
              <a className="left carousel-control-prev" href="#galleryGrid" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="right  carousel-control-next" href="#galleryGrid" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div className="brick gallery-grid">
              <a href="https://in-static.emgsd.com/uploads/in/24/11/28/f9ulvybkfu5ryiz4fqb861tjhbgs01vu.jpg">
                <img src="https://in-static.emgsd.com/uploads/in/24/11/28/f9ulvybkfu5ryiz4fqb861tjhbgs01vu.jpg" className="img-fluid" alt="A21 Delhi city best call girls 24 x 7 available full safe and secure" />
              </a>
            </div>
            <div className="brick gallery-grid">
              <a href="https://in-static.emgsd.com/uploads/in/24/11/28/c5mkhnnvpj2tiqtgdz7j4haqdxwp0qos.jpg">
                <img src="https://in-static.emgsd.com/uploads/in/24/11/28/c5mkhnnvpj2tiqtgdz7j4haqdxwp0qos.jpg" className="img-fluid" alt="A21 Delhi city best call girls 24 x 7 available full safe and secure" />
              </a>
            </div>
            <div className="brick gallery-grid">
              <a href="https://in-static.emgsd.com/uploads/in/24/11/28/4i9xwqekkplcrbinmjipxljbuckqmzn2.jpg">
                <img src="https://in-static.emgsd.com/uploads/in/24/11/28/4i9xwqekkplcrbinmjipxljbuckqmzn2.jpg" className="img-fluid" alt="A21 Delhi city best call girls 24 x 7 available full safe and secure" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="detail-btm-content">
        <div className="details-left-items detailfull-width">
          <div className="detail-promo toppremium">
            <img className="top-premium-img" src="/static/image/top-premium.png" alt="..." />
          </div>
          <h5><strong><span className="icon-emoji-flirt" />About me</strong></h5>
          <p>💫🌟💫🌟<br />*``` ~city best call girls 24 x 7 available full safe and secure*```~<br />``➡️A-Level (5 star )<br />★ Strip-tease<br />★ BBBJ (Bareback Blowjob) Receive advanced sexual techniques in different mode make their life more
            pleasurable.<br />★ Spending time in hotel rooms<br />★ BJ (Blowjob Without a Condom)<br />★ Completion (Oral to completion)<br />★ Covered (Covered blowjob Without a Condom)<br />★ DATING (Dinner At Night)<br />★ DSL (Dick Sucking
            Lips)<br />★ DT (Dining at the Toes English Spanking)<br />★ Doggie (Sex style from behind)<br />★ Duo (shot with two escorts; Threesome with the client)<br />★ S-GFE (Special Girl Friend Experience)<br />★ HJ (Hand Job)<br />★ Special
            Massage<br />★ O-Level (Oral sex)<br />★ Tour (International)<br />★ 69 (69 sex)```</p>
          <div className="tags-list-detail">
          </div>
        </div>
        <div className="d-block d-md-none contact-panle text-center pt-2 pb-4">
          <h4> Contact me </h4>
        </div>
        <div className="contact-panle stickymobile">
          <div className="coll-to-action-row">
            <div className="item-card-contact">
              <a aria-label="Phone" href="tel:9351 401837" className="btntelephone"><i className="fa fa-phone" /> <span className="mobile-view-text">9351 401837</span><span className="desktop-view-text">9351 401837</span></a>
              <a aria-label="whatsapp" target="_blank" href="https://api.whatsapp.com/send?phone=+919351 401837&text=Hi%2Csaw%20your%20ad%20on%20Sduko%20%22A21%20Delhi%20city%20best%20call%20girls%28...%29%22%2C%20and%20I%27d%20like%20to%20meet%20you." className="btncontact"><i className="fa fa-whatsapp" /> WHATSAPP</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="contact-me-row mt-0">
      <div className="contact-panle mobile-hiden">
        <h4> Contact me </h4>
        <div className="coll-to-action-row mt-5">
          <div className="item-card-contact d-flex justify-content-center ">
            <a aria-label="Phone" href="javascript:;" className="btntelephone" data-last="9351 401837"><i className="fa fa-phone" /> <span className="mobile-view-text">9351 401837</span><span className="desktop-view-text">9351 401837</span></a>
            <a aria-label="whatsapp" target="_blank" href="https://api.whatsapp.com/send?phone=+919351 401837&text=Hi%2Csaw%20your%20ad%20on%20Sduko%20%22A21%20Delhi%20city%20best%20call%20girls%28...%29%22%2C%20and%20I%27d%20like%20to%20meet%20you." className="btncontact"><i className="fa fa-whatsapp" /> WHATSAPP</a>
          </div>
        </div>
      </div>
      <div className="col-to-shareadd-row text-center contact-panle share-ad-text">
        <h4>Share ad</h4>
        <ul className="share-add-gride">
          <li><a aria-label="Twitter" target="_blank" href="https://twitter.com/share?url=http://localhost:3000/ad/a21-delhi-city-best-call-girls-24-x-7-available-full-safe-and-secure-in0p2p0es?page=1&source=listing-stories" className="tw-ic"><i className="icon-x fa-2x share-text" /></a></li>
          <li><a aria-label="Phone" target="_blank" href="https://api.whatsapp.com/send?phone=9351 401837&text=Hi%2C%20I%27ve%20seen%20your%20ad%20in%20sduko.com%20https%3A%2F%2Fin.sduko.com%2Fad%2Fa21-delhi-city-best-call-girls-24-x-7-available-full-safe-and-secure-in0p2p0es%3Fpage%3D1%26source%3Dlisting-stories%2F%20%20%F0%9F%98%89%20I%27d%20like%20to%20ask%20you%3A" className="tw-ic"><i className="fa fa-lg fa-whatsapp fa-2x share-text" /></a></li>
        </ul>
      </div>
      <p className="more-add-panel mt-40 pb-4">
        <span>More Ads Of:</span><span><a title="Delhi" href="http://localhost:3000/escorts/delhi/">Escorts in Delhi </a></span>
      </p>
      <div className="alert-msg-wrapper-c">
        <h6><i className="sduko-icon-shield" /><strong>Report Abuse</strong></h6>
        <ul>
          <li>You can send an email to <strong><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="50202239263133297e393e102334253b3f7e333f3d">[email&nbsp;protected]</a></strong> to report for any improper use of images,
            report of intellectual property (for example telephone, e-mail, names and addresses).</li>
          <li>You can send an email to <strong><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6502170c0013040b060016251601100e0a4b060a08">[email&nbsp;protected]</a></strong> to report for any kind of deemed illegal
            or any abusive content.</li>
        </ul>
      </div>
      <div className="detail-carousel-box pt-5 pb-2">
        <div className="alert alert-tips-detail text-center">
          <div className="img-tips" />
          <div id="carouseldetaillider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item">
                Please be cautious of individuals impersonating sduko who request payment from you. sduko will never demand payment from you.
              </div>
              <div className="carousel-item active">
                Exercise caution if the advertiser communicates in an unusual or suspicious manner. Many scams come from overseas.
              </div>
              <div className="carousel-item">
                If you come across imposters, please report them to sduko and/or the appropriate authorities and block them. Enjoy a safe sduko experience.
              </div>
              <div className="carousel-item">
                sduko does not interfere in the interactions between the advertiser and the page user.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-content mt-40 p-det">
        <p><strong>Sduko.com Does Not Mediate in the Affairs Between Pleasure Seekers and Advertisers</strong></p>
        <p>By visiting our website and using our adult classified ads, the VISITORS accept our Terms and Conditions of use, and the code of conducts we expect from our visitors to follow.</p>
        <p>The adult classified ads in Sduko has been published by the advertisers under their complete responsibility. The advertisements are not subjected to any type of prior verification by Sduko. This classified ad portal is not responsible
          regarding the veracity, legality, respect to the property right and possible displeasure with the public or moral order of the online contents entered by the user under any condition.</p>
        <p>Sduko.com is a free adult classified ad portal that allow the publishers to promote their adult services. The ad portal is not supposed to intervene in any kind of relationship or settlement between the pleasure seekers and service
          providers.</p>
      </div>
    </div>
  </div>
</section>

  )
}

export default page