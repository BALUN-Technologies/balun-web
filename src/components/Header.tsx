import React from 'react'

const header = () => {
  return (
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
  )
}

export default header