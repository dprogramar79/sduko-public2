import React from 'react'
import CategorySection from './CategorySection'
import Link from 'next/link'

const HomeSection = () => {
    return (
        <section className="home-section">
            <div className="container-front">
                <div className="row">
                    <div className="col-lg-12">
                        <Link href="/ad-post/insert-post/" className="mt-4 pink-g-btn post-add mobilePostBtn d-none align-items-center justify-content-center clickable">
                            <i className="fa fa-plus mr-2" aria-hidden="true" />
                            Post Your Ad
                        </Link>
                    </div>
                </div>
                <div className="text-center w-100 homepage-f">
                    <h1 className="h1-home">Post Your Adult Advertisement or Search Hot Advertisers</h1>
                    <div className="plr-140">
                        <h2 className="h2-home">Locate the Best Escorts in Your City</h2>
                        <p className="txt_seo">Sduko is home to the top-rated female escorts in India. You come to a number of
                            fresh classified ads for the sexy babes who are also eager to engage with you sexually. Get
                            ready to bang up hot escorts, transsexual, swinger meeting, gay escorts, and adult meeting in
                            your city.This is an open platform where pleasure seekers and escorts come to find their
                            interests. If you are not able to find your dream girls, create your profile and ask for the
                            services you are looking for. This is a highly visited adult classified ad portal that helps you
                            find out the babes you dream of. Post your classified ads for FREE if you don’t find a
                            perfect profile.</p>
                    </div>
                </div>
              
                <CategorySection/>
                <hr />
                <div className="w-100 acc mt-4">
                    <div className="accordion-acrd w-100 acc__card">
                        <div className="accordion acc__title">
                            <div className="accordian-title escorts">
                                <Link className="acc-left-span" href="/escort">
                                    <span className="icon-womenseekmen" />
                                    Escorts
                                </Link>
                            </div>
                        </div>
                        <div className="panel acc__panel">
                            <Link href="/escort">
                                Bangalore
                            </Link>
                            <Link href="/escort">
                                Delhi
                            </Link>
                            <Link href="/escort">
                                Mumbai
                            </Link>
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
                        <Link href="/escort">
                                Bangalore
                            </Link>
                            <Link href="/escort">
                                Delhi
                            </Link>
                            <Link href="/escort">
                                Mumbai
                            </Link>
                        </div>
                    </div>
                    <div className="accordion-acrd w-100 acc__card">
                        <div className="accordion acc__title">
                            <div className="accordian-title male-escorts">
                                <Link className="acc-left-span" href="/escort">
                                    <span className="icon-womenseekmen" />
                                    Male Escorts
                                </Link>
                            </div>
                        </div>
                        <div className="panel acc__panel">
                        <Link href="/escort">
                                Bangalore
                            </Link>
                            <Link href="/escort">
                                Delhi
                            </Link>
                            <Link href="/escort">
                                Mumbai
                            </Link>
                        </div>
                    </div>
                    <div className="accordion-acrd w-100 acc__card">
                        <div className="accordion acc__title">
                            <div className="accordian-title transsexual">
                                <Link className="acc-left-span" href="/escort">
                                    <span className="icon-womenseekmen" />
                                    Transsexual
                                </Link>
                            </div>
                        </div>
                        <div className="panel acc__panel">
                        <Link href="/escort">
                                Bangalore
                            </Link>
                            <Link href="/escort">
                                Delhi
                            </Link>
                            <Link href="/escort">
                                Mumbai
                            </Link>
                        </div>
                    </div>
                    <div className="accordion-acrd w-100 acc__card">
                        <div className="accordion acc__title">
                            <div className="accordian-title adult-meetings">
                                <Link className="acc-left-span" href="/escort">
                                    <span className="icon-womenseekmen" />
                                    Adult Meetings
                                </Link>
                            </div>
                        </div>
                        <div className="panel acc__panel">
                        <Link href="/escort">
                                Bangalore
                            </Link>
                            <Link href="/escort">
                                Delhi
                            </Link>
                            <Link href="/escort">
                                Mumbai
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HomeSection