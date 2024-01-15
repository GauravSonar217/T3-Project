import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useScroll } from "framer-motion";
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
import apple from "../assets/svg/apple.svg";
import googlelogo from "../assets/svg/google.svg";
import instalogo from "../assets/svg/instalogo.svg";
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
import dashedline from "../assets/svg/dashedline.svg";
import questiontag from "../assets/svg/questionmark.svg";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/grid";

// import required modules
import { Pagination, Navigation, Grid } from "swiper/modules";
// import required modules
import { Scrollbar } from "swiper/modules";
import Card from "../component/Card";
import { HashLink } from "react-router-hash-link";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [swiperRef, setSwiperRef] = useState(null);

  function showForm() {
    setIsLoggedIn(!isLoggedIn);
    console.log(isLoggedIn);
  }

  return (
    <React.Fragment>
      <Nav />
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
      <section className="loginSec w-100 border border-2 border-warning d-flex ">
        <div className="loginFormCont col-lg-5 border border-1 border-danger d-flex flex-column justify-content-start align-items-center text-center ">
          <div className="formTextContainer border border-1 border-danger">
            <h1>
              Start your <br />
              perfect trip with T3
            </h1>
            <div className="formContainer border border-1 border-danger d-flex flex-column align-items-center  w-100">
              <label className="switchCont d-flex justify-content-between align-items-center ">
                <p>Log In</p>
                <label class="switch">
                  <input onClick={showForm} type="checkbox" />
                  <span class="slider"></span>
                </label>
                <p>Sign-Up</p>
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
            <div className="socialIconCont border border-danger d-flex justify-content-center  ">
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
        <div className="loginSliderCont col-lg-7 border border-1 border-danger p-0 ">
          <button className="skipBtn border-0 position-absolute ">
            Skip <img src={close} alt="cross icon" className="ml-3" />
          </button>
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-bs-ride="carousel"
            data-interval="3000"
          >
            <div class="carousel-inner border border-warning">
              <div class="carousel-item active" data-interval="2000">
                <img src={firstSlide} className="w-100" />
              </div>
              <div class="carousel-item" data-interval="2000">
                <img src={firstSlide} className="w-100" />
              </div>
              <div class="carousel-item" data-interval="2000">
                <img src={firstSlide} className="w-100" />
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
      </section>

      <section className="eventSliderSec bg-dark  sectionPadding w-100">
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
      <section className="checkSec sectionPadding border  border-warning  w-100 ">
        <div className="container checkCont text-center d-flex flex-column align-items-center ">
          <h2 className="mb-3 text-center">Lorem Ipsum is dummy text</h2>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="row border w-100 border-info p-0 ">
            <div className=" border border-warning d-flex align-items-center">
              <input type="checkbox" name="check" id="check" className="" />
              <input
                type="text"
                className="ml- p-3 position-relative "
                placeholder="State"
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
                <input type="checkbox" name="check" id="check" className="" />
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
              <input type="checkbox" name="check" id="check" className="" />
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
      </section>

      <section className="sliderSec sectionPadding w-100">
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
      </section>
      <section className="sectionPadding bg-dark">
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
      </section>
      <section className="w-100 bg-dark sectionPadding">
        <div className="container blogSec d-flex flex-lg-column flex-md-column justify-content-start align-items-center text-center ">
          <p className="text-center ">Our Blog</p>
          <h2 className="text-center ">Lorem Ipsum Is dummy text</h2>
          <div className="blogCont d-flex justify-content-between  innerCont w-100 ">
            <div class="card col-lg-5 p-0 border-0  ">
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
            <div class="card col-lg-5 p-0 border-0  ">
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
      <section className="headerSliderSec sectionPadding w-100 border border-2 border-info ">
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
          </a> */}
        </div>
      </section>
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
      <Footer />
    </React.Fragment>
  );
}

export default Home;
