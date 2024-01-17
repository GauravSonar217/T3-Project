import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../layout/Footer/Footer";
import Nav from "../layout/Nav/Nav";
import fea1 from "../assets/png/fea1.png";
import fea2 from "../assets/png/fea2.png";
import fea3 from "../assets/png/fea3.png";
import fea4 from "../assets/png/fea4.png";
import fea5 from "../assets/png/fea5.png";
import fea6 from "../assets/png/fea6.png";
import img1 from "../assets/jpg/img1.jpg";
import img2 from "../assets/jpg/img2.jpg";
import img3 from "../assets/jpg/img3.jpg";
import img4 from "../assets/jpg/img4.jpg";
import img5 from "../assets/jpg/img5.jpg";
import img6 from "../assets/jpg/img6.jpg";
import star from "../assets/svg/rating.svg";
import dashedline from "../assets/svg/dashedline.svg";
import event1 from "../assets/jpg/event1.jpg";
import questiontag from "../assets/svg/questionmark.svg";
import slide1 from "../assets/jpg/slide1.jpg";
import slide2 from "../assets/jpg/slide2.jpg";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/grid";
import { Pagination, Navigation, Grid } from "swiper/modules";
import { Scrollbar } from "swiper/modules";
import { HashLink } from "react-router-hash-link";
import Slider from "../component/slider/Slider";

function TrekPage() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [showCheck, setShowCheck] = useState(false);

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

  return (
    <React.Fragment>
      <Nav />
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
              <img src={slide2} className="w-100" />
              <div className="slideTextBox col-8 text-center  ">
                {/* <h2>Discover Future Treks: Connect with Fellow Explorers!</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p> */}
              </div>
            </div>
            <div class="carousel-item" data-interval="2000">
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
              <div className="slideTextBox col-10 text-center  ">
                {/* <h2>Discover Future Treks: Connect with Fellow Explorers!</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p> */}
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
      <Footer />
    </React.Fragment>
  );
}

export default TrekPage;
