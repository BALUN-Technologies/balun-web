'use client';
import Script from "next/script";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SolutionsPage() {
  useEffect(() => {
    AOS.init(); // for data-aos animations
  }, []);

  return (
<div
  data-rsssl="1"
  className="page-template-default page page-id-38 has-header-image page-two-column colors-light solutions"
  data-aos-easing="ease"
  data-aos-duration="450"
  data-aos-delay="0"
  style={{ paddingTop: '86px' }}
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
        <div className="row parentContentHolder" style={{ minHeight: "220px" }}>
          <div className="childContentHolder col-md-12">
            <div className="cntHolder">
              <h6 className="pageTitle">Solutions</h6>
              <h1 className="heading">
                Solutions to Build, Scale, and <br className="brDp" /> Transform
                Your Business
              </h1>
              <h4 className="subHeading">
                Take advantage of our agile development and delivery frameworks
                to stay <br className="brDp" /> ahead of the innovation curve
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
        <div id="scrollHere" className="magzineBlocks">
          <div className="col-md-6">
            <div className="box coverBox">
              <div
                className="bg"
                style={{
                  backgroundImage:
                    "url('https://creativechaos.co/wp-content/uploads/2018/04/enterprice-bg.jpg')",
                }}
              ></div>
              <div className="cntHolder">
                <div className="row">
                  <div className="col-md-2 col-xs-12 txt-center coverIcon">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/globe.svg"
                      alt="Globe Icon"
                    />
                  </div>
                  <div className="col-md-10 col-xs-12">
                    <h2 className="title">Enterprise Solutions</h2>
                    <p>
                      We help enterprises deliver their next big idea through
                      our proven Innovation Delivery Framework.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <a href="https://creativechaos.co/experience-design/">
              <div className="box midBox">
                <div
                  className="bg"
                  style={{
                    backgroundImage:
                      "url('https://creativechaos.co/wp-content/uploads/2018/04/magBox-mid-1.jpg')",
                  }}
                ></div>
                <div className="cntHolder">
                  <h4 className="title">Experience Strategy</h4>
                  <span className="readmore visible-xs visible-sm">
                    read more <span className="icon-arrow-right-blue"></span>
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6">
            <div className="col-md-6 col-xsls-6 col-smpt-6 no-pad">
              <a href="https://creativechaos.co/research-insights/">
                <div className="box smlBox highlighted overlay-ltblue">
                  <div
                    className="bg"
                    style={{
                      backgroundImage:
                        "url(https://creativechaos.co/wp-content/themes/ccweb/images/mvp-3.png)",
                    }}
                  ></div>
                  <div className="cntHolder">
                    <h4 className="title">Customer Research &amp; Insights</h4>
                    <span className="readmore visible-xs visible-sm">
                      read more <span className="icon-arrow-right-blue"></span>
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-xsls-6 col-smpt-6 no-pad">
              <a href="https://creativechaos.co/lean-agile-development/">
                <div className="box smlBox">
                  <div
                    className="bg"
                    style={{
                      backgroundImage:
                        "url('https://creativechaos.co/wp-content/uploads/2018/04/magBox-sml-2.jpg')",
                    }}
                  ></div>
                  <div className="cntHolder">
                    <h4 className="title">Agile Product Development</h4>
                    <span className="readmore visible-xs visible-sm">
                      read more <span className="icon-arrow-right-blue"></span>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="magzineBlocks">
          <div className="col-md-6">
            <div className="box coverBox">
              <div
                className="bg"
                style={{
                  backgroundImage:
                    "url('https://creativechaos.co/wp-content/uploads/2018/04/startup-bg.jpg')",
                }}
              ></div>
              <div className="cntHolder">
                <div className="col-md-2 col-xs-12 txt-center coverIcon">
                  <img
                    src="https://creativechaos.co/wp-content/themes/ccweb/images/rocket.svg"
                    alt=""
                  />
                </div>
                <div className="col-md-10">
                  <h2 className="title">Startups</h2>
                  <p>
                    Whether you want to build a new product or scale your
                    development capability, we provide the expertise and
                    firepower to help you succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <a href="https://creativechaos.co/agile-mvp-development/">
              <div className="box midBox">
                <div
                  className="bg"
                  style={{
                    backgroundImage:
                      "url('https://creativechaos.co/wp-content/uploads/2018/04/magBox-mid-3.jpg')",
                  }}
                ></div>
                <div className="cntHolder">
                  <h4 className="title">Minimum Viable Product Development</h4>
                  <span className="readmore visible-xs visible-sm">
                    read more <span className="icon-arrow-right-blue"></span>
                  </span>
                </div>
              </div>
            </a>
            <a href="https://creativechaos.co/team-augmentation/">
              <div className="box midBox">
                <div
                  className="bg"
                  style={{
                    backgroundImage:
                      "url('https://creativechaos.co/wp-content/uploads/2018/04/magBox-mid-2.jpg')",
                  }}
                ></div>
                <div className="cntHolder">
                  <h4 className="title">Team Augmentation</h4>
                  <span className="readmore visible-xs visible-sm">
                    read more <span className="icon-arrow-right-blue"></span>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="magzineBlocks">
          <div className="col-md-6">
            <div className="box coverBox">
              <div
                className="bg"
                style={{
                  backgroundImage:
                    "url('https://creativechaos.co/wp-content/uploads/2020/06/psp__solutions-page-fold-1-bg.jpg')",
                }}
              ></div>
              <div className="cntHolder">
                <div className="col-md-2 col-xs-12 txt-center coverIcon">
                  <img
                    src="https://creativechaos.co/wp-content/themes/ccweb/images/psp__solutions-page-fold-1-icon.svg"
                    alt=""
                  />
                </div>
                <div className="col-md-10">
                  <h2 className="title">Fintech Payments and solutions</h2>
                  <p>
                    We provide cloud-based, easy integrable fintech payment
                    solutions for banks, telcos and transport authorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <a href="https://creativechaos.co/solutions/c2pay/">
              <div className="box coverBox">
                <div
                  className="bg"
                  style={{
                    backgroundImage:
                      "url('https://creativechaos.co/wp-content/uploads/2020/06/psp__solutions-page-fold-2-bg.jpg')",
                  }}
                ></div>
                <div className="cntHolder">
                  <h4 className="title text-center">C2Pay</h4>
                  <p className="text-center">
                    Our suite of digital products for fintech payment solutions
                  </p>
                </div>
              </div>
            </a>
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
            <a href="https://creativechaos.co/insights/start-right-maintain-focus/">
              <div className="box lead">
                <div
                  className="bg"
                  style={{
                    backgroundImage:
                      "url('https://creativechaos.co/wp-content/uploads/2018/04/m-insight_06.jpg')",
                  }}
                ></div>
                <div className="cntHolder">
                  <div className="title">Start Right Maintain Focus</div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <a href="https://creativechaos.co/work/increasing-holiday-season-purchases-through-a-digital-catalogue/">
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
                      Increasing holiday season purchases through a digital
                      catalogue
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 arrowLeft">
                  <div
                    className="bg"
                    style={{
                      backgroundImage:
                        "url('https://creativechaos.co/wp-content/uploads/2018/05/Groupon.png')",
                    }}
                  ></div>
                </div>
              </div>
            </a>

            <a href="https://creativechaos.co/work/enabling-fast-and-easy-home-improvement-through-a-mobile-marketplace/">
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
                        "url('https://creativechaos.co/wp-content/uploads/2018/05/Sears.png')",
                    }}
                  ></div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="cntHolder">
                    <div className="title">
                      Enabling fast and easy home improvement through a mobile
                      marketplace
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
            "url('https://creativechaos.co/wp-content/uploads/2018/04/footerbg.jpg'",
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
              Talk to us <span className="cc-icon icon-arrow-right-blue"></span>
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
}