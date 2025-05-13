import Script from "next/script";
import React from "react";
import "aos/dist/aos.css"; // if using AOS library

const WorkPage = () => {
  return (
    <div
      data-rsssl="1"
      className="archive post-type-archive post-type-archive-work hfeed has-header-image has-sidebar page-two-column colors-light"
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

        <div id="content">
          <div
            id="acf_widget_447-2"
            className="widget acf_widget_447 Acf_Widget_447 "
          >
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
                      <h6 className="pageTitle">Our Work</h6>
                      <h1 className="heading">
                        Work with us to drive business performance
                      </h1>
                      <h4 className="subHeading">
                        Helping forward-thinking businesses on their digital
                        transformation journey
                      </h4>
                      <div className="scrollDown" data-target="#scrollHere">
                        <span className="cc-icon icon-arrow-down"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="scrollHere">
            <nav className="caseStudiesNav">
              <div className="container-fluid">
                <div className="row">
                  <ul className="navigation csDpNav uppercase">
                    <li className="active">
                      <a href="all">All</a>
                    </li>
                    <li>
                      <a href="div1">Agile Development </a>
                    </li>
                    <li>
                      <a href="div2">Digital Transformation </a>
                    </li>
                    <li>
                      <a href="div3">Ideation </a>
                    </li>
                    <li>
                      <a href="div4">MVP </a>
                    </li>
                    <li>
                      <a href="div5">UX Design </a>
                    </li>
                  </ul>

                  <div className="clearfix"></div>
                  <div className="mbl-caseStudiesNav hidden-md hidden-lg">
                    <div className="activeRow">
                      <span className="caseStudiesCat">All</span>{" "}
                      <i
                        className="fa fa-angle-down ico-dropDown"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <ul className="navigation">
                      <li className="active">
                        <a href="all">All</a>
                      </li>
                      <li>
                        <a href="div1">Agile Development </a>
                      </li>
                      <li>
                        <a href="div2">Digital Transformation </a>
                      </li>
                      <li>
                        <a href="div3">Ideation </a>
                      </li>
                      <li>
                        <a href="div4">MVP </a>
                      </li>
                      <li>
                        <a href="div5">UX Design </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>

            <div id="div1" className="section caseStudies">
              <header className="heading">
                <div className="container-fluid">
                  <h2>Agile Development &amp; Team Augmentation</h2>
                </div>
              </header>

              <div className="magzineBlocks caseStudiesListing">
                <div className="col-md-6">
                  <div className="box">
                    <div
                      className="bg"
                      style={{
                        backgroundImage:
                          "url('https://creativechaos.co/wp-content/uploads/2018/05/Radian-Gen.png')",
                      }}
                    ></div>
                    <div className="cntHolder">
                      <h4 className="title">
                        Using Scalable Teams to Rethink Solar Asset Management
                        Solutions
                      </h4>
                      <a
                        href="https://creativechaos.co/work/using-scalable-teams-to-rethink-solar-asset-management-solutions/"
                        className="lnk-viewCase"
                      >
                        View Case{" "}
                        <span className="icon-arrow-right-blue"></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="box">
                    <div
                      className="bg"
                      style={{
                        backgroundImage:
                          "url('https://creativechaos.co/wp-content/uploads/2018/05/Podium.png')",
                      }}
                    ></div>
                    <div className="cntHolder">
                      <h4 className="title">
                        Big Data Made Easy through a Proven Team Integration
                        Framework
                      </h4>
                      <a
                        href="https://creativechaos.co/work/big-data-made-easy-through-a-proven-team-integration-framework/"
                        className="lnk-viewCase"
                      >
                        View Case{" "}
                        <span className="icon-arrow-right-blue"></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="box">
                    <div
                      className="bg"
                      style={{
                        backgroundImage:
                          "url('https://creativechaos.co/wp-content/uploads/2018/05/Boloro.png')",
                      }}
                    ></div>
                    <div className="cntHolder">
                      <h4 className="title">
                        Disruptive Evolution of Mobile Payments
                      </h4>
                      <a
                        href="https://creativechaos.co/work/disruptive-evolution-of-mobile-payments/"
                        className="lnk-viewCase"
                      >
                        View Case{" "}
                        <span className="icon-arrow-right-blue"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="div2" className="section caseStudies">
              <header className="heading">
                <div className="container-fluid">
                  <h2>Digital &amp; Technology Transformation</h2>
                </div>
              </header>

              <div className="magzineBlocks caseStudiesListing">
                <div className="col-md-6">
                  <div className="box">
                    <div
                      className="bg"
                      style={{
                        backgroundImage:
                          "url('https://creativechaos.co/wp-content/uploads/2018/05/Globoforce@2x.png')",
                      }}
                    ></div>
                    <div className="cntHolder">
                      <h4 className="title">
                        Seamless Human Capital Management through a Redemption
                        Platform
                      </h4>
                      <a
                        href="https://creativechaos.co/work/seamless-human-capital-management-through-a-redemption-platform/"
                        className="lnk-viewCase"
                      >
                        View Case{" "}
                        <span className="icon-arrow-right-blue"></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="box">
                    <div
                      className="bg"
                      style={{
                        backgroundImage:
                          "url('https://creativechaos.co/wp-content/uploads/2018/05/Telenor@2x.png')",
                      }}
                    ></div>
                    <div className="cntHolder">
                      <h4 className="title">
                        A Look into the Future: Customer Self-Care Platform for
                        a Telco
                      </h4>
                      <a
                        href="https://creativechaos.co/work/a-look-into-the-future-customer-self-care-platform-for-telco/"
                        className="lnk-viewCase"
                      >
                        View Case{" "}
                        <span className="icon-arrow-right-blue"></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="box">
                    <div
                      className="bg"
                      style={{
                        backgroundImage:
                          "url('https://creativechaos.co/wp-content/uploads/2018/05/Stericycle.png')",
                      }}
                    ></div>
                    <div className="cntHolder">
                      <h4 className="title">
                        Translating Consumer Insights into Increased Lead
                        Generation
                      </h4>
                      <a
                        href="https://creativechaos.co/work/translating-consumer-insights-into-increased-lead-generation/"
                        className="lnk-viewCase"
                      >
                        View Case{" "}
                        <span className="icon-arrow-right-blue"></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="box">
                    <div
                      className="bg"
                      style={{
                        backgroundImage:
                          "url('https://creativechaos.co/wp-content/uploads/2018/05/Groupon.png')",
                      }}
                    ></div>
                    <div className="cntHolder">
                      <h4 className="title">
                        Increasing Holiday Season Purchases through a Digital
                        Catalogue
                      </h4>
                      <a
                        href="https://creativechaos.co/work/increasing-holiday-season-purchases-through-a-digital-catalogue/"
                        className="lnk-viewCase"
                      >
                        View Case{" "}
                        <span className="icon-arrow-right-blue"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="div3" className="section caseStudies">
              <header className="heading">
                <div className="container-fluid">
                  <h2>Ideation &amp; Strategy</h2>
                </div>
              </header>

              <div className="magzineBlocks caseStudiesListing">
                <div className="col-md-6">
                  <div className="box">
                    <div
                      className="bg"
                      style={{
                        backgroundImage:
                          "url('https://creativechaos.co/wp-content/uploads/2018/05/Staples.png')",
                      }}
                    ></div>
                    <div className="cntHolder">
                      <h4 className="title">
                        Automating SKU Content Development through a Proprietary
                        Cloud-Based Platform.
                      </h4>
                      <a
                        href="https://creativechaos.co/work/automating-sku-content-development-through-a-proprietary-cloud-based-platform/"
                        className="lnk-viewCase"
                      >
                        View Case{" "}
                        <span className="icon-arrow-right-blue"></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="box">
                    <div
                      className="bg"
                      style={{
                        backgroundImage:
                          "url('https://creativechaos.co/wp-content/uploads/2018/05/Advance-Auto-Parts.png')",
                      }}
                    ></div>
                    <div className="cntHolder">
                      <h4 className="title">
                        Automobile Maintenance on the User’s Fingertips
                      </h4>
                      <a
                        href="https://creativechaos.co/work/automobile-maintenance-on-the-users-fingertips/"
                        className="lnk-viewCase"
                      >
                        View Case{" "}
                        <span className="icon-arrow-right-blue"></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="box">
                    <div
                      className="bg"
                      style={{
                        backgroundImage:
                          "url('https://creativechaos.co/wp-content/uploads/2018/05/Stericycle.png')",
                      }}
                    ></div>
                    <div className="cntHolder">
                      <h4 className="title">
                        Translating Consumer Insights into Increased Lead
                        Generation
                      </h4>
                      <a
                        href="https://creativechaos.co/work/translating-consumer-insights-into-increased-lead-generation/"
                        className="lnk-viewCase"
                      >
                        View Case{" "}
                        <span className="icon-arrow-right-blue"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="div4" className="section caseStudies">
              <header className="heading">
                <div className="container-fluid">
                  <h2>Thinking of developing an MVP</h2>
                </div>
              </header>

              <div className="magzineBlocks caseStudiesListing">
                <div className="col-md-6">
                  <div className="box">
                    <div
                      className="bg"
                      style={{
                        backgroundImage:
                          "url('https://creativechaos.co/wp-content/uploads/2018/05/Office-Relief.png')",
                      }}
                    ></div>
                    <div className="cntHolder">
                      <h4 className="title">
                        Simplifying the Shopping Experience by Providing an
                        Efficient Inventory Management Platform
                      </h4>
                      <a
                        href="https://creativechaos.co/work/simplifying-the-shopping-experience-by-providing-an-efficient-inventory-management-platform/"
                        className="lnk-viewCase"
                      >
                        View Case{" "}
                        <span className="icon-arrow-right-blue"></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="box">
                    <div
                      className="bg"
                      style={{
                        backgroundImage:
                          "url('https://creativechaos.co/wp-content/uploads/2018/05/Unze2.png')",
                      }}
                    ></div>
                    <div className="cntHolder">
                      <h4 className="title">
                        From a Brick and Mortar Store to a Digital Venture
                      </h4>
                      <a
                        href="https://creativechaos.co/work/from-a-brick-and-mortar-store-to-a-digital-venture/"
                        className="lnk-viewCase"
                      >
                        View Case{" "}
                        <span className="icon-arrow-right-blue"></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="box">
                    <div
                      className="bg"
                      style={{
                        backgroundImage:
                          "url('https://creativechaos.co/wp-content/uploads/2018/05/Sears.png')",
                      }}
                    ></div>
                    <div className="cntHolder">
                      <h4 className="title">
                        Enabling Fast and Easy Home Improvement through a Mobile
                        Marketplace
                      </h4>
                      <a
                        href="https://creativechaos.co/work/enabling-fast-and-easy-home-improvement-through-a-mobile-marketplace/"
                        className="lnk-viewCase"
                      >
                        View Case{" "}
                        <span className="icon-arrow-right-blue"></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="box">
                    <div
                      className="bg"
                      style={{
                        backgroundImage:
                          "url('https://creativechaos.co/wp-content/uploads/2018/05/Boloro.png')",
                      }}
                    ></div>
                    <div className="cntHolder">
                      <h4 className="title">
                        Disruptive Evolution of Mobile Payments
                      </h4>
                      <a
                        href="https://creativechaos.co/work/disruptive-evolution-of-mobile-payments/"
                        className="lnk-viewCase"
                      >
                        View Case{" "}
                        <span className="icon-arrow-right-blue"></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="box">
                    <div
                      className="bg"
                      style={{
                        backgroundImage:
                          "url('https://creativechaos.co/wp-content/uploads/2018/05/Unation.png')",
                      }}
                    ></div>
                    <div className="cntHolder">
                      <h4 className="title">
                        Driving Revenue through Social Engagement—One Ticket at
                        a Time
                      </h4>
                      <a
                        href="https://creativechaos.co/work/driving-revenue-through-social-engagement-one-ticket-at-a-time/"
                        className="lnk-viewCase"
                      >
                        View Case{" "}
                        <span className="icon-arrow-right-blue"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="div5" className="section caseStudies">
              <header className="heading">
                <div className="container-fluid">
                  <h2>Experience Design</h2>
                </div>
              </header>

              <div className="magzineBlocks caseStudiesListing">
                <div className="col-md-6">
                  <div className="box">
                    <div
                      className="bg"
                      style={{
                        backgroundImage:
                          "url('https://creativechaos.co/wp-content/uploads/2018/05/Victorias-Secret.png')",
                      }}
                    ></div>
                    <div className="cntHolder">
                      <h4 className="title">
                        Showcasing Women’s Wear through an Online Fashion Ramp
                      </h4>
                      <a
                        href="https://creativechaos.co/work/showcasing-womens-wear-through-an-online-fashion-ramp/"
                        className="lnk-viewCase"
                      >
                        View Case{" "}
                        <span className="icon-arrow-right-blue"></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="box">
                    <div
                      className="bg"
                      style={{
                        backgroundImage:
                          "url('https://creativechaos.co/wp-content/uploads/2018/05/Advance-Auto-Parts.png')",
                      }}
                    ></div>
                    <div className="cntHolder">
                      <h4 className="title">
                        Automobile Maintenance on the User’s Fingertips
                      </h4>
                      <a
                        href="https://creativechaos.co/work/automobile-maintenance-on-the-users-fingertips/"
                        className="lnk-viewCase"
                      >
                        View Case{" "}
                        <span className="icon-arrow-right-blue"></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="box">
                    <div
                      className="bg"
                      style={{
                        backgroundImage:
                          "url('https://creativechaos.co/wp-content/uploads/2018/05/Gopro.png')",
                      }}
                    ></div>
                    <div className="cntHolder">
                      <h4 className="title">
                        Transforming E-Commerce through the Lens of an Action
                        Cam
                      </h4>
                      <a
                        href="https://creativechaos.co/work/transforming-e-commerce-through-the-lens-of-an-action-cam/"
                        className="lnk-viewCase"
                      >
                        View Case{" "}
                        <span className="icon-arrow-right-blue"></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="box">
                    <div
                      className="bg"
                      style={{
                        backgroundImage:
                          "url('https://creativechaos.co/wp-content/uploads/2018/05/Groupon.png')",
                      }}
                    ></div>
                    <div className="cntHolder">
                      <h4 className="title">
                        Increasing Holiday Season Purchases through a Digital
                        Catalogue
                      </h4>
                      <a
                        href="https://creativechaos.co/work/increasing-holiday-season-purchases-through-a-digital-catalogue/"
                        className="lnk-viewCase"
                      >
                        View Case{" "}
                        <span className="icon-arrow-right-blue"></span>
                      </a>
                    </div>
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
                      href="./contact-us/"
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
                          href="#"
                          target="_blank"
                        >
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>

                        <a
                          href="#"
                          target="_blank"
                        >
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>

                        <a
                          href="#"
                          target="_blank"
                        >
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>

                        <a
                          href="https://www.youtube.com/@creativechaos3152"
                          target="_blank"
                        >
                          <i
                            className="fa fa-youtube-play"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 pull-right">
                      <div className="copyright txt-right">
                        &copy; 2025 Creative Chaos.{" "}
                        <a href="https://creativechaos.co/privacy-policy/">
                          Privacy Policy
                        </a>{" "}
                        |{" "}
                        <a href="https://creativechaos.co/terms-and-conditions/">
                          Terms & Conditions
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
export default WorkPage;