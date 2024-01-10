import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import lang from "../../assets/png/language.png";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const navmenu = document.querySelector("#navMenu");
    const navigation = document.querySelector(".navLinkCont");
    const burgerMenu = document.querySelector(".humburger");

    navmenu.addEventListener("click", () => {
      navmenu.classList.toggle("active");

      if (!showMenu) {
        navigation.classList.remove("navigation-mobile-fadeout");
        setTimeout(() => {
          navigation.classList.toggle("navigation-mobile");
        }, 300);
      } else {
        navigation.classList.toggle("navigation-mobile");
        navigation.classList.add("navigation-mobile-fadeout");
        co;
      }
    });
  }, []);

  return (
    <React.Fragment>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container" id="navbar">
          <a className="navbar-brand" href="#">
            <h1 className="d-flex align-items-center ">
              <div className="blueDot mr-2"></div>T3
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav navLinkCont">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ml-4">
                <a className="nav-link" href="#">
                  Take Guide
                </a>
              </li>
              <li className="nav-item ml-4">
                <a className="nav-link" href="#">
                  Upcoming Events
                </a>
              </li>
              <li className="nav-item ml-4">
                <a className="nav-link" href="#">
                  Join Community
                </a>
              </li>
            </ul>
            <div className="navBtnCont d-flex align-items-center">
              <button id="languageBtn">
                <img src={lang} alt="language icon" /> | EN
              </button>
              <button id="loginBtn" className="ml-3">
                Login
              </button>
              <div className="humburger ml-5" id="navMenu">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </nav> */}

      <nav className="w-100">
        <div
          className="container py-4 d-flex align-items-center justify-content-between "
          id="navbar"
        >
          <h1 className="d-flex align-items-center ">
            <div className="blueDot mr-2"></div>T3
          </h1>
          <ul className="navLinkCont d-lg-flex">
            <li>
              <HashLink className="active">Home</HashLink>
            </li>
            <li>
              <HashLink>Take Guide</HashLink>
            </li>
            <li>
              <HashLink>Upcoming Events</HashLink>
            </li>
            <li>
              <HashLink>Join Community</HashLink>
            </li>
          </ul>
          <div className="navBtnCont d-flex align-items-center">
            <button id="languageBtn">
              <img src={lang} alt="language icon" /> <span>| EN</span>
            </button>
            <button id="loginBtn" className="ml-3">
              Login
            </button>
            <div className="humburger ml-lg-5 ml-md-5" id="navMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
