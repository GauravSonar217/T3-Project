import React from "react";
import { HashLink } from "react-router-hash-link";
import facebook from "../../assets/svg/facebook.svg";
import insta from "../../assets/svg/instagram.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import x from "../../assets/svg/x.svg";

function Footer() {
  return (
    <React.Fragment>
      <footer className="w-100">
        <div className="container h-100 d-flex flex-column" id="footer">
          <div className="textCont w-100 d-flex flex-lg-row flex-md-column justify-content-between">
            <div className="footerDesc col-lg-4 col-md-12 p-0">
              <h2 className="d-flex align-items-center ">
                <div className="blueCircle mr-2"></div>Trek Tour Travel
              </h2>
              <p className="text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown
              </p>
              <h4>Website Visitors: 0012</h4>
            </div>
            <div className="footerLinkWrapper col-lg-7 col-md-12 p-0 d-flex align-items-start">
              <div className="col-lg-3 col-md-3 p-0 footerLinkCont">
                <h3>Pages</h3>
                <ul className="footerLinkBox w-100 ">
                  <li>
                    <HashLink>Index</HashLink>
                  </li>
                  <li>
                    <HashLink>Guide</HashLink>
                  </li>
                  <li>
                    <HashLink>Events</HashLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 p-0 footerLinkCont">
                <h3>About Us</h3>
                <ul className="footerLinkBox">
                  <li>
                    <HashLink>About T3</HashLink>
                  </li>
                  <li>
                    <HashLink>Contact Us</HashLink>
                  </li>
                  <li>
                    <HashLink>Careers</HashLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 p-0 footerLinkCont ">
                <h3>Resources</h3>
                <ul className="footerLinkBox">
                  <li>
                    <HashLink>Help Center</HashLink>
                  </li>
                  <li>
                    <HashLink>Book a demo</HashLink>
                  </li>
                  <li>
                    <HashLink>Server status</HashLink>
                  </li>
                  <li>
                    <HashLink>Blog</HashLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3  p-0 footerLinkCont ">
                <h3>Get in touch</h3>
                <ul className="footerLinkBox">
                  <li>
                    <HashLink>Help Center</HashLink>
                  </li>
                  <li>
                    <HashLink>Book a demo</HashLink>
                  </li>
                  <li>
                    <HashLink>Server status</HashLink>
                  </li>
                  <li>
                    <HashLink>Blog</HashLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyCont w-100 py-5 d-flex flex-lg-row flex-md-row flex-sm-column justify-content-between align-items-lg-center align-items-md-center">
            <div className="conditionBox ">
              <p className="mb-3">Terms of service | Privacy Policy </p>
              <h6>
                © All rights reserved by <a href="#">trektourtravel.com</a>{" "}
              </h6>
            </div>
            <div className="socialCont">
              <a href="#">
                <img src={facebook} alt="Facebook Icon" />
              </a>
              <a href="#" className="ml-3">
                <img src={insta} alt="Instagram Icon" />
              </a>
              <a href="#" className="ml-3">
                <img src={linkedin} alt="Linkedin Icon" />
              </a>
              <a href="#" className="ml-3">
                <img src={x} alt="X Icon" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
