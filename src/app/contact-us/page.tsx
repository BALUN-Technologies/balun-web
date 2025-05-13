"use client"; // If using Next.js App Router

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";

const ContactPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out-quart" });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { title: "Services", url: "./services" },
    { title: "Solutions", url: "./solutions" },
    { title: "Process", url: "./process" },
    { title: "Clients", url: "./clients" },
    { title: "Work", url: "./work" },
    { title: "Insights", url: "./insights" },
    { title: "Careers", url: "./careers" },
    { title: "Contact", url: "./contact-us" },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/creative-chaos/",
      icon: "fa-linkedin",
    },
    {
      href: "https://www.instagram.com/creativechaospk/",
      icon: "fa-instagram",
    },
    { href: "https://web.facebook.com/CreativeChaosPK", icon: "fa-facebook" },
    {
      href: "https://www.youtube.com/@creativechaos3152",
      icon: "fa-youtube-play",
    },
  ];

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

        {/* Page Heading */}
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
                  <h6 className="pageTitle">Contact Us</h6>
                  <h1 className="heading">
                    We&apos;re Ready to Help You Build Something Incredible!
                  </h1>
                  <h4 className="subHeading">
                    Give us your details by filling out the form below, and our
                    associate will get back to you with the best possible
                    solution.
                  </h4>
                  <div className="scrollDown" data-target="#scrollHere">
                    <span className="cc-icon icon-arrow-down"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div id="content">
          <div id="scrollHere">
            <div className="contactForm">
              <div className="section bgNoRepeat bgPosRightTop bgCover bgcolor1 relative">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-10 col-center">
                      <div className="row">
                        {/* Services */}
                        <div className="col-md-5 infoCol">
                          <h2 className="heading botMag-0">
                            Ask a Creative Chaos Associate how we can help you
                            with:
                          </h2>
                          <div className="pointList">
                            {[
                              {
                                src: "/images/ico-contact1.svg",
                                title: "Innovation Delivery",
                              },
                              {
                                src: "/images/ico-contact2.svg",
                                title: "Digital Transformation Engagements",
                              },
                              {
                                src: "/images/ico-contact3.svg",
                                title: "Building an MVP",
                              },
                              {
                                src: "/images/ico-contact4.svg",
                                title:
                                  "Augmenting & Scaling Your Development Team",
                              },
                            ].map((item, index) => (
                              <div key={index} className="item">
                                <div className="icon">
                                  <Image
                                    src={item.src}
                                    alt={item.title}
                                    width={40}
                                    height={40}
                                  />
                                </div>
                                <div className="title">{item.title}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Contact Form */}
                        <div className="col-md-7">
                          <div className="form-container">
                            <form className="contact-form">
                              {[
                                "Company name",
                                "Your name",
                                "Your email",
                                "Your phone",
                                "What can we do for you?",
                                "What is your budget?",
                              ].map((placeholder, index) => (
                                <div key={index} className="fldRow">
                                  <input
                                    type={index === 2 ? "email" : "text"}
                                    className="form-control input-fields"
                                    placeholder={placeholder}
                                    required
                                  />
                                </div>
                              ))}
                              <div className="fldRow lastrow">
                                <button
                                  type="submit"
                                  className="btn btn-primary btn-block btn-submit"
                                >
                                  Submit
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
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
                            href="https://www.linkedin.com/company/creative-chaos/"
                            target="_blank"
                          >
                            <i
                              className="fa fa-linkedin"
                              aria-hidden="true"
                            ></i>
                          </a>

                          <a
                            href="https://www.instagram.com/creativechaospk/"
                            target="_blank"
                          >
                            <i
                              className="fa fa-instagram"
                              aria-hidden="true"
                            ></i>
                          </a>

                          <a
                            href="https://web.facebook.com/CreativeChaosPK"
                            target="_blank"
                          >
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
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
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
