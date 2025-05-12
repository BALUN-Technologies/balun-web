import React from 'react'

const footer = () => {
  return (
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
  )
}

export default footer