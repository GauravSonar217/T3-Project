import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useScroll } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import custReviewData from "../Data/Rating.json";
import newsletter from "../assets/png/newsletter.png";
import img1 from "../assets/jpg/img1.jpg";
import img2 from "../assets/jpg/img2.jpg";
import img3 from "../assets/jpg/img3.jpg";
import img4 from "../assets/jpg/img4.jpg";
import img5 from "../assets/jpg/img5.jpg";
import img6 from "../assets/jpg/img6.jpg";
import yes from "../assets/png/yes.png";
import no from "../assets/png/no.png";
import goTo from "../assets/svg/goTo.svg";
import instagrey from "../assets/svg/instagrey.svg";
import profile from "../assets/png/avatar.png";
import cross from "../assets/svg/cross.svg";
import blog1 from "../assets/jpg/blog1.jpg";
import blog2 from "../assets/jpg/blog2.jpg";
import slide1 from "../assets/jpg/slide1.jpg";
import slide2 from "../assets/jpg/slide2.jpg";
import search from "../assets/svg/search.svg";
import search4 from "../assets/svg/search4.svg";
import filter from "../assets/svg/filter.svg";
import search3 from "../assets/svg/search3.svg";
import ratingSlide from "../assets/jpg/ratingSlide1.jpg";
import apple from "../assets/svg/apple.svg";
import googlelogo from "../assets/svg/google.svg";
import instalogo from "../assets/svg/instalogo.svg";
import location from "../assets/svg/location.svg";
import fea1 from "../assets/png/fea1.png";
import fea2 from "../assets/png/fea2.png";
import fea3 from "../assets/png/fea3.png";
import fea4 from "../assets/png/fea4.png";
import fea5 from "../assets/png/fea5.png";
import fea6 from "../assets/png/fea6.png";
import firstSlide from "../assets/jpg/first.jpg";
import close from "../assets/svg/close.svg";
import event1 from "../assets/jpg/event1.jpg";
import star from "../assets/svg/rating.svg";
import Nav from "../layout/Nav/Nav";
import Footer from "../layout/Footer/Footer";
import ratingStar from "../assets/png/ratingStar.png";
import dashedline from "../assets/svg/dashedline.svg";
import questiontag from "../assets/svg/questionmark.svg";
import Rating from "../component/rating/Rating";
import hiking from "../assets/png/hiking.png";
import travel from "../assets/png/traveler.png";
import traveler from "../assets/png/traveller.png";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/grid";
import { Pagination, Navigation, Grid } from "swiper/modules";
import { Scrollbar } from "swiper/modules";
import Card from "../component/Card";
import { HashLink } from "react-router-hash-link";
import Slider from "../component/slider/Slider";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [swiperRef, setSwiperRef] = useState(null);
  const [showCheck, setShowCheck] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(null);
  const [visible, setVisible] = useState(false);
  const [currentCounts, setCurrentCounts] = useState([0, 0, 0]);
  const counts = [300, 400, 500];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("counterWrapper");
      const rect = section.getBoundingClientRect();
      setVisible(rect.top < window.innerHeight && rect.bottom >= 0);
    };

    const updateCounters = () => {
      if (visible) {
        const intervals = counts.map((count, index) => {
          const increment = Math.ceil(count / 300);
          return setInterval(() => {
            setCurrentCounts((prevCounts) => {
              const newCounts = [...prevCounts];
              newCounts[index] = Math.min(newCounts[index] + increment, count);
              return newCounts;
            });
          }, 1);
        });

        return () => intervals.forEach((interval) => clearInterval(interval));
      }
    };

    window.addEventListener("scroll", handleScroll);
    updateCounters();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visible]);

  const calculateAverageRating = (sectionName) => {
    const targetSectionName = sectionName.toLowerCase() || "trek";
    const section = custReviewData.find(
      (item) => item.sectionName.toLowerCase() === targetSectionName
    );

    if (section) {
      const totalRatings = section.reviewCards.reduce(
        (sum, review) => sum + parseFloat(review.rating),
        0
      );
      const avgRating = totalRatings / section.reviewCards.length;
      setAverageRating(avgRating.toFixed(1));
    } else {
      setAverageRating(null);
    }
  };

  useEffect(() => {
    const defaultSection = custReviewData.find(
      (section) => section.sectionName === "trek"
    );
    setFilteredReviews(defaultSection ? defaultSection.reviewCards : []);
    calculateAverageRating("trek");
  }, [custReviewData]);

  const handleSearch = () => {
    if (
      searchTerm === "trek" ||
      searchTerm === "tour" ||
      searchTerm === "travel"
    ) {
      const section = custReviewData.find(
        (section) => section.sectionName === searchTerm
      );

      setFilteredReviews(section ? section.reviewCards : []);
      calculateAverageRating(searchTerm);
    } else {
      const defaultSection = custReviewData.find(
        (section) => section.sectionName === "trek"
      );
      setFilteredReviews(defaultSection ? defaultSection.reviewCards : []);
      calculateAverageRating("trek");
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const checkstyle = (e) => {
    setShowCheck(!showCheck);
    let check = e.target;
    let cover = e.target.offsetParent.childNodes[0];
    if (check.checked) {
      cover.style.display = "block";
    } else {
      cover.style.display = "none";
    }
  };

  function showForm() {
    setIsLoggedIn(!isLoggedIn);
    console.log(isLoggedIn);
  }

  return (
    <React.Fragment>
      <Nav />
      <header className="w-100 headerSlider">
        <div
          id="carouselExampleCaptions"
          class="carousel slide w-100 h-100"
          data-ride="carousel"
          data-interval="2000"
        >
          <div class="carousel-inner h-100 ">
            <div class="carousel-item h-100  active"></div>
            <div class="carousel-item h-100"></div>
            <div class="carousel-item h-100"></div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only"></span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only"></span>
          </a>
        </div>
        <div className="headerDataCont col-6 border  d-flex flex-column  align-items-center justify-content-center">
          <button className="guideBtn border-0">Looking Guide For</button>
          <div className="btnCont mb-5 mt-5">
            <HashLink to="/trek">Trek</HashLink>
            <HashLink to="/tour" className="mx-5">
              Tour
            </HashLink>
            <HashLink to="/travel">Travel</HashLink>
          </div>
          <div className="headerSearchBar p-4 px-5 mt-3 d-flex align-items-center justify-content-between   ">
            <img src={search4} alt="Search Icon" />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search location..."
              className="border-0 h-100 w-100 pr-4 ml-3"
            />
            <img src={filter} alt="filter icon" className="filter" />
          </div>
        </div>
      </header>
      <section className="counterSec w-100" id="counterWrapper">
        <div className="container h-100 counterCont d-flex justify-content-center align-items-center ">
          <h1 className="mr-5">We Have</h1>
          <div className="counterDataCont p-4 ml-5 d-flex justify-content-between align-items-center ">
            <div className="counterBox mr-5 d-flex align-items-center">
              <div className="countImgBox">
                <img src={hiking} alt="Hiking Logo" />
              </div>
              <div className="countTextBox ml-4">
                <h3 className="mb-3">{currentCounts[0]}+</h3>
                <h5>
                  Verified Trekking <br />
                  location’s information
                </h5>
              </div>
            </div>
            <div className="counterBox mx-5 d-flex align-items-center">
              <div className="countImgBox">
                <img src={traveler} alt="Travle logo" />
              </div>
              <div className="countTextBox ml-4">
                <h3 className="mb-3">{currentCounts[1]}+</h3>
                <h5>
                  Verified Trekking <br />
                  location’s information
                </h5>
              </div>
            </div>
            <div className="counterBox ml-5 d-flex align-items-center">
              <div className="countImgBox">
                <img src={travel} alt="traveller Logo" />
              </div>
              <div className="countTextBox ml-4">
                <h3 className="mb-3">{currentCounts[2]}+</h3>
                <h5>
                  Verified Trekking <br />
                  location’s information
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="locationSec sectionPadding w-100">
        <div className="container h-100 locationCont">
          <ul className="bookmarkLinksCont mb-5 d-flex align-items-center justify-content-center w-100">
            <li>
              <HashLink>Upcoming Events</HashLink>
            </li>
            <li>
              <HashLink>Trekker's choice</HashLink>
            </li>
            <li>
              <HashLink>Most Visited Places</HashLink>
            </li>
            <li>
              <HashLink>Must Explore</HashLink>
            </li>
            <li>
              <HashLink>User Says?</HashLink>
            </li>
            <li>
              <HashLink>Our Camps</HashLink>
            </li>
            <li>
              <HashLink>Tour Packages</HashLink>
            </li>
            <li>
              <HashLink>Tour Packages</HashLink>
            </li>
          </ul>
          <div className="searchSec d-flex flex-column align-items-start">
            <h2 className="text-left text-decoration-none ">
              Your Recent Searches
            </h2>
            <a className="searchAreaBox border mt-4 d-flex align-items-center  ">
              <div>
                <img src={location} alt="location Icon" />
              </div>
              <div className="ml-4">
                <h4 className="mb-1">India</h4>
                <h5>Nashik District</h5>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="carouselSec sectionPadding border border-warning ">
        <div className="container carouselCont">
          <Slider />
        </div>
      </section>

      {/* <section className="loginSec w-100 d-flex flex-lg-row flex-md-column ">
        <div className="loginFormCont d-flex flex-column justify-content-center align-items-center text-center ">
          <div className="formTextContainer">
            <h1>
              Start your <br />
              perfect trip with T3
            </h1>
            <div className="formContainer d-flex flex-column align-items-center  w-100">
              <label className="switchCont d-flex justify-content-between align-items-center ">
                <p className="m-0">Log In</p>
                <label class="switch">
                  <input onClick={showForm} type="checkbox" />
                  <span class="slider"></span>
                </label>
                <p className="m-0">Sign-Up</p>
              </label>
              {isLoggedIn ? (
                <form className="w-100 d-flex flex-column">
                  <input placeholder="Full Name" type="text" />
                  <input name="email" placeholder="Email" type="email" />
                  <input
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                  <button>Sign Up</button>
                </form>
              ) : (
                <form className="w-100 d-flex flex-column ">
                  <input
                    name="email"
                    placeholder="Enter User ID"
                    type="email"
                  />
                  <input
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                  <button>Log In</button>
                </form>
              )}
            </div>
            <p>
              already have an account?
              <HashLink className="ml-2">Login</HashLink>
            </p>
            <h3 className="my-5 ">or</h3>
            <div className="socialIconCont d-flex justify-content-center  ">
              <HashLink className="mr-4 d-flex">
                <img src={instalogo} alt="instagram logo" />
              </HashLink>
              <HashLink className="mr-4">
                <img src={googlelogo} alt="google logo" />
              </HashLink>
              <HashLink className="">
                <img src={apple} alt="apple logo" />
              </HashLink>
            </div>
          </div>
        </div>
        <div className="loginSliderCont p-0 ">
          {/* <button className="skipBtn border-0 position-absolute ">
            Skip <img src={close} alt="cross icon" className="ml-3" />
          </button> 
          <div
            id="carouselExampleCaptions"
            class="carousel slide w-100 h-100"
            data-bs-ride="carousel"
            data-interval="3000"
          >
            <div class="carousel-inner h-100 ">
              <div class="carousel-item h-100  active" data-interval="2000">
                <img src={firstSlide} className="h-100" />
              </div>
              <div class="carousel-item h-100" data-interval="2000">
                <img src={firstSlide} />
              </div>
              <div class="carousel-item h-100" data-interval="2000">
                <img src={firstSlide} />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only"></span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only"></span>
            </a>
          </div>
        </div>
      </section> */}

      {/* <section className="checkSec sectionPadding border  border-warning  w-100 ">
        <div className="container checkCont text-center d-flex flex-column align-items-center ">
          <h2 className="mb-3 text-center">Lorem Ipsum is dummy text</h2>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="row border w-100 border-info p-0 ">
            <div className=" position-relative  border border-warning d-flex align-items-center">
              <div className="checkcover">
                <div className="checkback"></div>
                <input
                  type="checkbox"
                  onClick={checkstyle}
                  name="check"
                  id="check"
                  className=""
                />
              </div>
              <img
                src={questiontag}
                alt="question tag"
                className=" position-absolute"
              />
              <input
                type="text"
                className="p-3 position-relative "
                placeholder="State"
              />
            </div>
            <div className=" border border-warning d-flex align-items-center">
              <div className="checkcover">
                <div className="checkback"></div>
                <input
                  type="checkbox"
                  onClick={checkstyle}
                  name="check"
                  id="check"
                  className=""
                />
              </div>
              <input
                type="text"
                className=" p-3 position-relative"
                placeholder="Festival"
              />
              <img
                src={questiontag}
                alt="question tag"
                className=" position-absolute"
              />
            </div>
            <div className=" border border-warning d-flex align-items-center">
              <div className="checkcover">
                <div className="checkback"></div>
                <input
                  type="checkbox"
                  onClick={checkstyle}
                  name="check"
                  id="check"
                  className=""
                />
              </div>
              <input
                type="text"
                className=" ml-4 p-3 position-relative "
                placeholder="lorem"
              />
              <img
                src={questiontag}
                alt="question tag"
                className=" position-absolute"
              />
            </div>
            <button className="border-0 searchBtn">Search</button>
          </div>
        </div>
      </section> */}
      {/* <section className="sliderSec sectionPadding w-100">
        <div className="container sliderCont d-flex flex-column  align-items-center ">
          <h2 className="mb-3 text-center ">Major Attractions</h2>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took
          </p>
          <Swiper
            className="w-100"
            onSwiper={setSwiperRef}
            slidesPerView={6}
            spaceBetween={30}
            navigation={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              1281: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 5,
                spaceBetween: 35,
              },
              576: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
            }}
          >
            <SwiperSlide>
              <div className="slideImgCont w-100 mb-4">
                <img src={img1} alt="nature pic" />
              </div>
              <div className="sliderTextCont w-100 ">
                <h4 className="mb-2">Lorem Ipsum</h4>
                <p>Lorem Ipsum is dummy text</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slideImgCont w-100 mb-4">
                <img src={img2} alt="nature pic" />
              </div>
              <div className="sliderTextCont w-100 ">
                <h4 className="mb-2">Lorem Ipsum</h4>
                <p>Lorem Ipsum is dummy text</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slideImgCont w-100 mb-4">
                <img src={img3} alt="nature pic" />
              </div>
              <div className="sliderTextCont w-100 ">
                <h4 className="mb-2">Lorem Ipsum</h4>
                <p>Lorem Ipsum is dummy text</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slideImgCont w-100 mb-4">
                <img src={img4} alt="nature pic" />
              </div>
              <div className="sliderTextCont w-100 ">
                <h4 className="mb-2">Lorem Ipsum</h4>
                <p>Lorem Ipsum is dummy text</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slideImgCont w-100 mb-4">
                <img src={img5} alt="nature pic" />
              </div>
              <div className="sliderTextCont w-100 ">
                <h4 className="mb-2">Lorem Ipsum</h4>
                <p>Lorem Ipsum is dummy text</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slideImgCont w-100 mb-4">
                <img src={img6} alt="nature pic" />
              </div>
              <div className="sliderTextCont w-100 ">
                <h4 className="mb-2">Lorem Ipsum</h4>
                <p>Lorem Ipsum is dummy text</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slideImgCont w-100 mb-4">
                <img src={img1} alt="nature pic" />
              </div>
              <div className="sliderTextCont w-100 ">
                <h4 className="mb-2">Lorem Ipsum</h4>
                <p>Lorem Ipsum is dummy text</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slideImgCont w-100 mb-4">
                <img src={img2} alt="nature pic" />
              </div>
              <div className="sliderTextCont w-100 ">
                <h4 className="mb-2">Lorem Ipsum</h4>
                <p>Lorem Ipsum is dummy text</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section> */}
      {/* <section className="sectionPadding bg-dark">
        <div className="container cardSec d-flex flex-lg-row flex-md-column flex-sm-column  justify-content-between ">
          <Card
            imgpath={yes}
            status="Success!"
            desc="Welcome Back! Lorem Ipsum is simply dummy text of the printing and typesetting"
            btnText="done"
            btncolor="success"
          />
          <Card
            imgpath={no}
            status="Oh No..."
            desc="some thing went wrong. let's try again."
            btnText="try again"
            btncolor="failed"
          />
          <div className="offerCard mt-5">
            <img src={cross} alt="cross icon" id="close" />
            <div className="logoBox"></div>
            <h4 className="mb-3">Welcome to Trek Tour Travel!</h4>
            <p className="text-left">
              <input
                type="checkbox"
                name="check"
                id="check"
                className=" m-0  mr-3"
              />
              Yes, please inform me about trek, tour, travel deals, tips and new
              features on trektourtravel.com I can opt out at any time
            </p>
            <button className="w-100 text-center mb-4" id="continueBtn">
              Continue
            </button>
            <button className="w-100 text-center " id="cancelBtn">
              Cancel
            </button>
          </div>
          <div className="eventPopUp d-flex justify-content-between align-items-start mt-5 px-lg-3 px-md-3 py-lg-4 py-md-4">
            <img src={goTo} className=" position-absolute" />
            <div className="profile col-lg-2 col-md-2 ">
              <img src={profile} alt="" />
            </div>
            <div className="eventTextBox col-lg-9 col-md-9">
              <h5>Olivia Rhye</h5>
              <p>olivia@instagram.com</p>
              <h4 className="d-flex align-items-center ">
                <img src={instagrey} alt="" className="mr-2" />
                5Days Harihar camp
              </h4>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="headerSliderSec sectionPadding w-100 border border-2 border-info ">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
          data-interval="3000"
        >
          <div class="carousel-indicators">
            <button
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            ></button>
            <button
              type="button"
              data-target="#carouselExampleCaptions"
              data-slide-to="1"
            ></button>
            <button
              type="button"
              data-target="#carouselExampleCaptions"
              data-slide-to="2"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="2000">
              <img src={slide1} className="w-100" />
              <div className="slideTextBox col-8 text-center  ">
                <h2>Discover Future Treks: Connect with Fellow Explorers!</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div class="carousel-item" data-interval="2000">
              <img src={slide2} className="w-100" />
              <div className="slideTextBox col-8 text-center  ">
                <h2>Discover Future Treks: Connect with Fellow Explorers!</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div class="carousel-item" data-interval="2000">
              <img src={slide1} className="w-100" />
              <div className="slideTextBox col-10 text-center  ">
                <h2>Discover Future Treks: Connect with Fellow Explorers!</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
          {/* <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a> 
        </div>
      </section> */}
      <section className="feartureSec w-100 border border-2 border-warning">
        <div className="container feartureCont d-flex">
          <div className="featureTextCont col-lg-5 col-md-12">
            <h2 className="mb-lg-3">Features</h2>
            <p className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            {/* <button>More Features</button> */}
            <button type="button" class="btn btn-outline-light">
              More Features
            </button>
          </div>
          <div className="featureBoxCont col-lg-7 col-md-12 p-0">
            <div className="featureBox">
              <img src={fea1} alt="" className="mb-4" />
              <h3 className="mb-3">Lorem Ipsum</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown
              </p>
            </div>
            <div className="featureBox">
              <img src={fea2} alt="" className="mb-4" />
              <h3 className="mb-3">Lorem Ipsum</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown
              </p>
            </div>
            <div className="featureBox">
              <img src={fea3} alt="" className="mb-4" />
              <h3 className="mb-3">Lorem Ipsum</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown
              </p>
            </div>
            <div className="featureBox">
              <img src={fea4} alt="" className="mb-4" />
              <h3 className="mb-3">Lorem Ipsum</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown
              </p>
            </div>
            <div className="featureBox">
              <img src={fea5} alt="" className="mb-4" />
              <h3 className="mb-3">Lorem Ipsum</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown
              </p>
            </div>
            <div className="featureBox">
              <img src={fea6} alt="" className="mb-4" />
              <h3 className="mb-3">Lorem Ipsum</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="videoSec border border-warning w-100 vh-100 ">
        <div className="container h-100 "></div>
      </section>
      <section className="eventSliderSec sectionPadding w-100">
        <div className="container eventSliderCont text-center d-flex flex-column align-items-center">
          <h2 className="text-center mb-4">
            Find Upcoming events and camps From Social
          </h2>
          <p className="text-center col-10 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took
          </p>
          <button className="eventBtn border-0">Check all Events</button>
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            grid={{
              rows: 2,
            }}
            scrollbar={{
              show: true,
              draggable: true,
            }}
            breakpoints={{
              2500: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1920: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            modules={[Grid, Pagination, Scrollbar]}
            className="mySwiper"
          >
            <SwiperSlide className="d-flex align-items-start">
              <div className="imgBox p-0 ">
                <img src={event1} alt="event pic" className="w-100" />
              </div>
              <img src={dashedline} className="dashed" />
              <div className="textBox text-left d-flex flex-column align-items-start ">
                <h5 className="mb-2">Lorem Ipsum is Dummy</h5>
                <img src={star} alt="rating" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="d-flex justify-content-between align-items-center  w-100 p-0 ">
                  <button className="checkBtn">Check details</button>
                  <h2>$ 100</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="d-flex align-items-start">
              <div className="imgBox p-0">
                <img src={event1} alt="event pic" className="" />
              </div>
              <img src={dashedline} className="dashed" />
              <div className="textBox  text-left d-flex flex-column align-items-start ">
                <h5 className="mb-2">Lorem Ipsum is Dummy</h5>
                <img src={star} alt="rating" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="d-flex justify-content-between align-items-center w-100  p-0 ">
                  <button className="checkBtn">Check details</button>
                  <h2>$ 100</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="d-flex align-items-start">
              <div className="imgBox p-0 ">
                <img src={event1} alt="event pic" className="w-100" />
              </div>
              <img src={dashedline} className="dashed" />
              <div className="textBox text-left d-flex flex-column align-items-start ">
                <h5 className="mb-2">Lorem Ipsum is Dummy</h5>
                <img src={star} alt="rating" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="d-flex justify-content-between align-items-center w-100 p-0 ">
                  <button className="checkBtn">Check details</button>
                  <h2>$ 100</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="d-flex align-items-start">
              <div className="imgBox p-0">
                <img src={event1} alt="event pic" className="w-100" />
              </div>
              <img src={dashedline} className="dashed" />
              <div className="textBox text-left d-flex flex-column align-items-start ">
                <h5 className="mb-2">Lorem Ipsum is Dummy</h5>
                <img src={star} alt="rating" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="d-flex justify-content-between align-items-center w-100 p-0 ">
                  <button className="checkBtn">Check details</button>
                  <h2>$ 100</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="d-flex align-items-start">
              <div className="imgBox p-0 ">
                <img src={event1} alt="event pic" className="w-100" />
              </div>
              <img src={dashedline} className="dashed" />
              <div className="textBox text-left d-flex flex-column align-items-start ">
                <h5 className="mb-2">Lorem Ipsum is Dummy</h5>
                <img src={star} alt="rating" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="d-flex justify-content-between align-items-center w-100 p-0 ">
                  <button className="checkBtn">Check details</button>
                  <h2>$ 100</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="d-flex align-items-start">
              <div className="imgBox p-0 ">
                <img src={event1} alt="event pic" className="w-100" />
              </div>
              <img src={dashedline} className="dashed" />
              <div className="textBox text-left d-flex flex-column align-items-start ">
                <h5 className="mb-2">Lorem Ipsum is Dummy</h5>
                <img src={star} alt="rating" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="d-flex justify-content-between align-items-center w-100 p-0 ">
                  <button className="checkBtn">Check details</button>
                  <h2>$ 100</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="d-flex align-items-start">
              <div className="imgBox p-0 ">
                <img src={event1} alt="event pic" className="w-100" />
              </div>
              <img src={dashedline} className="dashed" />
              <div className="textBox text-left d-flex flex-column align-items-start ">
                <h5 className="mb-2">Lorem Ipsum is Dummy</h5>
                <img src={star} alt="rating" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="d-flex justify-content-between align-items-center w-100 p-0 ">
                  <button className="checkBtn">Check details</button>
                  <h2>$ 100</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="d-flex align-items-start">
              <div className="imgBox p-0 ">
                <img src={event1} alt="event pic" className="w-100" />
              </div>
              <img src={dashedline} className="dashed" />
              <div className="textBox text-left d-flex flex-column align-items-start ">
                <h5 className="mb-2">Lorem Ipsum is Dummy</h5>
                <img src={star} alt="rating" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="d-flex justify-content-between align-items-center w-100 p-0 ">
                  <button className="checkBtn">Check details</button>
                  <h2>$ 100</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="d-flex align-items-start">
              <div className="imgBox p-0 ">
                <img src={event1} alt="event pic" className="w-100" />
              </div>
              <img src={dashedline} className="dashed" />
              <div className="textBox text-left d-flex flex-column align-items-start ">
                <h5 className="mb-2">Lorem Ipsum is Dummy</h5>
                <img src={star} alt="rating" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="d-flex justify-content-between align-items-center w-100 p-0">
                  <button className="checkBtn">Check details</button>
                  <h2>$ 100</h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="ratingSec sectionPadding border border-warning w-100 ">
        <div className="container ratingWrapper text-center d-flex flex-column align-items-center ">
          <h2 className="mb-3 text-center">They Say</h2>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the lorem ipsum
          </p>
          <div className="ratingCont w-100 d-flex flex-lg-row">
            <div className="col-3 p-0 ">
              <div className="ratingBox mb-4 p-5 text-center d-flex flex-column justify-content-center align-items-center">
                <figure className="d-flex mt-3  align-items-center justify-content-center">
                  <img src={ratingStar} alt="" />
                  <h1 className="m-0 ml-5 mt-2 ">{averageRating}</h1>
                </figure>
                <h3 className="text-center mt-3 mb-3">
                  Average Customer <br /> Rating
                </h3>
              </div>
              <div className="ratingSearchBar mb-4 w-100 d-flex align-items-center justify-content-between ">
                <img
                  src={search3}
                  onClick={handleSearch}
                  alt="search icon"
                  className="ml-4"
                />
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="w-100 p-4 border-0"
                  placeholder="Type trek, tour, or travel"
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <div className="ratingSlider">
                <div
                  id="carouselExampleIndicators"
                  class="carousel slide w-100 h-100"
                  data-ride="carousel"
                  data-interval="2000"
                >
                  <ol class="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      class="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="3"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="4"
                    ></li>
                  </ol>
                  <div class="carousel-inner h-100 ">
                    <div class="carousel-item h-100  active">
                      <img
                        src={ratingSlide}
                        className="h-100"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div class="carousel-item h-100">
                      <img
                        src={ratingSlide}
                        className="h-100"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div class="carousel-item h-100">
                      <img
                        src={ratingSlide}
                        className="h-100"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div class="carousel-item h-100">
                      <img
                        src={ratingSlide}
                        className="h-100"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div class="carousel-item h-100">
                      <img
                        src={ratingSlide}
                        className="h-100"
                        width="auto"
                        height="auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9 ">
              <div className="reviewBoxWrapper w-100 p-4">
                <div className="reviewBoxCont w-100">
                  {filteredReviews.map((review) => (
                    <div key={review.id} className="reviewBox p-4 text-left">
                      <div className="reviewHeader mb-3 d-flex justify-content-between align-items-start">
                        <div className="textBox d-flex justify-content-between align-items-center ">
                          <div className="profileBox">
                            <img src={review.userProfile} alt="" />
                          </div>
                          <div className="ml-4 text-left">
                            <h3 className="m-0 mb-2">{review.userName}</h3>
                            <h5 className="m-0">{review.userJobRole}</h5>
                          </div>
                        </div>
                        <h4 className="m-0">{review.reviewDate}</h4>
                      </div>
                      <h4 className="m-0 mb-2">
                        Lorem Ipsum <Rating star={review.rating} />
                      </h4>
                      <p className="w-100">{review.reviewDesc}</p>
                    </div>
                  ))}
                </div>
                <div className="reviewFooter w-100 d-flex justify-content-center align-items-center">
                  <div className="down d-flex justify-content-center align-items-center">
                    <FaChevronDown
                      style={{ color: "white", fontSize: "2rem" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-100 sectionPadding">
        <div className="container blogSec d-flex flex-lg-column flex-md-column justify-content-start align-items-center text-center ">
          <p className="text-center ">Our Blog</p>
          <h2 className="text-center ">Lorem Ipsum Is dummy text</h2>
          <div className="blogCont d-flex justify-content-between  innerCont w-100 ">
            <div class="card border col-lg-5 p-0 ">
              <img src={blog1} class="card-img-top" alt="..." />
              <div class="card-body px-lg-5 px-md-4">
                <p class="card-title text-left">12th Nov 2023</p>
                <h5 class="card-text text-left">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </h5>
                <p className="text-left">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took.
                </p>
              </div>
            </div>
            <div class="card col-lg-5 p-0 border ">
              <img src={blog2} class="card-img-top" alt="blog image" />
              <div class="card-body px-lg-5 px-md-4">
                <p class="card-title text-left">12th Nov 2023</p>
                <h5 class="card-text text-left">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </h5>
                <p className="text-left">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took.
                </p>
              </div>
            </div>
          </div>
          <button id="viewmore">View More</button>
        </div>
      </section>
      <section className="newsletterSec w-100 ">
        <div
          className="container d-flex justify-content-between align-items-center "
          id="newsletterCont"
        >
          <div className="newsImgCont col-lg-4 col-md-8 col-sm-8">
            <img
              src={newsletter}
              width="100%"
              height="auto"
              alt="newsletter Image"
            />
          </div>
          <div className="newsTextCont col-lg-8 col-md-12 col-sm-12 ">
            <h2 className="text-left mb-5 ">
              Stay in the Loop: Subscribe to <br />
              Our Newsletter for Exclusive Updates and Offers!
            </h2>
            <p>
              Get exclusive updates and travel tips straight to your inbox!
              Subscribe to our newsletter for the latest destinations and
              special offers.
            </p>
            <div className="inputBoxCont d-flex justify-content-start">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                className="border-0 "
              />
              <button className="subscribeBtn ml-lg-4 ml-md-4">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
