"use client";

export default function Home() {
  return (
    <div className="home page-template-default page page-id-4 twentyseventeen-front-page has-header-image page-two-column colors-light">
      <div style={{ display: "none" }}>PK</div>
      <h1 style={{ display: "none" }}>PK</h1>

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
                <li className="menu-item">
                  <a href="https://creativechaos.co/services/">Services</a>
                </li>
                <li className="menu-item">
                  <a href="https://creativechaos.co/solutions/">Solutions</a>
                </li>
                <li className="menu-item">
                  <a href="https://creativechaos.co/process/">Process</a>
                </li>
                <li className="menu-item">
                  <a href="https://creativechaos.co/clients/">Clients</a>
                </li>
                <li className="menu-item">
                  <a href="https://creativechaos.co/work/">Work</a>
                </li>
                <li className="menu-item">
                  <a href="https://creativechaos.co/insights/">Insights</a>
                </li>
                <li className="menu-item onlyPK">
                  <a href="https://creativechaos.co/careers/">Careers</a>
                </li>
                <li className="menu-item">
                  <a href="https://creativechaos.co/contact-us/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <div id="banner">
          <div
            className="bg bgCover bgPosBtmRight"
            style={{
              backgroundImage:
                "url('//creativechaos.co/wp-content/uploads/2018/04/home_header_1.jpg')",
            }}
          ></div>
          <div className="container-fluid">
            <div className="cntHolder">
              <h1 className="heading">
                YOUR PARTNER IN DIGITAL TRANSFORMATION <br />
                <span
                  id="typeit"
                  data-type="Custom software, intelligent automation, and strategic consulting — everything you need to stay ahead of the curve"
                ></span>
              </h1>
              <a
                href="//creativechaos.co/contact-us/"
                className="lnk-calltoaction f12 btn btn-primary"
              >
                Let's Build Together{" "}
                <span className="cc-icon icon-arrow-right-blue"></span>
              </a>
            </div>
          </div>
        </div>

        <div id="content">
          <div className="section homeIntro" data-aos="fade-up">
            <div className="container-fluid">
              <div className="col-md-10 col-center hdGroup txt-center">
                <h2 className="heading">About Us</h2>

                <h4>
                  Balun Technologies is the global business icon with the vision
                  to transform the World in Digital Automation. We focused on
                  delivering innovative and intelligent digital solutions. We
                  partner with businesses to unlock new <br /> value through
                  advanced software, data-driven insights, and scalable
                  systems.Whether it's building <br />
                  robust web platforms or automating workflows using
                  cutting-edge machine learning models,
                  <br /> we bring clarity and performance to your digital
                  strategy.
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div id="content">
          <div className="mosaicGrid footerGrid scrollable-section">
            <div className="cntHolder">
              <div
                className="col-lg-6 col-sm-12 col-md-6 "
                data-aos="fade-up"
                data-aos-offset="-10"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-quart"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-center"
              >
                <a href="https://creativechaos.co/experience-design/">
                  <div className="box lead">
                    <div
                      className="bg"
                      style={{
                        backgroundImage: "url('./auto.jpg')",
                      }}
                    ></div>
                    <div className="cntHolder">
                      <div className="subTitle">AI & ML AUTOMATION</div>
                      <div className="title">Harness the Power of AI & ML for Seamless Automation</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <a href="https://creativechaos.co/idf/">
                  <div
                    className="box col-xsls-6 col-smpt-6"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-delay="5"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-mirror="true"
                    data-aos-anchor-placement="top-center"
                  >
                    <div className="col-lg-6 col-md-6">
                      <div className="cntHolder">
                        <div className="subTitle">LLM & NLP Integration</div>
                        <div className="title">Unlock the power of Language Intelligence</div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 arrowLeft">
                      <div
                        className="bg"
                        style={{
                          backgroundImage: "url('./llm.jpg')",
                        }}
                      ></div>
                    </div>
                  </div>
                </a>

                <a href="https://creativechaos.co/devops-cloud/">
                  <div
                    className="box col-xsls-6 col-smpt-6"
                    data-aos="fade-up"
                    data-aos-offset="5"
                    data-aos-delay="8"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-mirror="true"
                    data-aos-anchor-placement="top-center"
                  >
                    <div className="col-lg-6 col-md-6 arrowRight">
                      <div
                        className="bg"
                        style={{
                          backgroundImage: "url('./devo.jpg')",
                        }}
                      ></div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="cntHolder">
                        <div className="subTitle">DevOps & Cloud</div>
                        <div className="title">
                         Automate, Integrate, Dominate
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="mosaicGrid footerGrid scrollable-section">
            <div className="cntHolder">
              <div
                className="col-lg-6 col-sm-12 col-md-6 pull-right"
                data-aos="fade-up"
                data-aos-offset="-10"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-quart"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-center"
              >
                <a href="https://creativechaos.co/insights/mvp-in-action/">
                  <div className="box lead">
                    <div
                      className="bg"
                      style={{
                        backgroundImage:
                          "url('./datasci.jpg')",
                      }}
                    ></div>
                    <div className="cntHolder">
                      <div className="subTitle">Data Science and Analytics</div>

                      <div className="title">
                        Where Grit and Resilience Breed Total Commitment
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <a href="https://creativechaos.co/insights/four-stages-of-innovation-delivery/">
                  <div
                    className="box col-xsls-6 col-smpt-6"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-delay="5"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-mirror="true"
                    data-aos-anchor-placement="top-center"
                  >
                    <div className="col-lg-6 col-md-6">
                      <div className="cntHolder">
                        <div className="subTitle">Data Management</div>
                        <div className="title">
                          From a Spark of Brilliance to Market Success
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 arrowLeft">
                      <div
                        className="bg"
                        style={{
                          backgroundImage:
                            "url('./dm.jpg')",
                        }}
                      ></div>
                    </div>
                  </div>
                </a>

                <a href="https://creativechaos.co/research-insights/">
                  <div
                    className="box col-xsls-6 col-smpt-6"
                    data-aos="fade-up"
                    data-aos-offset="5"
                    data-aos-delay="8"
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
                            "url('./gai.png')",
                        }}
                      ></div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="cntHolder">
                        <div className="subTitle">Generative AI</div>
                        <div className="title">
                          Translating Consumer Insights into Innovation
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* <div className="mosaicGrid footerGrid scrollable-section">
              <div className="cntHolder">
                <div
                  className="col-lg-6 col-sm-12 col-md-6 "
                  data-aos="fade-up"
                  data-aos-offset="-10"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out-quart"
                  data-aos-mirror="true"
                  data-aos-anchor-placement="top-center"
                >
                  <a href="https://creativechaos.co/team-integration-framework/">
                    <div className="box lead">
                      <div
                        className="bg"
                        style={{
                          backgroundImage:
                            "url('https://creativechaos.co/wp-content/uploads/2018/04/m-tea_int_fra.jpg')",
                        }}
                      ></div>
                      <div className="cntHolder">
                        <div className="subTitle">Team Integration</div>

                        <div className="title">
                          Helping Businesses Augment their Development
                          Capabilities
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <a href="https://creativechaos.co/mvp-framework/">
                    <div
                      className="box col-xsls-6 col-smpt-6"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-delay="5"
                      data-aos-duration="1500"
                      data-aos-easing="ease-in-out-quart"
                      data-aos-mirror="true"
                      data-aos-anchor-placement="top-center"
                    >
                      <div className="col-lg-6 col-md-6">
                        <div className="cntHolder">
                          <div className="subTitle">MVP Development</div>
                          <div className="title">
                            Build Your MVP Efficiently
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 arrowLeft">
                        <div
                          className="bg"
                          style={{
                            backgroundImage:
                              "url('https://creativechaos.co/wp-content/uploads/2018/04/m-mvp_dev.jpg')",
                          }}
                        ></div>
                      </div>
                    </div>
                  </a>

                  <a href="https://creativechaos.co/devops-cloud/">
                    <div
                      className="box col-xsls-6 col-smpt-6"
                      data-aos="fade-up"
                      data-aos-offset="5"
                      data-aos-delay="8"
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
                              "url('https://creativechaos.co/wp-content/uploads/2018/04/m-dev_ops_clo.jpg')",
                          }}
                        ></div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="cntHolder">
                          <div className="subTitle">Devops & Cloud</div>
                          <div className="title">
                            Develop, Deploy, and Deliver Faster
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div> */}

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
        </div>
      </div>
    </div>
  );
}
