import Script from "next/script";
import React from 'react';
import 'aos/dist/aos.css'; // if using AOS library

const ServicesPage = () => {
  return (
<div
  data-rsssl="1"
  className="page-template-default page page-id-17 has-header-image page-two-column colors-light services"
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
              className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-17 current_page_item menu-item-22"
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
              <h6 className="pageTitle">Our Services, Your Competitive Edge</h6>
              <h1 className="heading">
               From Code to Cloud to Intelligence<br className="brDp" /> — We Deliver It All
                {" "}
              </h1>
              <h4 className="subHeading">
               Unlock innovation with services engineered for growth, automation, <br className="brDp" />and AI-powered transformation
                
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
        <div className="section featuredSection">
          <div className="container-fluid">
            <div className="row">
              <div className="cntCol left col-md-6 col-smpt-12">
                <div
                  className="bg bgNoRepeat bgCover bgPosTopRight"
                  style={{
                    backgroundImage:
                      "url('https://creativechaos.co/wp-content/uploads/2018/04/f-cus_res_ins.jpg')",
                  }}
                ></div>
                <div className="cntHolder">
                  <h2 className="heading">Research &amp; Insights</h2>
                  <p>
                    You have the idea. Now you need the insight. We’ll help you
                    get there by understanding the customer’s point of view.
                    Through in-depth field interviews, qualitative, and
                    quantitative analysis, we build user experiences that reduce
                    friction and increase conversion.
                  </p>

                  <a
                    href="https://creativechaos.co/services/research-insights/"
                    className="btn btn-btcolor6 btn-outline lnk-learnmore"
                  >
                    Read More <span className="ccicon icon-arrow-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section featuredSection">
          <div className="container-fluid">
            <div className="row">
              <div className="cntCol right col-md-6 col-smpt-12 pull-right">
                <div
                  className="bg bgNoRepeat bgCover bgPosTopRight"
                  style={{
                    backgroundImage:
                      "url('https://creativechaos.co/wp-content/uploads/2018/04/f-exp_des.jpg')",
                  }}
                ></div>
                <div className="cntHolder">
                  <h2 className="heading">Experience Design</h2>
                  <p>
                    Time for a site refresh? Need to understand and improve your
                    customer experience? With our design-thinking and sprints,
                    we help you rapidly ideate and iterate designs, create
                    prototypes, and craft experiences that not only convert, but
                    impress and inspire.
                  </p>
                  <a
                    href="https://creativechaos.co/services/experience-design/"
                    className="btn btn-btcolor6 btn-outline lnk-learnmore"
                  >
                    Read More <span className="ccicon icon-arrow-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section featuredSection">
          <div className="container-fluid">
            <div className="row">
              <div className="cntCol left col-md-6 col-smpt-12">
                <div
                  className="bg bgNoRepeat bgCover bgPosTopRight"
                  style={{
                    backgroundImage:
                      "url('https://creativechaos.co/wp-content/uploads/2018/04/f-agi_pro_dev.jpg')",
                  }}
                ></div>
                <div className="cntHolder">
                  <h2 className="heading">Lean Agile Development</h2>
                  <p>
                    If you have an idea that needs developing, a wireframe that
                    needs creating, or are struggling with the question, “Who’s
                    going to do it?” – we’re lean, we’re agile, and we’re here.
                    Our teams are ready and excited to engage and build your web
                    platforms and mobile apps, no matter the industry or
                    platform.
                  </p>
                  <a
                    href="https://creativechaos.co/lean-agile-development/"
                    className="btn btn-btcolor6 btn-outline lnk-learnmore"
                  >
                    Read More <span className="ccicon icon-arrow-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section featuredSection">
          <div className="container-fluid">
            <div className="row">
              <div className="cntCol right col-md-6 col-smpt-12 pull-right">
                <div
                  className="bg bgNoRepeat bgCover bgPosTopRight txt-center"
                  style={{
                    backgroundImage:
                      "url('https://creativechaos.co/wp-content/uploads/2018/04/f-dev_ops_clo.jpg')",
                  }}
                >
                  <img
                    src="https://creativechaos.co/wp-content/uploads/2018/04/dev-ops-infographic-1.png"
                    alt=""
                    className="posVerticalCenterMiddle"
                  />
                </div>
                <div className="cntHolder">
                  <h2 className="heading">DevOps &amp; Cloud</h2>
                  <p>
                    Are you struggling to release updates on time? Is continuous
                    integration and delivery still not happening? Does the
                    unknown keep you up at night? Well, we’re here to help you
                    create CI/CD pipelines, manage cloud environments, and run
                    scalable and secure production environments – so you can
                    focus on what matters.
                  </p>
                  <a
                    href="https://creativechaos.co/services/devops-cloud/"
                    className="btn btn-btcolor6 btn-outline lnk-learnmore"
                  >
                    Read More <span className="ccicon icon-arrow-right"></span>
                  </a>
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
 };
export default ServicesPage ;