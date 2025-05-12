import Script from "next/script";
import React from 'react';
import 'aos/dist/aos.css'; // if using AOS library

const ClientsPage = () => {
  return (


<div
  data-rsssl="1"
  className="page-template-default page page-id-2552 has-header-image page-two-column colors-light clients"
  data-aos-easing="ease"
  data-aos-duration="450"
  data-aos-delay="0"
  style={{paddingTop: "86px"}}
>
  <div id="superdiv">
    <header id="header" className="darkLogo">
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
              className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-2552 current_page_item menu-item-2632"
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
              className="onlyPK menu-item menu-item-type-post_type menu-item-object-page menu-item-2723"
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
      id="pageHeading"
      data-aos="fade-up"
      className="aos-init aos-animate"
      style={{ minHeight: "220px" }}
    >
      <div className="container-fluid">
        <div className="row parentContentHolder" style={{ minHeight: "220px" }}>
          <div className="childContentHolder col-md-12">
            <div className="cntHolder">
              <h6 className="pageTitle">Clients</h6>
              <h1 className="heading">
                We are the innovation delivery partners you can trust.{" "}
              </h1>
              <h4 className="subHeading">
                For over two decades, we have helped transform businesses for
                our partners - from startups to enterprises.{" "}
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
        <div className="nav-tabs-container">
          <div className="container-fluid">
            <ul className="nav nav-tabs">
              <li className="active">
                <a data-toggle="tab" href="#startups">
                  Startups
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#enterprises">
                  Enterprises
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-content-container">
          <div className="container-fluid">
            <div className="tab-content">
              <div id="startups" className="tab-pane fade in active">
                <h3 className="txt-center heading width50p width100p-m margin-za">
                  Partners we’ve helped go to market faster using our{" "}
                  <a href="https://creativechaos.co/mvp-framework/">
                    MVP Development Framework
                  </a>
                  .
                </h3>
                <div className="equal-row align-items-center clients-row">
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-planet-cyclery.png"
                      alt="Planet Cyclery"
                      className="client-logo width60p"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-landng.png"
                      alt="landng"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-verse-gaming.png"
                      alt="Verse Gaming"
                      className="client-logo width40p"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-smart-swapping.png"
                      alt="Smart Swapping"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-epallet.png"
                      alt="epallet"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-fabric.png"
                      alt="Fabric"
                      className="client-logo width60p"
                    />
                  </div>
                </div>
                <div className="equal-row align-items-center clients-row">
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-unation.png"
                      alt="Unation"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-boloro.png"
                      alt="Boloro"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-unze-london.png"
                      alt="Unze London"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-office-relief.png"
                      alt="Office Relief"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-alertli.png"
                      alt="Alertli"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-cotton-candy.png"
                      alt="Cotton Candy"
                      className="client-logo"
                    />
                  </div>
                </div>
                <div className="equal-row align-items-center clients-row">
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-willport.png"
                      alt="WillPort"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-afs.png"
                      alt="AFS"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-dynatrace.png"
                      alt="Dynatrace"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-qlik.png"
                      alt="Qlik"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-lending-home.png"
                      alt="Lending Home"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-radian-generation.png"
                      alt="Radian Generation"
                      className="client-logo"
                    />
                  </div>
                </div>
                <div className="equal-row align-items-center clients-row">
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-weir.png"
                      alt="Weir"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-mindbody.png"
                      alt="MindBody"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-fortinet.png"
                      alt="Fortinet"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-klose-care.png"
                      alt="Klose Care"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-wizmd.png"
                      alt="WizMD"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-litterati.png"
                      alt="Litterati"
                      className="client-logo"
                    />
                  </div>
                </div>
                <div className="equal-row align-items-center clients-row">
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-odin.png"
                      alt="Odin"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-tangelo.png"
                      alt="Tangelo"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-conrad-labs.png"
                      alt="Conrad Labs"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-video-squirrel.png"
                      alt="Video Squirrel"
                      className="client-logo width70p"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-ride-on-explor.png"
                      alt="Ride on Explor"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/startups/cc-clients-startup-look-see.png"
                      alt="Look See"
                      className="client-logo width40p"
                    />
                  </div>
                </div>
              </div>
              <div id="enterprises" className="tab-pane fade">
                <h3 className="txt-center heading width50p width100p-m margin-za">
                  Partners we’ve helped digitally transform using our{" "}
                  <a href="https://creativechaos.co/idf/">
                    Innovation Delivery Framework
                  </a>
                  .
                </h3>
                <div className="equal-row align-items-center clients-row">
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-mcdonalds.png"
                      alt="McDonalds"
                      className="client-logo width40p"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-trimark.png"
                      alt="Trimark"
                      className="client-logo width70p"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-foxtons.png"
                      alt="Foxtons"
                      className="client-logo width60p"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-emaar.png"
                      alt="Emaar"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-gnc.png"
                      alt="GNC"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-spark.png"
                      alt="Spark"
                      className="client-logo width70p"
                    />
                  </div>
                </div>
                <div className="equal-row align-items-center clients-row">
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-groupon.png"
                      alt="Groupon"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-coke-studio.png"
                      alt="Coke Studio"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-stericycle.png"
                      alt="Stericycle"
                      className="client-logo width60p"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-telenor.png"
                      alt="Telenor"
                      className="client-logo width60p"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-ebay.png"
                      alt="eBay"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-old-dominion-freight-line.png"
                      alt="Old Dominion Freight Line"
                      className="client-logo"
                    />
                  </div>
                </div>
                <div className="equal-row align-items-center clients-row">
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-dhl.png"
                      alt="DHL"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-novartis.png"
                      alt="Novartis"
                      className="client-logo width70p"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-sears.png"
                      alt="Sears"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-advance-auto-parts.png"
                      alt="Advance Auto Parts"
                      className="client-logo width70p"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-intel.png"
                      alt="Intel"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-shell.png"
                      alt="Shell"
                      className="client-logo"
                    />
                  </div>
                </div>
                <div className="equal-row align-items-center clients-row">
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-work-human.png"
                      alt="Work Human"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-victorias-secret.png"
                      alt="Victoria's Secret"
                      className="client-logo width70p"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-amazon.png"
                      alt="Amazon"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-veon.png"
                      alt="Veon"
                      className="client-logo width40p"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-staples.png"
                      alt="Staples"
                      className="client-logo"
                    />
                  </div>
                  <div className="col-md-2 txt-center">
                    <img
                      src="https://creativechaos.co/wp-content/themes/ccweb/images/clients/enterprises/cc-clients-enterprises-go-pro.png"
                      alt="Go Pro"
                      className="client-logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
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
  )
} 
export default ClientsPage;
