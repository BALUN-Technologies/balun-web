import Script from "next/script";
import React from "react";
import "aos/dist/aos.css"; // if using AOS library

const AutomationPage = () => {
  return (
    <div
      data-rsssl="1"
      className="page-template-default page page-id-29 has-header-image page-two-column colors-light experience-design"
      data-aos-easing="ease"
      data-aos-duration="450"
      data-aos-delay="0"
      style={{ paddingTop: "86px" }}
    >
      <div id="superdiv">
        <header id="header" className="darkLogo">
          <div className="cntHolder">
            <div className="container-fluid">
              <div className="logo pull-left">
                <a href="https://creativechaos.co">
                  <img
                    src="./logo.png"
                    alt="Creative Chaos"
                    className="logo-white"
                  />
                  <img
                    src="./logo.png"
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
                  <a href="./services/">Services</a>
                </li>
                <li
                  id="menu-item-40"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-40"
                >
                  <a href="./solutions/">Solutions</a>
                </li>
                <li
                  id="menu-item-771"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-771"
                >
                  <a href="./process/">Process</a>
                </li>
                <li
                  id="menu-item-2632"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2632"
                >
                  <a href="./clients/">Clients</a>
                </li>
                <li
                  id="menu-item-183"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-183"
                >
                  <a href="./work/">Work</a>
                </li>
                <li
                  id="menu-item-186"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-186"
                >
                  <a href="./insights/">Insights</a>
                </li>
                <li
                  id="menu-item-2723"
                  className="onlyPK menu-item menu-item-type-post_type menu-item-object-page menu-item-2723"
                >
                  <a href="./careers/">Careers</a>
                </li>
                <li
                  id="menu-item-988"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-988"
                >
                  <a href="./contact-us/">Contact</a>
                </li>
              </ul>
            </div>{" "}
          </div>
        </header>

        <div
          id="pageHeading"
          data-aos="fade-up"
          className="aos-init aos-animate"
          style={{ minHeight: "220px" }}
        >
          <div className="container-fluid">
            <div
              className="row parentContentHolder"
              style={{ minHeight: "220px" }}
            >
              <div className="childContentHolder col-md-12">
                <div className="cntHolder">
                  <h6 className="pageTitle">AI & ML Automation</h6>
                  <h1 className="heading">
                    AI & ML Solutions for a Smarter Tomorrow
                    {/* <br className="brDp"/> to Impress &amp; Inspire					 */}
                  </h1>
                  <h4 className="subHeading">
                    Automate processes and uncover insights using artificial
                    intelligence and machine learning.{" "}
                  </h4>
                  <div className="scrollDown" data-target="#scrollHere">
                    <span className="cc-icon icon-arrow-down"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="content">
          <div id="scrollHere">
            {/* <div className="section heroSection sectionWbg bgCover bgPosBtmLeft aos-init aos-animate" style={{backgroundImage: "url('https://creativechaos.co/wp-content/uploads/2018/04/f-exp_des.jpg')"}} data-aos="fade-up">
			<div className="container-fluid">
				<div className="cntHolder">
					<div className="row">
						<div className="col-lg-5">
							<p>We are inspired by design thinking and run design sprints to rapidly ideate and iterate designs, prototypes, and create experiences that convert. We help you create an experience that impresses and inspires.</p>
							<br/>
						</div>
					</div>
				</div>
			</div>
		</div> */}

            <div className="section aos-init" data-aos="fade-up">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-11 col-center hdGroup txt-center">
                    <h2 className="heading">
                      Our Real World AI & ML Innovations
                    </h2>
                    <h5 className="subHeading">
                      AI & ML Successfully completed projects.
                    </h5>
                  </div>
                </div>

                <div className="thumbGrid withIconsTitle">
                  <div
                    className="box col-md-3 col-xs-12 col-xsls-6 col-sm-3 aos-init"
                    data-aos="fade-up"
                    data-aos-delay="000000"
                    data-aos-once="true"
                  >
                    <div className="cntHolder">
                      <div className="thumb">
                        <img
                          src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-exp-1.svg"
                          alt="Customer  Insights"
                        />
                      </div>
                      <div className="cnt">
                        <h3 className="heading">
                          Customer <br /> Insights
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="box col-md-3 col-xs-12 col-xsls-6 col-sm-3 aos-init"
                    data-aos="fade-up"
                    data-aos-delay="100000"
                    data-aos-once="true"
                  >
                    <div className="cntHolder">
                      <div className="thumb">
                        <img
                          src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-exp-2.svg"
                          alt="Competitive Landscape"
                        />
                      </div>
                      <div className="cnt">
                        <h3 className="heading">
                          Competitive <br /> Landscape
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="box col-md-3 col-xs-12 col-xsls-6 col-sm-3 aos-init"
                    data-aos="fade-up"
                    data-aos-delay="200000"
                    data-aos-once="true"
                  >
                    <div className="cntHolder">
                      <div className="thumb">
                        <img
                          src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-exp-3.svg"
                          alt="Personas"
                        />
                      </div>
                      <div className="cnt">
                        <h3 className="heading">Personas</h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="box col-md-3 col-xs-12 col-xsls-6 col-sm-3 aos-init"
                    data-aos="fade-up"
                    data-aos-delay="300000"
                    data-aos-once="true"
                  >
                    <div className="cntHolder">
                      <div className="thumb">
                        <img
                          src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-exp-4.svg"
                          alt="Journey"
                        />
                      </div>
                      <div className="cnt">
                        <h3 className="heading">Journey</h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="box col-md-3 col-xs-12 col-xsls-6 col-sm-3 aos-init"
                    data-aos="fade-up"
                    data-aos-delay="400000"
                    data-aos-once="true"
                  >
                    <div className="cntHolder">
                      <div className="thumb">
                        <img
                          src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-exp-8.svg"
                          alt="Branding"
                        />
                      </div>
                      <div className="cnt">
                        <h3 className="heading">Branding</h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="box col-md-3 col-xs-12 col-xsls-6 col-sm-3 aos-init"
                    data-aos="fade-up"
                    data-aos-delay="500000"
                    data-aos-once="true"
                  >
                    <div className="cntHolder">
                      <div className="thumb">
                        <img
                          src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-exp-5.svg"
                          alt="Wireframes"
                        />
                      </div>
                      <div className="cnt">
                        <h3 className="heading">Wireframes</h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="box col-md-3 col-xs-12 col-xsls-6 col-sm-3 aos-init"
                    data-aos="fade-up"
                    data-aos-delay="600000"
                    data-aos-once="true"
                  >
                    <div className="cntHolder">
                      <div className="thumb">
                        <img
                          src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-exp-6.svg"
                          alt="Visual Designs"
                        />
                      </div>
                      <div className="cnt">
                        <h3 className="heading">
                          Visual <br /> Designs
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="box col-md-3 col-xs-12 col-xsls-6 col-sm-3 aos-init"
                    data-aos="fade-up"
                    data-aos-delay="700000"
                    data-aos-once="true"
                  >
                    <div className="cntHolder">
                      <div className="thumb">
                        <img
                          src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-exp-7.svg"
                          alt="Prototype"
                        />
                      </div>
                      <div className="cnt">
                        <h3 className="heading">Prototype</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="section bgNoRepeat bgPosTopCenter bgpurple bgCover aos-init"
              style={{
                backgroundImage:
                  "url('https://creativechaos.co/wp-content/themes/ccweb/images/purple-bg.png')",
              }}
              data-aos="fade-up"
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-11 col-center hdGroup white-txt txt-center">
                    <h2 className="heading">
                      Harness the Power of Intelligent Automation
                    </h2>
                    <h5 className="subHeading">
                      AI and Machine Learning are transforming industries across
                      the globe. We help businesses unlock new opportunities by
                      integrating AI & ML solutions that optimize operations,
                      enhance decision-making, and create remarkable customer
                      experiences. Whether it’s predicting future trends or
                      automating complex processes, we’re here to drive your
                      business forward.
                    </h5>
                  </div>
                </div>

                <div className="waveGrid col-center">
                  <div className="box titleBtm">
                    <div className="icon">
                      <img
                        src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-des-1.svg"
                        alt=""
                      />
                    </div>
                    <div className="title">Understand</div>
                  </div>

                  <div className="box titleTop">
                    <div className="icon">
                      <img
                        src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-des-2.svg"
                        alt=""
                      />
                    </div>
                    <div className="title">Diverge</div>
                  </div>

                  <div className="box titleBtm">
                    <div className="icon">
                      <img
                        src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-des-3.svg"
                        alt=""
                      />
                    </div>
                    <div className="title">Decide</div>
                  </div>

                  <div className="box titleTop">
                    <div className="icon">
                      <img
                        src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-des-4.svg"
                        alt=""
                      />
                    </div>
                    <div className="title">Prototype</div>
                  </div>

                  <div className="box titleBtm">
                    <div className="icon">
                      <img
                        src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-des-5.svg"
                        alt=""
                      />
                    </div>
                    <div className="title">Validate</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section aos-init" data-aos="fade-up">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-11 col-center hdGroup txt-center">
                    <h2 className="heading">What's Your UX Dilemma?</h2>
                    <h5 className="subHeading">
                      Our design thinking process allows us to help solve a
                      variety of usecases
                    </h5>
                  </div>
                </div>

                <div className="thumbGrid colGrid">
                  <div
                    className="box col-md-6 col-xs-12 col-xsls-6 col-sm-6 brd-rht brd-btm mbl-nobrd aos-init"
                    data-aos="fade-up"
                    data-aos-delay="000000"
                    data-aos-once="true"
                  >
                    <div className="cntHolder">
                      <div className="thumb botMag-0">
                        <img
                          src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-idf-1.svg"
                          alt=""
                        />
                      </div>
                      <div className="cnt col-md-7 col-center">
                        <p className="f20 medium">
                          Digital experience is stale
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="box col-md-6 col-xs-12 col-xsls-6 col-sm-6 brd-btm mbl-nobrd aos-init"
                    data-aos="fade-up"
                    data-aos-delay="100000"
                    data-aos-once="true"
                  >
                    <div className="cntHolder">
                      <div className="thumb botMag-0">
                        <img
                          src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-idf-2.svg"
                          alt=""
                        />
                      </div>
                      <div className="cnt col-md-7 col-center">
                        <p className="f20 medium">
                          Need a web and digital overhaul
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="box col-md-6 col-xs-12 col-xsls-6 col-sm-6 brd-rht mbl-nobrd aos-init"
                    data-aos="fade-up"
                    data-aos-delay="200000"
                    data-aos-once="true"
                  >
                    <div className="cntHolder">
                      <div className="thumb botMag-0">
                        <img
                          src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-idf-3.svg"
                          alt=""
                        />
                      </div>
                      <div className="cnt col-md-7 col-center">
                        <p className="f20 medium">Developing a new product</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="box col-md-6 col-xs-12 col-xsls-6 col-sm-6 mbl-nobrd aos-init"
                    data-aos="fade-up"
                    data-aos-delay="300000"
                    data-aos-once="true"
                  >
                    <div className="cntHolder">
                      <div className="thumb botMag-0">
                        <img
                          src="https://creativechaos.co/wp-content/themes/ccweb/images/ico-idf-4.svg"
                          alt=""
                        />
                      </div>
                      <div className="cnt col-md-7 col-center">
                        <p className="f20 medium">
                          Current site is not converting
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mosaicGrid footerGrid">
            <div className="cntHolder">
              <div
                className="col-lg-6 col-sm-12 col-md-6 aos-init"
                data-aos="fade-up"
                data-aos-offset="340"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-quart"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-center"
              >
                <a href="https://creativechaos.co/insights/customer-decision-journey/">
                  <div className="box lead">
                    <div
                      className="bg"
                      style={{
                        backgroundImage:
                          "url('https://creativechaos.co/wp-content/uploads/2018/04/m-insight_05.jpg')",
                      }}
                    ></div>
                    <div className="cntHolder">
                      <div className="title">Customer Decision Journey</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <a href="https://creativechaos.co/work/transforming-e-commerce-through-the-lens-of-an-action-cam/">
                  <div
                    className="box col-xsls-6 col-smpt-6 aos-init"
                    data-aos="fade-up"
                    data-aos-offset="400"
                    data-aos-delay="90"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-mirror="true"
                    data-aos-anchor-placement="top-center"
                  >
                    <div className="col-lg-6 col-md-6">
                      <div className="cntHolder">
                        <div className="title">
                          Transforming e-commerce experience through the lens of
                          an action cam
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 arrowLeft">
                      <div
                        className="bg"
                        style={{
                          backgroundImage:
                            "url('https://creativechaos.co/wp-content/uploads/2018/05/Gopro.png')",
                        }}
                      ></div>
                    </div>
                  </div>
                </a>

                <a href="https://creativechaos.co/work/automobile-maintenance-on-the-users-fingertips/">
                  <div
                    className="box col-xsls-6 col-smpt-6 aos-init"
                    data-aos="fade-up"
                    data-aos-offset="380"
                    data-aos-delay="60"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-mirror="true"
                    data-aos-anchor-placement="top-center"
                  >
                    <div className="col-lg-6 col-md-6 arrowRight">
                      <div
                        className="bg"
                        style={{
                          backgroundImage:
                            "url('https://creativechaos.co/wp-content/uploads/2018/05/Advance-Auto-Parts.png')",
                        }}
                      ></div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="cntHolder">
                        <div className="title">
                          Automobile maintenance on the the user's fingertips
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
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
export default AutomationPage;
