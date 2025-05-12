import Script from "next/script";
import React from "react";
import 'aos/dist/aos.css'; // if using AOS library

const Careerspage = () => {
  return (
    <div
      data-rsssl="1"
      className="page-template page-template-careers page-template-careers-php page page-id-2697 has-header-image page-two-column colors-light careers"
      data-aos-easing="ease"
      data-aos-duration="450"
      data-aos-delay="0"
    >
      <div id="superdiv">
        <header id="header">
          <div className="cntHolder">
            <div className="container-fluid">
              <div className="logo pull-left">
                <a href="https://creativechaos.co">
                  <img
                    src="https://creativechaos.co/wp-content/themes/ccweb/images/creativechaos-logo-white-ni.svg"
                    alt="Creative Chaos"
                    className="logo-white"
                  />
                  <img
                    src="https://creativechaos.co/wp-content/themes/ccweb/images/creativechaos-logo-ni.svg"
                    alt="Creative Chaos"
                    className="logo-dark"
                  />
                </a>
              </div>

              <button className="overlayMenuButton pull-right">
                <span></span>
              </button>
            </div>
          </div>

          <div className="overlayMenu">
            <div className="menu-main-menu-container">
              <ul id="menu-main-menu" className="menu">
                <li
                  id="menu-item-22"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-22"
                >
                  <a href="https://creativechaos.co/services/">Services</a>
                </li>
                <li
                  id="menu-item-40"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-40"
                >
                  <a href="https://creativechaos.co/solutions/">Solutions</a>
                </li>
                <li
                  id="menu-item-771"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-771"
                >
                  <a href="https://creativechaos.co/process/">Process</a>
                </li>
                <li
                  id="menu-item-2632"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2632"
                >
                  <a href="https://creativechaos.co/clients/">Clients</a>
                </li>
                <li
                  id="menu-item-183"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-183"
                >
                  <a href="https://creativechaos.co/work/">Work</a>
                </li>
                <li
                  id="menu-item-186"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-186"
                >
                  <a href="https://creativechaos.co/insights/">Insights</a>
                </li>
                <li
                  id="menu-item-2723"
                  className="onlyPK menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-2697 current_page_item menu-item-2723"
                >
                  <a href="https://creativechaos.co/careers/">Careers</a>
                </li>
                <li
                  id="menu-item-988"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-988"
                >
                  <a href="https://creativechaos.co/contact-us/">Contact</a>
                </li>
              </ul>
            </div>{" "}
          </div>
        </header>

        <div
          id="innerBanner"
          className="careerBanner aos-init aos-animate zoomIn"
          data-aos="fade-up"
          style={{ minHeight: "306px" }}
        >
          <div className="bg">
            <div
              style={{
                backgroundImage:
                  "url('https://creativechaos.co/wp-content/themes/ccweb/images/header-careerspage.jpg')",
              }}
            ></div>
          </div>
          <div className="container-fluid">
            <div className="cntHolder col-md-8">
              <h6 className="subheading uppercase">Careers</h6>
              <h1 className="heading entry-title">
                Why blend in when you can stand out?
              </h1>
              <h1 className="heading entry-title">Careers</h1>
              <button
                className="btn btn-white btn-outline btn-cta f16 scrollDown nohover"
                data-target="#jobListing"
              >
                Current Openings
              </button>
              <a
                href="https://apply.workable.com/creativechaos/"
                className="btn btn-white btn-outline btn-cta f16 scrollDown nohover"
                target="_blank"
              >
                Current Openings
              </a>
              <div className="clearfix"></div>
              <div
                className="scrollDown pageScroller"
                data-target="#scrollHere"
              >
                <span className="cc-icon icon-arrow-down"></span>
              </div>
            </div>
          </div>
        </div>

        <div id="careersSection">
          <div id="content">
            <div id="scrollHere" className="careers clearfix">
              <div
                className="section featuredSection featuredSectionSlider aos-init"
                data-aos="slide-up"
              >
                <div className="container-fluid">
                  <div className="row">
                    <div className="visible-xs visible-sm">
                      <h2 className="heading txt-center">What's Happening</h2>
                      <div className="mblSlider text-center">
                        <div className="owl-carousel owl-loaded owl-drag">
                          <div
                            className="owl-stage-outer owl-height"
                            style={{ height: "0px" }}
                          >
                            <div
                              className="owl-stage"
                              style={{
                                transform:
                                  "translate3d(0px, 0px, 0px) transition: all",
                              }}
                            >
                              <div className="owl-item">
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url('https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-1.jpg')",
                                    }}
                                  ></div>
                                  <h3 className="subHeading">Club Chaos</h3>
                                  <div className="desc">
                                    <p>
                                      Club Chaos hosts fun-filled events
                                      throughout the year for associates to
                                      promote working and personal
                                      relationships.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="owl-item">
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url('https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-2.jpg')",
                                    }}
                                  ></div>
                                  <h3 className="subHeading">Social Lunch</h3>
                                  <div className="desc">
                                    <p>
                                      On the 3rd Friday of every month, 6
                                      associates are randomly selected to go on
                                      lunch - paid for by the company. Yes - we
                                      want you to have fun and meet associates
                                      from across the company who you may have
                                      never interacted with.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="owl-item">
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url('https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-3.jpg')",
                                    }}
                                  ></div>
                                  <h3 className="subHeading">
                                    Lunch &amp; Learn
                                  </h3>
                                  <div className="desc">
                                    <p>
                                      Lunch &amp; Learn is an opportunity for us
                                      to learn something new every week. Each
                                      week the session is from a different
                                      category. So you may learn something about
                                      finance one week, and something about
                                      project management or design another. We
                                      want to keep it exciting and diversified.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="owl-item">
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url('https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-4.jpg')",
                                    }}
                                  ></div>
                                  <h3 className="subHeading">Demo Day</h3>
                                  <div className="desc">
                                    <p>
                                      Demo Days are opportunities for teams
                                      working on a project to present the
                                      software solutions they’ve been working on
                                      and share their learnings. The team
                                      presents the client, the problem /
                                      business case, the technology, the
                                      challenges and how they overcame them.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="owl-item">
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url('https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-5.jpg')",
                                    }}
                                  ></div>
                                  <h3 className="subHeading">
                                    Associate Wellness Program
                                  </h3>
                                  <div className="desc">
                                    <p>
                                      We partner up with various medical and
                                      psychology experts to host a series of
                                      monthly sessions for all our associates so
                                      they can learn how to make healthy
                                      lifestyle choices.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="owl-item">
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url('https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-7.jpg')",
                                    }}
                                  ></div>
                                  <h3 className="subHeading">Newsletter</h3>
                                  <div className="desc">
                                    <p>
                                      Every month we publish an internal
                                      newsletter that rounds up news,
                                      announcements, interesting projects,
                                      journey of a star performer, and other
                                      pertinent information that’s important for
                                      all our associates to know.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="owl-item">
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url('https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-8.jpg')",
                                    }}
                                  ></div>
                                  <h3 className="subHeading">
                                    Company Annual Meetup
                                  </h3>
                                  <div className="desc">
                                    <p>
                                      Every year we have an annual meetup in
                                      Karachi since this is where we have the
                                      most associates. The Annual meetup is
                                      usually in a banquet hall over hi-tea or
                                      dinner. We typically have this event in
                                      July/August. The agenda is to go over
                                      company performance, highlight any
                                      significant achievements and honor any
                                      extraordinary performers. We also
                                      celebrate anyone who has worked with us
                                      for 5/10/15 years.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="owl-item">
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url('https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-9.jpg')",
                                    }}
                                  ></div>
                                  <h3 className="subHeading">
                                    The CC Exchange Program
                                  </h3>
                                  <div className="desc">
                                    <p>
                                      The Creative Chaos Exchange Program
                                      provides high performing associates in PK
                                      an opportunity to spend 2 weeks in our
                                      Boston office. Associates get to see a new
                                      place, check out the MIT / Harvard
                                      ecosystem and interact with the local
                                      community in their field of interest.
                                      There are hundreds of events that you can
                                      attend. You also get to work and spend
                                      time with our small Boston team.
                                    </p>
                                    <p>
                                      Note: This program will resume post-covid.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="owl-nav disabled">
                            <div className="owl-prev">prev</div>
                            <div className="owl-next">next</div>
                          </div>
                          <div className="owl-dots">
                            <div className="owl-dot active">
                              <span></span>
                            </div>
                            <div className="owl-dot">
                              <span></span>
                            </div>
                            <div className="owl-dot">
                              <span></span>
                            </div>
                            <div className="owl-dot">
                              <span></span>
                            </div>
                            <div className="owl-dot">
                              <span></span>
                            </div>
                            <div className="owl-dot">
                              <span></span>
                            </div>
                            <div className="owl-dot">
                              <span></span>
                            </div>
                            <div className="owl-dot">
                              <span></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="cntCol left col-md-6 col-smpt-12 hidden-xs hidden-sm">
                      <div className="bg">
                        <div className="owl-carousel owl-theme owl-loaded">
                          <div className="owl-stage-outer">
                            <div
                              className="owl-stage"
                              style={{
                                transform:
                                  "translate3d(-3288px, 0px, 0px); transition: all; width: 13152px",
                              }}
                            >
                              <div
                                className="owl-item cloned"
                                style={{ width: "822px" }}
                              >
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url(&quot;https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-5.jpg&quot;); height: 994px",
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <div
                                className="owl-item cloned"
                                style={{ width: "822px" }}
                              >
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url(&quot;https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-7.jpg&quot;), height: 994px",
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <div
                                className="owl-item cloned"
                                style={{ width: "822px" }}
                              >
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url(&quot;https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-8.jpg&quot;); height: 994px",
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <div
                                className="owl-item cloned"
                                style={{ width: "822px" }}
                              >
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url(&quot;https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-9.jpg&quot;); height: 994px",
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <div
                                className="owl-item active"
                                style={{ width: "822px" }}
                              >
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url(&quot;https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-1.jpg&quot;); height: 994px",
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <div
                                className="owl-item"
                                style={{ width: "822px" }}
                              >
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url(&quot;https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-2.jpg&quot;); height: 994px",
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <div
                                className="owl-item"
                                style={{ width: "822px" }}
                              >
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url(&quot;https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-3.jpg&quot;); height: 994px",
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <div
                                className="owl-item"
                                style={{ width: "822px" }}
                              >
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url(&quot;https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-4.jpg&quot;); height: 994px",
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <div
                                className="owl-item"
                                style={{ width: "822px" }}
                              >
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url(&quot;https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-5.jpg&quot;); height: 994px",
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <div
                                className="owl-item"
                                style={{ width: "822px" }}
                              >
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url(&quot;https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-7.jpg&quot;); height: 994px",
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <div
                                className="owl-item"
                                style={{ width: "822px" }}
                              >
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url(&quot;https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-8.jpg&quot;); height: 994px",
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <div
                                className="owl-item"
                                style={{ width: "822px" }}
                              >
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url(&quot;https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-9.jpg&quot;); height: 994px",
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <div
                                className="owl-item cloned"
                                style={{ width: "822px" }}
                              >
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url(&quot;https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-1.jpg&quot;); height: 994px",
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <div
                                className="owl-item cloned"
                                style={{ width: "822px" }}
                              >
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url(&quot;https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-2.jpg&quot;); height: 994px",
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <div
                                className="owl-item cloned"
                                style={{ width: "822px" }}
                              >
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url(&quot;https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-3.jpg&quot;); height: 994px",
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <div
                                className="owl-item cloned"
                                style={{ width: "822px" }}
                              >
                                <div className="item">
                                  <div
                                    className="bgHolder bgNoRepeat bgCover bgPosTopRight"
                                    style={{
                                      backgroundImage:
                                        "url(&quot;https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-happening-4.jpg&quot;); height: 994px",
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="owl-nav disabled">
                            <div className="owl-prev">prev</div>
                            <div className="owl-next">next</div>
                          </div>
                          <div className="owl-dots">
                            <div className="owl-dot active">
                              <span></span>
                            </div>
                            <div className="owl-dot">
                              <span></span>
                            </div>
                            <div className="owl-dot">
                              <span></span>
                            </div>
                            <div className="owl-dot">
                              <span></span>
                            </div>
                            <div className="owl-dot">
                              <span></span>
                            </div>
                            <div className="owl-dot">
                              <span></span>
                            </div>
                            <div className="owl-dot">
                              <span></span>
                            </div>
                            <div className="owl-dot">
                              <span></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cntHolder">
                        <h2 className="heading">
                          What's
                          <br /> Happening
                        </h2>
                        <div className="owl-carousel owl-loaded">
                          <div
                            className="owl-stage-outer owl-height"
                            style={{ height: "186px" }}
                          >
                            <div
                              className="owl-stage"
                              style={{
                                transform:
                                  "translate3d(-2676px, 0px, 0px); transition: all; width: 10704px",
                              }}
                            >
                              <div
                                className="owl-item cloned"
                                style={{ width: "669px" }}
                              >
                                <div className="item">
                                  <h3 className="subHeading">
                                    Associate Wellness Program
                                  </h3>
                                  <div className="desc">
                                    <p>
                                      We partner up with various medical and
                                      psychology experts to host a series of
                                      monthly sessions for all our associates so
                                      they can learn how to make healthy
                                      lifestyle choices.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="owl-item cloned"
                                style={{ width: "669px" }}
                              >
                                <div className="item">
                                  <h3 className="subHeading">Newsletter</h3>
                                  <div className="desc">
                                    <p>
                                      Every month we publish an internal
                                      newsletter that rounds up news,
                                      announcements, interesting projects,
                                      journey of a star performer, and other
                                      pertinent information that’s important for
                                      all our associates to know.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="owl-item cloned"
                                style={{ width: "669px" }}
                              >
                                <div className="item">
                                  <h3 className="subHeading">
                                    Company Annual Meetup
                                  </h3>
                                  <div className="desc">
                                    <p>
                                      Every year we have an annual meetup in
                                      Karachi since this is where we have the
                                      most associates. The Annual meetup is
                                      usually in a banquet hall over hi-tea or
                                      dinner. We typically have this event in
                                      July/August. The agenda is to go over
                                      company performance, highlight any
                                      significant achievements and honor any
                                      extraordinary performers. We also
                                      celebrate anyone who has worked with us
                                      for 5/10/15 years.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="owl-item cloned"
                                style={{ width: "669px" }}
                              >
                                <div className="item">
                                  <h3 className="subHeading">
                                    The CC Exchange Program
                                  </h3>
                                  <div className="desc">
                                    <p>
                                      The Creative Chaos Exchange Program
                                      provides high performing associates in PK
                                      an opportunity to spend 2 weeks in our
                                      Boston office. Associates get to see a new
                                      place, check out the MIT / Harvard
                                      ecosystem and interact with the local
                                      community in their field of interest.
                                      There are hundreds of events that you can
                                      attend. You also get to work and spend
                                      time with our small Boston team.
                                    </p>
                                    <p>
                                      Note: This program will resume post-covid.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="owl-item active"
                                style={{ width: "669px" }}
                              >
                                <div className="item">
                                  <h3 className="subHeading">Club Chaos</h3>
                                  <div className="desc">
                                    <p>
                                      Club Chaos hosts fun-filled events
                                      throughout the year for associates to
                                      promote working and personal
                                      relationships.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="owl-item"
                                style={{ width: "669px" }}
                              >
                                <div className="item">
                                  <h3 className="subHeading">Social Lunch</h3>
                                  <div className="desc">
                                    <p>
                                      On the 3rd Friday of every month, 6
                                      associates are randomly selected to go on
                                      lunch - paid for by the company. Yes - we
                                      want you to have fun and meet associates
                                      from across the company who you may have
                                      never interacted with.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="owl-item"
                                style={{ width: "669px" }}
                              >
                                <div className="item">
                                  <h3 className="subHeading">
                                    Lunch &amp; Learn
                                  </h3>
                                  <div className="desc">
                                    <p>
                                      Lunch &amp; Learn is an opportunity for us
                                      to learn something new every week. Each
                                      week the session is from a different
                                      category. So you may learn something about
                                      finance one week, and something about
                                      project management or design another. We
                                      want to keep it exciting and diversified.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="owl-item"
                                style={{ width: "669px" }}
                              >
                                <div className="item">
                                  <h3 className="subHeading">Demo Day</h3>
                                  <div className="desc">
                                    <p>
                                      Demo Days are opportunities for teams
                                      working on a project to present the
                                      software solutions they’ve been working on
                                      and share their learnings. The team
                                      presents the client, the problem /
                                      business case, the technology, the
                                      challenges and how they overcame them.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="owl-item"
                                style={{ width: "669px" }}
                              >
                                <div className="item">
                                  <h3 className="subHeading">
                                    Associate Wellness Program
                                  </h3>
                                  <div className="desc">
                                    <p>
                                      We partner up with various medical and
                                      psychology experts to host a series of
                                      monthly sessions for all our associates so
                                      they can learn how to make healthy
                                      lifestyle choices.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="owl-item"
                                style={{ width: "669px" }}
                              >
                                <div className="item">
                                  <h3 className="subHeading">Newsletter</h3>
                                  <div className="desc">
                                    <p>
                                      Every month we publish an internal
                                      newsletter that rounds up news,
                                      announcements, interesting projects,
                                      journey of a star performer, and other
                                      pertinent information that’s important for
                                      all our associates to know.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="owl-item"
                                style={{ width: "669px" }}
                              >
                                <div className="item">
                                  <h3 className="subHeading">
                                    Company Annual Meetup
                                  </h3>
                                  <div className="desc">
                                    <p>
                                      Every year we have an annual meetup in
                                      Karachi since this is where we have the
                                      most associates. The Annual meetup is
                                      usually in a banquet hall over hi-tea or
                                      dinner. We typically have this event in
                                      July/August. The agenda is to go over
                                      company performance, highlight any
                                      significant achievements and honor any
                                      extraordinary performers. We also
                                      celebrate anyone who has worked with us
                                      for 5/10/15 years.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="owl-item"
                                style={{ width: "669px" }}
                              >
                                <div className="item">
                                  <h3 className="subHeading">
                                    The CC Exchange Program
                                  </h3>
                                  <div className="desc">
                                    <p>
                                      The Creative Chaos Exchange Program
                                      provides high performing associates in PK
                                      an opportunity to spend 2 weeks in our
                                      Boston office. Associates get to see a new
                                      place, check out the MIT / Harvard
                                      ecosystem and interact with the local
                                      community in their field of interest.
                                      There are hundreds of events that you can
                                      attend. You also get to work and spend
                                      time with our small Boston team.
                                    </p>
                                    <p>
                                      Note: This program will resume post-covid.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="owl-item cloned"
                                style={{ width: "669px" }}
                              >
                                <div className="item">
                                  <h3 className="subHeading">Club Chaos</h3>
                                  <div className="desc">
                                    <p>
                                      Club Chaos hosts fun-filled events
                                      throughout the year for associates to
                                      promote working and personal
                                      relationships.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="owl-item cloned"
                                style={{ width: "669px" }}
                              >
                                <div className="item">
                                  <h3 className="subHeading">Social Lunch</h3>
                                  <div className="desc">
                                    <p>
                                      On the 3rd Friday of every month, 6
                                      associates are randomly selected to go on
                                      lunch - paid for by the company. Yes - we
                                      want you to have fun and meet associates
                                      from across the company who you may have
                                      never interacted with.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="owl-item cloned"
                                style={{ width: "669px" }}
                              >
                                <div className="item">
                                  <h3 className="subHeading">
                                    Lunch &amp; Learn
                                  </h3>
                                  <div className="desc">
                                    <p>
                                      Lunch &amp; Learn is an opportunity for us
                                      to learn something new every week. Each
                                      week the session is from a different
                                      category. So you may learn something about
                                      finance one week, and something about
                                      project management or design another. We
                                      want to keep it exciting and diversified.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="owl-item cloned"
                                style={{ width: "669px" }}
                              >
                                <div className="item">
                                  <h3 className="subHeading">Demo Day</h3>
                                  <div className="desc">
                                    <p>
                                      Demo Days are opportunities for teams
                                      working on a project to present the
                                      software solutions they’ve been working on
                                      and share their learnings. The team
                                      presents the client, the problem /
                                      business case, the technology, the
                                      challenges and how they overcame them.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="owl-nav">
                            <div className="owl-prev">
                              <span className="prev" title="previous">
                                <span className="sr-only">Previous</span>
                              </span>
                            </div>
                            <div className="owl-next">
                              <span className="next" title="next">
                                <span className="sr-only">Next</span>
                              </span>
                            </div>
                          </div>
                          <div className="owl-dots">
                            <div className="owl-dot active">
                              <span></span>
                            </div>
                            <div className="owl-dot">
                              <span></span>
                            </div>
                            <div className="owl-dot">
                              <span></span>
                            </div>
                            <div className="owl-dot">
                              <span></span>
                            </div>
                            <div className="owl-dot">
                              <span></span>
                            </div>
                            <div className="owl-dot">
                              <span></span>
                            </div>
                            <div className="owl-dot">
                              <span></span>
                            </div>
                            <div className="owl-dot">
                              <span></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section aos-init" data-aos="fade-up">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-11 col-center hdGroup txt-center">
                      <h2 className="heading">Employee Benefits</h2>
                      <h5 className="subHeading">
                        We value our employees' personal well-being and do our
                        best to create a healthy work-life balance.
                      </h5>
                    </div>
                  </div>

                  <div className="thumbGrid withIconsTitle compact">
                    <div
                      className="box col-md-3 col-xs-12 col-xsls-6 col-sm-3 col-smpt-6 aos-init"
                      data-aos="fade-up"
                      data-aos-delay="000000"
                      data-aos-once="true"
                    >
                      <div className="cntHolder">
                        <div className="thumb">
                          <img
                            src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-provident-fund.svg"
                            alt="Provident Fund"
                          />
                        </div>
                        <div className="cnt">
                          <h3 className="heading">Provident Fund</h3>
                          <p>
                            All our permanent and full-time associates are
                            eligible for the provident fund.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="box col-md-3 col-xs-12 col-xsls-6 col-sm-3 col-smpt-6 aos-init"
                      data-aos="fade-up"
                      data-aos-delay="100000"
                      data-aos-once="true"
                    >
                      <div className="cntHolder">
                        <div className="thumb">
                          <img
                            src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-paid-leaves.svg"
                            alt="Paid Leaves"
                          />
                        </div>
                        <div className="cnt">
                          <h3 className="heading">Paid Leaves</h3>
                          <p>
                            Employees are entitled to a certain number of
                            casual, sick, and annual leaves.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="box col-md-3 col-xs-12 col-xsls-6 col-sm-3 col-smpt-6 aos-init"
                      data-aos="fade-up"
                      data-aos-delay="200000"
                      data-aos-once="true"
                    >
                      <div className="cntHolder">
                        <div className="thumb">
                          <img
                            src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-life-insurance.svg"
                            alt="Health &amp; Life Insurance"
                          />
                        </div>
                        <div className="cnt">
                          <h3 className="heading">
                            Health &amp; Life Insurance
                          </h3>
                          <p>
                            All full-time associates and their dependent spouse
                            and children are covered.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="box col-md-3 col-xs-12 col-xsls-6 col-sm-3 col-smpt-6 aos-init"
                      data-aos="fade-up"
                      data-aos-delay="300000"
                      data-aos-once="true"
                    >
                      <div className="cntHolder">
                        <div className="thumb">
                          <img
                            src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-maternity.svg"
                            alt="Maternity &amp; Paternity Leave"
                          />
                        </div>
                        <div className="cnt">
                          <h3 className="heading">
                            Maternity &amp; Paternity Leave
                          </h3>
                          <p>
                            New or soon-to-be parents are given a certain number
                            of months off.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="box col-md-3 col-xs-12 col-xsls-6 col-sm-3 col-smpt-6 aos-init"
                      data-aos="fade-up"
                      data-aos-delay="400000"
                      data-aos-once="true"
                    >
                      <div className="cntHolder">
                        <div className="thumb">
                          <img
                            src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-talent-bonus.svg"
                            alt="Talent Referral Bonus"
                          />
                        </div>
                        <div className="cnt">
                          <h3 className="heading">Talent Referral Bonus</h3>
                          <p>
                            Associates are awarded a bonus upon confirmation of
                            a recommended candidate.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="box col-md-3 col-xs-12 col-xsls-6 col-sm-3 col-smpt-6 aos-init"
                      data-aos="fade-up"
                      data-aos-delay="500000"
                      data-aos-once="true"
                    >
                      <div className="cntHolder">
                        <div className="thumb">
                          <img
                            src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-steering-wheel.svg"
                            alt="Transportation Facilities"
                          />
                        </div>
                        <div className="cnt">
                          <h3 className="heading">Transportation Facilities</h3>
                          <p>
                            All our associates are given access to office vans
                            for their commute.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="box col-md-3 col-xs-12 col-xsls-6 col-sm-3 col-smpt-6 aos-init"
                      data-aos="fade-up"
                      data-aos-delay="600000"
                      data-aos-once="true"
                    >
                      <div className="cntHolder">
                        <div className="thumb">
                          <img
                            src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-car.svg"
                            alt="Car Allowance"
                          />
                        </div>
                        <div className="cnt">
                          <h3 className="heading">Car Allowance</h3>
                          <p>
                            A monthly car allowance is given to associates with
                            their salaries.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="box col-md-3 col-xs-12 col-xsls-6 col-sm-3 col-smpt-6 aos-init"
                      data-aos="fade-up"
                      data-aos-delay="700000"
                      data-aos-once="true"
                    >
                      <div className="cntHolder">
                        <div className="thumb">
                          <img
                            src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-salary.svg"
                            alt="Competitive Salary"
                          />
                        </div>
                        <div className="cnt">
                          <h3 className="heading">Competitive Salary</h3>
                          <p>
                            We offer a competitive salary and the opportunity to
                            earn an annual bonus.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="box col-md-3 col-xs-12 col-xsls-6 col-sm-3 col-smpt-6 aos-init"
                      data-aos="fade-up"
                      data-aos-delay="800000"
                      data-aos-once="true"
                    >
                      <div className="cntHolder">
                        <div className="thumb">
                          <img
                            src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-trainings.svg"
                            alt="Trainings"
                          />
                        </div>
                        <div className="cnt">
                          <h3 className="heading">Trainings</h3>
                          <p>
                            We cover 75% of all costs of the local trainings
                            that interest you and will help you professionally.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="box col-md-3 col-xs-12 col-xsls-6 col-sm-3 col-smpt-6 aos-init"
                      data-aos="fade-up"
                      data-aos-delay="900000"
                      data-aos-once="true"
                    >
                      <div className="cntHolder">
                        <div className="thumb">
                          <img
                            src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-certifications.svg"
                            alt="Certifications"
                          />
                        </div>
                        <div className="cnt">
                          <h3 className="heading">Certifications</h3>
                          <p>
                            We reimburse 100% of the cost of the exam fees of
                            any certification that will be beneficial to you and
                            the company, upon its successful clearance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="section testimonials bgorange white-txt aos-init"
                data-aos="fade-up"
              >
                <div className="container-fluid">
                  <div className="row">
                    <div className="testimonialSlider">
                      <div className="owl-carousel owl-loaded owl-drag">
                        <div className="owl-stage-outer">
                          <div
                            className="owl-stage"
                            style={{
                              transform:
                                "translate3d(-8220px, 0px, 0px); transition: 1s; width: 21920px",
                            }}
                          >
                            <div
                              className="owl-item cloned"
                              style={{ width: "1370px" }}
                            >
                              <div className="item">
                                <div className="col-md-10 col-center no-pad">
                                  <div className="col-md-4">
                                    <div className="headshot">
                                      <img
                                        src="https://creativechaos.co/wp-content/uploads/2023/02/Sushmita.png"
                                        alt="Sushmita Parkash"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-8">
                                    <div className="cntHolder">
                                      <div className="text">
                                        <p>
                                          I like the mindset and culture, and
                                          being part of a team that gives its
                                          best to make the next generation and
                                          bring forward new technology. For me,
                                          this is more than a job. I’m investing
                                          my time, my knowledge, and experience
                                          in a company that is investing in me.
                                        </p>
                                      </div>
                                      <div className="author">
                                        Sushmita Parkash
                                      </div>
                                      <div className="jobTitle">
                                        Senior Talent Acquisition Specialist
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: "1370px" }}
                            >
                              <div className="item">
                                <div className="col-md-10 col-center no-pad">
                                  <div className="col-md-4">
                                    <div className="headshot">
                                      <img
                                        src="https://creativechaos.co/wp-content/uploads/2023/02/Safdar.png"
                                        alt="Safder Qasim"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-8">
                                    <div className="cntHolder">
                                      <div className="text">
                                        <p>
                                          Since I joined Creative Chaos I never
                                          thought to leave this company as the
                                          culture, people, leadership, and each
                                          individual’s passion towards their
                                          work has always inspired me. This
                                          place is like a second home to me.
                                        </p>
                                      </div>
                                      <div className="author">Safder Qasim</div>
                                      <div className="jobTitle">
                                        DevOps Manager
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: "1370px" }}
                            >
                              <div className="item">
                                <div className="col-md-10 col-center no-pad">
                                  <div className="col-md-4">
                                    <div className="headshot">
                                      <img
                                        src="https://creativechaos.co/wp-content/uploads/2023/02/Zair.png"
                                        alt="Zair Abbas"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-8">
                                    <div className="cntHolder">
                                      <div className="text">
                                        <p>
                                          Creative Chaos is like home to me. I
                                          have great mentors, flexible timings,
                                          good culture, amazing projects to work
                                          on, and to top it off it's
                                          remote-first! Which saves you time for
                                          you and your family.
                                        </p>
                                      </div>
                                      <div className="author">Zair Abbas</div>
                                      <div className="jobTitle">
                                        Senior UI/UX Designer
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: "1370px" }}
                            >
                              <div className="item">
                                <div className="col-md-10 col-center no-pad">
                                  <div className="col-md-4">
                                    <div className="headshot">
                                      <img
                                        src="https://creativechaos.co/wp-content/uploads/2023/02/Aumehani.png"
                                        alt="Aum e Hani"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-8">
                                    <div className="cntHolder">
                                      <div className="text">
                                        <p>
                                          Creative Chaos is by far the most
                                          disciplined remote-first organization
                                          that has well-defined processes and
                                          ensures of getting the best out of
                                          everyone. Every day, I’m open to new
                                          opportunities where I feel I can
                                          contribute to raising the bar. There
                                          is no greater achievement than being
                                          part of a culture that strives for
                                          excellence.
                                        </p>
                                      </div>
                                      <div className="author">Aum e Hani</div>
                                      <div className="jobTitle">
                                        Senior Project Manager
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: "1370px" }}
                            >
                              <div className="item">
                                <div className="col-md-10 col-center no-pad">
                                  <div className="col-md-4">
                                    <div className="headshot">
                                      <img
                                        src="https://creativechaos.co/wp-content/uploads/2023/02/Zariab.png"
                                        alt="Zaryab Farooqui"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-8">
                                    <div className="cntHolder">
                                      <div className="text">
                                        <p>
                                          At CreativeChaos, everyday I get to
                                          experience a 'Eureka' moment.
                                        </p>
                                      </div>
                                      <div className="author">
                                        Zaryab Farooqui
                                      </div>
                                      <div className="jobTitle">
                                        UI Developer
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: "1370px" }}
                            >
                              <div className="item">
                                <div className="col-md-10 col-center no-pad">
                                  <div className="col-md-4">
                                    <div className="headshot">
                                      <img
                                        src="https://creativechaos.co/wp-content/uploads/2023/02/Nimra.png"
                                        alt="Nimra Shahid"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-8">
                                    <div className="cntHolder">
                                      <div className="text">
                                        <p>
                                          I've always wanted to work for a
                                          company that values its employees and
                                          pushes them to grow personally and
                                          professionally every day. Not a day
                                          has gone by that I haven't felt all of
                                          these things. I feel like my team is a
                                          family, and is always there to
                                          encourage me and help me up when I
                                          fall.
                                        </p>
                                      </div>
                                      <div className="author">Nimra Shahid</div>
                                      <div className="jobTitle">
                                        SQA Engineer
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item active"
                              style={{ width: "1370px" }}
                            >
                              <div className="item">
                                <div className="col-md-10 col-center no-pad">
                                  <div className="col-md-4">
                                    <div className="headshot">
                                      <img
                                        src="https://creativechaos.co/wp-content/uploads/2023/02/Nismah.png"
                                        alt="Nismah Saleem"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-8">
                                    <div className="cntHolder">
                                      <div className="text">
                                        <p>
                                          I learn something new every day,
                                          whether it is a skill or something
                                          related to self-growth. The
                                          employee-friendly culture makes
                                          day-to-day work life easier and the
                                          work-life balance prevails.
                                        </p>
                                      </div>
                                      <div className="author">
                                        Nismah Saleem
                                      </div>
                                      <div className="jobTitle">
                                        Senior Software Engineer
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: "1370px" }}
                            >
                              <div className="item">
                                <div className="col-md-10 col-center no-pad">
                                  <div className="col-md-4">
                                    <div className="headshot">
                                      <img
                                        src="https://creativechaos.co/wp-content/uploads/2023/02/Eman.png"
                                        alt="Eman Arbab"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-8">
                                    <div className="cntHolder">
                                      <div className="text">
                                        <p>
                                          With the varied projects, our diverse
                                          team members, and of course, the fast
                                          evolving UX landscape we work in,
                                          research and execution work never gets
                                          old. It's a gift to be able to work
                                          with so many talented and passionate
                                          people, one that I am very grateful
                                          for.
                                        </p>
                                      </div>
                                      <div className="author">Eman Arbab</div>
                                      <div className="jobTitle">
                                        UX Strategy Associate
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: "1370px" }}
                            >
                              <div className="item">
                                <div className="col-md-10 col-center no-pad">
                                  <div className="col-md-4">
                                    <div className="headshot">
                                      <img
                                        src="https://creativechaos.co/wp-content/uploads/2023/02/Sushmita.png"
                                        alt="Sushmita Parkash"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-8">
                                    <div className="cntHolder">
                                      <div className="text">
                                        <p>
                                          I like the mindset and culture, and
                                          being part of a team that gives its
                                          best to make the next generation and
                                          bring forward new technology. For me,
                                          this is more than a job. I’m investing
                                          my time, my knowledge, and experience
                                          in a company that is investing in me.
                                        </p>
                                      </div>
                                      <div className="author">
                                        Sushmita Parkash
                                      </div>
                                      <div className="jobTitle">
                                        Senior Talent Acquisition Specialist
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: "1370px" }}
                            >
                              <div className="item">
                                <div className="col-md-10 col-center no-pad">
                                  <div className="col-md-4">
                                    <div className="headshot">
                                      <img
                                        src="https://creativechaos.co/wp-content/uploads/2023/02/Safdar.png"
                                        alt="Safder Qasim"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-8">
                                    <div className="cntHolder">
                                      <div className="text">
                                        <p>
                                          Since I joined Creative Chaos I never
                                          thought to leave this company as the
                                          culture, people, leadership, and each
                                          individual’s passion towards their
                                          work has always inspired me. This
                                          place is like a second home to me.
                                        </p>
                                      </div>
                                      <div className="author">Safder Qasim</div>
                                      <div className="jobTitle">
                                        DevOps Manager
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: "1370px" }}
                            >
                              <div className="item">
                                <div className="col-md-10 col-center no-pad">
                                  <div className="col-md-4">
                                    <div className="headshot">
                                      <img
                                        src="https://creativechaos.co/wp-content/uploads/2023/02/Zair.png"
                                        alt="Zair Abbas"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-8">
                                    <div className="cntHolder">
                                      <div className="text">
                                        <p>
                                          Creative Chaos is like home to me. I
                                          have great mentors, flexible timings,
                                          good culture, amazing projects to work
                                          on, and to top it off it's
                                          remote-first! Which saves you time for
                                          you and your family.
                                        </p>
                                      </div>
                                      <div className="author">Zair Abbas</div>
                                      <div className="jobTitle">
                                        Senior UI/UX Designer
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: "1370px" }}
                            >
                              <div className="item">
                                <div className="col-md-10 col-center no-pad">
                                  <div className="col-md-4">
                                    <div className="headshot">
                                      <img
                                        src="https://creativechaos.co/wp-content/uploads/2023/02/Aumehani.png"
                                        alt="Aum e Hani"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-8">
                                    <div className="cntHolder">
                                      <div className="text">
                                        <p>
                                          Creative Chaos is by far the most
                                          disciplined remote-first organization
                                          that has well-defined processes and
                                          ensures of getting the best out of
                                          everyone. Every day, I’m open to new
                                          opportunities where I feel I can
                                          contribute to raising the bar. There
                                          is no greater achievement than being
                                          part of a culture that strives for
                                          excellence.
                                        </p>
                                      </div>
                                      <div className="author">Aum e Hani</div>
                                      <div className="jobTitle">
                                        Senior Project Manager
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: "1370px" }}
                            >
                              <div className="item">
                                <div className="col-md-10 col-center no-pad">
                                  <div className="col-md-4">
                                    <div className="headshot">
                                      <img
                                        src="https://creativechaos.co/wp-content/uploads/2023/02/Zariab.png"
                                        alt="Zaryab Farooqui"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-8">
                                    <div className="cntHolder">
                                      <div className="text">
                                        <p>
                                          At CreativeChaos, everyday I get to
                                          experience a 'Eureka' moment.
                                        </p>
                                      </div>
                                      <div className="author">
                                        Zaryab Farooqui
                                      </div>
                                      <div className="jobTitle">
                                        UI Developer
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: "1370px" }}
                            >
                              <div className="item">
                                <div className="col-md-10 col-center no-pad">
                                  <div className="col-md-4">
                                    <div className="headshot">
                                      <img
                                        src="https://creativechaos.co/wp-content/uploads/2023/02/Nimra.png"
                                        alt="Nimra Shahid"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-8">
                                    <div className="cntHolder">
                                      <div className="text">
                                        <p>
                                          I've always wanted to work for a
                                          company that values its employees and
                                          pushes them to grow personally and
                                          professionally every day. Not a day
                                          has gone by that I haven't felt all of
                                          these things. I feel like my team is a
                                          family, and is always there to
                                          encourage me and help me up when I
                                          fall.
                                        </p>
                                      </div>
                                      <div className="author">Nimra Shahid</div>
                                      <div className="jobTitle">
                                        SQA Engineer
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: "1370px" }}
                            >
                              <div className="item">
                                <div className="col-md-10 col-center no-pad">
                                  <div className="col-md-4">
                                    <div className="headshot">
                                      <img
                                        src="https://creativechaos.co/wp-content/uploads/2023/02/Nismah.png"
                                        alt="Nismah Saleem"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-8">
                                    <div className="cntHolder">
                                      <div className="text">
                                        <p>
                                          I learn something new every day,
                                          whether it is a skill or something
                                          related to self-growth. The
                                          employee-friendly culture makes
                                          day-to-day work life easier and the
                                          work-life balance prevails.
                                        </p>
                                      </div>
                                      <div className="author">
                                        Nismah Saleem
                                      </div>
                                      <div className="jobTitle">
                                        Senior Software Engineer
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: "1370px" }}
                            >
                              <div className="item">
                                <div className="col-md-10 col-center no-pad">
                                  <div className="col-md-4">
                                    <div className="headshot">
                                      <img
                                        src="https://creativechaos.co/wp-content/uploads/2023/02/Eman.png"
                                        alt="Eman Arbab"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-8">
                                    <div className="cntHolder">
                                      <div className="text">
                                        <p>
                                          With the varied projects, our diverse
                                          team members, and of course, the fast
                                          evolving UX landscape we work in,
                                          research and execution work never gets
                                          old. It's a gift to be able to work
                                          with so many talented and passionate
                                          people, one that I am very grateful
                                          for.
                                        </p>
                                      </div>
                                      <div className="author">Eman Arbab</div>
                                      <div className="jobTitle">
                                        UX Strategy Associate
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-dots">
                          <div className="owl-dot">
                            <span></span>
                          </div>
                          <div className="owl-dot">
                            <span></span>
                          </div>
                          <div className="owl-dot active">
                            <span></span>
                          </div>
                          <div className="owl-dot">
                            <span></span>
                          </div>
                          <div className="owl-dot">
                            <span></span>
                          </div>
                          <div className="owl-dot">
                            <span></span>
                          </div>
                          <div className="owl-dot">
                            <span></span>
                          </div>
                          <div className="owl-dot">
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-10 col-center">
                      <div className="col-md-offset-4">
                        <div className="owl-nav-cs">
                          <div className="owl-prev">
                            <span className="prev" title="previous">
                              <span className="sr-only">Previous</span>
                            </span>
                          </div>
                          <div className="owl-next">
                            <span className="next" title="next">
                              <span className="sr-only">Next</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="section ourjobvalues bgpurple white-txt no-mag aos-init"
                data-aos="fade-up"
              >
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-10 col-lg-8 col-center">
                      <div className="hdGroup txt-center">
                        <h2 className="heading">Are You the Perfect Fit?</h2>
                        <h5 className="subHeading">
                          We look for certain qualities in the talent we hire
                          because for us, our associates embody and build the
                          culture we are so proud of.
                        </h5>
                      </div>

                      <div className="ourValuesTabs">
                        <div className="tab-content">
                          <div
                            role="tabpanel"
                            className="tab-pane fade in active"
                            id="judgement"
                          >
                            <div className="col-md-8 col-xs-12 col-sm-8">
                              <div className="cntHolder">
                                <h3 className="heading">Judgement</h3>
                                <ul>
                                  <li>
                                    You make wise decisions (people, technical,
                                    business, and creative) despite ambiguity
                                  </li>
                                  <li>
                                    You identify root causes, and get beyond
                                    treating symptoms
                                  </li>
                                  <li>
                                    You think strategically, and can articulate
                                    what you are, and are not, trying to do
                                  </li>
                                  <li>
                                    You smartly separate what must be done well
                                    now, and what can be improved later
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              className="graphic bgCover bgPosCenter no-repeat hidden-xs"
                              style={{
                                backgroundImage:
                                  "url('https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-perfect-fit-1.jpg')",
                              }}
                            ></div>
                          </div>

                          <div
                            role="tabpanel"
                            className="tab-pane fade"
                            id="curiosity"
                          >
                            <div className="col-md-8 col-xs-12 col-sm-8">
                              <div className="cntHolder">
                                <h3 className="heading">Curiosity</h3>
                                <ul>
                                  <li>You learn rapidly and eagerly</li>
                                  <li>
                                    You seek to understand our strategy, market,
                                    customers, and partners
                                  </li>
                                  <li>
                                    You are broadly knowledgeable about
                                    business, technology and digital
                                  </li>
                                  <li>
                                    You contribute effectively outside of your
                                    specialty
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              className="graphic bgCover bgPosCenter no-repeat hidden-xs"
                              style={{
                                backgroundImage:
                                  "url('https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-perfect-fit-2.jpg')",
                              }}
                            ></div>
                          </div>

                          <div
                            role="tabpanel"
                            className="tab-pane fade"
                            id="passion"
                          >
                            <div className="col-md-8 col-xs-12 col-sm-8">
                              <div className="cntHolder">
                                <h3 className="heading">Passion</h3>
                                <ul>
                                  <li>
                                    You inspire others with your thirst for
                                    excellence
                                  </li>
                                  <li>
                                    You care intensely about Creative Chaos’
                                    success
                                  </li>
                                  <li>You are determined and tenacious</li>
                                </ul>
                              </div>
                            </div>
                            <div
                              className="graphic bgCover bgPosCenter no-repeat hidden-xs"
                              style={{
                                backgroundImage:
                                  "url('https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-perfect-fit-3.jpg')",
                              }}
                            ></div>
                          </div>

                          <div
                            role="tabpanel"
                            className="tab-pane fade"
                            id="innovation"
                          >
                            <div className="col-md-8 col-xs-12 col-sm-8">
                              <div className="cntHolder">
                                <h3 className="heading">Innovation</h3>
                                <ul>
                                  <li>
                                    You re-conceptualize issues to discover
                                    practical solutions to hard problems
                                  </li>
                                  <li>
                                    You challenge prevailing assumptions when
                                    warranted, and suggest better approaches
                                  </li>
                                  <li>
                                    You create new ideas that prove useful
                                  </li>
                                  <li>
                                    You keep us nimble by minimizing complexity
                                    and finding time to simplify
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              className="graphic bgCover bgPosCenter no-repeat hidden-xs"
                              style={{
                                backgroundImage:
                                  "url('https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-perfect-fit-4.jpg')",
                              }}
                            ></div>
                          </div>

                          <div
                            role="tabpanel"
                            className="tab-pane fade"
                            id="communication"
                          >
                            <div className="col-md-8 col-xs-12 col-sm-8">
                              <div className="cntHolder">
                                <h3 className="heading">Communication</h3>
                                <ul>
                                  <li>
                                    You are concise and articulate in speech and
                                    writing
                                  </li>
                                  <li>
                                    You listen well, instead of reacting fast,
                                    so you can better understand
                                  </li>
                                  <li>
                                    You can confidently discuss, debate and
                                    resolve a situation with a client
                                  </li>
                                  <li>
                                    You treat people with respect independent of
                                    their status or disagreement with you
                                  </li>
                                  <li>
                                    You maintain calm poise in stressful
                                    situations
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              className="graphic bgCover bgPosCenter no-repeat hidden-xs"
                              style={{
                                backgroundImage:
                                  "url('https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-perfect-fit-5.jpg')",
                              }}
                            ></div>
                          </div>

                          <div
                            role="tabpanel"
                            className="tab-pane fade"
                            id="honesty"
                          >
                            <div className="col-md-8 col-xs-12 col-sm-8">
                              <div className="cntHolder">
                                <h3 className="heading">Honesty</h3>
                                <ul>
                                  <li>
                                    You are known for candor and directness
                                  </li>
                                  <li>
                                    You are non-political when you disagree with
                                    others
                                  </li>
                                  <li>
                                    You only say things about fellow employees
                                    you will say to their face
                                  </li>
                                  <li>You are quick to admit mistakes</li>
                                </ul>
                              </div>
                            </div>
                            <div
                              className="graphic bgCover bgPosCenter no-repeat hidden-xs"
                              style={{
                                backgroundImage:
                                  "url('https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-perfect-fit-6.jpg')",
                              }}
                            ></div>
                          </div>

                          <div
                            role="tabpanel"
                            className="tab-pane fade"
                            id="impact"
                          >
                            <div className="col-md-8 col-xs-12 col-sm-8">
                              <div className="cntHolder">
                                <h3 className="heading">Impact</h3>
                                <ul>
                                  <li>
                                    You accomplish amazing amounts of important
                                    work
                                  </li>
                                  <li>
                                    You demonstrate consistently strong
                                    performance so colleagues can rely upon you
                                  </li>
                                  <li>
                                    You focus on great results rather than on
                                    process
                                  </li>
                                  <li>
                                    You exhibit bias-to-action, and avoid
                                    analysis-paralysis
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              className="graphic bgCover bgPosCenter no-repeat hidden-xs"
                              style={{
                                backgroundImage:
                                  "url('https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-perfect-fit-7.jpg')",
                              }}
                            ></div>
                          </div>

                          <div
                            role="tabpanel"
                            className="tab-pane fade"
                            id="courage"
                          >
                            <div className="col-md-8 col-xs-12 col-sm-8">
                              <div className="cntHolder">
                                <h3 className="heading">Courage</h3>
                                <ul>
                                  <li>
                                    You say what you think even if it is
                                    controversial
                                  </li>
                                  <li>
                                    You make tough decisions without excessive
                                    agonizing
                                  </li>
                                  <li>You do not shy from taking ownership</li>
                                  <li>You take smart risks</li>
                                  <li>
                                    You question actions inconsistent with our
                                    values
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              className="graphic bgCover bgPosCenter no-repeat hidden-xs"
                              style={{
                                backgroundImage:
                                  "url('https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-perfect-fit-8.jpg')",
                              }}
                            ></div>
                          </div>

                          <div
                            role="tabpanel"
                            className="tab-pane fade"
                            id="selflessness"
                          >
                            <div className="col-md-8 col-xs-12 col-sm-8">
                              <div className="cntHolder">
                                <h3 className="heading">Selflessness</h3>
                                <ul>
                                  <li>
                                    You seek what is best for Creative Chaos,
                                    rather than best for yourself or your group
                                  </li>
                                  <li>
                                    You are ego-less when searching for the best
                                    ideas
                                  </li>
                                  <li>You make time to help colleagues</li>
                                  <li>
                                    You share information openly and proactively
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              className="graphic bgCover bgPosCenter no-repeat hidden-xs"
                              style={{
                                backgroundImage:
                                  "url('https://creativechaos.co/wp-content/uploads/2021/08/cc-careers-perfect-fit-9.jpg')",
                              }}
                            ></div>
                          </div>
                        </div>

                        <ul className="navTabs" role="tablist">
                          <li role="presentation" className="active">
                            <a
                              href="#judgement"
                              aria-controls="judgement"
                              role="tab"
                              data-toggle="tab"
                            >
                              Judgement
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              href="#curiosity"
                              aria-controls="curiosity"
                              role="tab"
                              data-toggle="tab"
                            >
                              Curiosity
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              href="#passion"
                              aria-controls="passion"
                              role="tab"
                              data-toggle="tab"
                            >
                              Passion
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              href="#innovation"
                              aria-controls="innovation"
                              role="tab"
                              data-toggle="tab"
                            >
                              Innovation
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              href="#communication"
                              aria-controls="communication"
                              role="tab"
                              data-toggle="tab"
                            >
                              Communication
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              href="#honesty"
                              aria-controls="honesty"
                              role="tab"
                              data-toggle="tab"
                            >
                              Honesty
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              href="#impact"
                              aria-controls="impact"
                              role="tab"
                              data-toggle="tab"
                            >
                              Impact
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              href="#courage"
                              aria-controls="courage"
                              role="tab"
                              data-toggle="tab"
                            >
                              Courage
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              href="#selflessness"
                              aria-controls="selflessness"
                              role="tab"
                              data-toggle="tab"
                            >
                              Selflessness
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="jobListing" className="section no-mag">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-9 col-center">
                      <div className="hdGroup txt-center">
                        <h2 className="heading">
                          Are You Ready to Take on New Challenges?
                        </h2>
                        <h5 className="subHeading">
                          We have multiple job openings ranging from software
                          engineers to technical recruiters. Search and apply
                          for our current openings today.
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center text-center">
                    <a
                      href="https://apply.workable.com/creativechaos/"
                      target="_blank"
                      className="btn btn-ccbrand"
                    >
                      View Current Openings
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer id="footer">
          <div
            className="ftrCalltoaction"
            style={{
              backgroundImage:
                "url('https://creativechaos.co/wp-content/uploads/2018/04/footerbg.jpg')",
            }}
          >
            <div className="container-fluid">
              <div className="cntHolder">
                <h6 className="subheading uppercase">Get in Touch</h6>{" "}
                <h2 className="heading h1">Let's Build Together</h2>
                <a
                  href="https://creativechaos.co/contact-us/"
                  className="lnk-calltoaction f12 btn btn-primary"
                >
                  Talk to us{" "}
                  <span className="cc-icon icon-arrow-right-blue"></span>
                </a>
              </div>
            </div>
          </div>

          <div className="footerContent">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="socialPlugs onlyPK">
                    <a
                      href="https://www.linkedin.com/company/creative-chaos/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>

                    <a
                      href="https://www.instagram.com/creativechaospk/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>

                    <a
                      href="https://web.facebook.com/CreativeChaosPK"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>

                    <a
                      href="https://www.youtube.com/@creativechaos3152"
                      target="_blank"
                    >
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 pull-right">
                  <div className="copyright txt-right">
                    © 2025 Creative Chaos.{" "}
                    <a href="https://creativechaos.co/privacy-policy/">
                      Privacy Policy
                    </a>{" "}
                    |{" "}
                    <a href="https://creativechaos.co/terms-and-conditions/">
                      Terms &amp; Conditions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <script
        type="text/javascript"
        src="https://creativechaos.co/wp-includes/js/jquery/jquery.js"
      ></script>
      <Script id="wpcf7-config" strategy="beforeInteractive">
        {`
          var wpcf7 = {
            "apiSettings": {
              "root": "https://creativechaos.co/wp-json/contact-form-7/v1",
              "namespace": "contact-form-7/v1"
            },
            "recaptcha": {
              "messages": {
                "empty": "Please verify that you are not a robot."
              }
            },
            "cached": "1"
          };
        `}
      </Script>
      <script
        type="text/javascript"
        src="https://creativechaos.co/wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=5.0.4"
      ></script>
      <script
        type="text/javascript"
        src="https://creativechaos.co/wp-content/themes/ccweb/js/settings.min.js?ver=2.1"
      ></script>
      <script
        type="text/javascript"
        src="https://creativechaos.co/wp-includes/js/wp-embed.min.js?ver=4.9.26"
      ></script>
    </div>
  );
};

export default Careerspage;
