import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

function DatabaseForm() {
  const [inputArr, setInputArr] = useState([]);
  const [remover, setRemovers] = useState([]);

  const addTask = (inputType, inputClassName, counterClass) => {
    const inputCont = document.querySelector(`.${inputClassName}`);
    const counterDiv = document.querySelector(`.${counterClass}`);
    const node = document.createElement("input");
    const para = document.createElement("p");
    const container = document.createElement("div");

    node.type = inputType;
    node.className = "new p-3 rounded w-100";
    container.className = "myCont w-100";
    para.className = "p-2 border";
    para.textContent = "x";

    container.appendChild(node);
    counterDiv.appendChild(para);
    inputCont.appendChild(container);

    setInputArr(document.querySelectorAll(".myCont"));
    setRemovers(document.querySelectorAll(`.${counterClass} p`));
  };

  // const deleteTask = () => {};

  // remover.forEach((cross, index) => {
  //   cross.addEventListener("click", (e) => {
  //     const counterDiv = document.querySelector(".counterSix");
  //     counterDiv.removeChild(e.currentTarget);
  //     console.log(index);
  //   });
  // });

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <section className="formSec w-100 d-flex justify-content-center align-items-start">
        <div className="container text-center w-100 h-100 pt-5  ">
          <h2 className="mb-5">Trek Guide Database Form</h2>
          <form action="" className="w-100 p-0" onSubmit={handleForm}>
            <div className="row m-0 mb-5 d-flex flex-lg-nowrap ">
              <div className="col-lg-4 form-group d-flex flex-column align-items-start">
                <label htmlFor="locationName" className="mb-1">
                  Location Name:
                </label>
                <input
                  type="text"
                  name=""
                  id="locationName"
                  className="w-100 rounded border p-3"
                />
              </div>
              <div className="col-lg-4 form-group d-flex flex-column align-items-start">
                <label htmlFor="locationType" className="mb-1">
                  Location Type:
                </label>
                <input
                  type="text"
                  name=""
                  id="locationType"
                  className="w-100 rounded border p-3"
                />
              </div>
              <div className="col-lg-4 form-group d-flex flex-column align-items-start">
                <label htmlFor="parentRange" className="mb-1">
                  Parent Range:
                </label>
                <input
                  type="text"
                  name=""
                  id="parentRange"
                  className="w-100 rounded border p-3"
                />
              </div>
            </div>
            <div className=" mb-5 d-flex flex-column align-items-start ">
              <h6>Overview:</h6>
              <div className="w-100 boxBorder rounded paddingZero p-4 mb-4 ">
                <div className="innerCont">
                  <div className="row mb-3 d-flex flex-lg-nowrap ">
                    <div className="col-lg-3 col-md-6 form-group d-flex flex-column align-items-start">
                      <label htmlFor="country" className="mb-1">
                        Country:
                      </label>
                      <input
                        type="text"
                        name=""
                        id="country"
                        className="w-100 rounded border p-3"
                      />
                    </div>
                    <div className="col-lg-3 col-md-6 form-group  d-flex flex-column align-items-start">
                      <label htmlFor="state" className="mb-1">
                        State :
                      </label>
                      <input
                        type="text"
                        name=""
                        id="state"
                        className="w-100 rounded border p-3"
                      />
                    </div>
                    <div className="col-lg-3 col-md-6 form-group d-flex flex-column align-items-start">
                      <label htmlFor="district" className="mb-1">
                        District :
                      </label>
                      <input
                        type="text"
                        name=""
                        id="district"
                        className="w-100 rounded border p-3"
                      />
                    </div>
                    <div className="col-lg-3 col-md-6 form-group d-flex flex-column align-items-start">
                      <label htmlFor="region" className="mb-1">
                        Region:
                      </label>
                      <input
                        type="text"
                        name=""
                        id="region"
                        className="w-100 rounded border p-3"
                      />
                    </div>
                  </div>
                  <div className="row mb-3  d-flex flex-lg-nowrap ">
                    <div className="col-lg-3 col-md-6 form-group d-flex flex-column align-items-start">
                      <label htmlFor="range" className="mb-1">
                        Range :
                      </label>
                      <input
                        type="text"
                        name=""
                        id="range"
                        className="w-100 rounded border p-3"
                      />
                    </div>
                    <div className="col-lg-3 col-md-6 form-group d-flex flex-column align-items-start">
                      <label htmlFor="altitude" className="mb-1">
                        Altitude :
                      </label>
                      <input
                        type="text"
                        name=""
                        id="altitude"
                        className="w-100 rounded border p-3"
                      />
                    </div>
                    <div className="col-lg-3 col-md-6 form-group d-flex flex-column align-items-start">
                      <label htmlFor="duration" className="mb-1">
                        Duration :
                      </label>
                      <select
                        name=""
                        id="duration"
                        className="w-100 rounded border p-3"
                      >
                        <optgroup>
                          <option value="">1 day</option>
                          <option value="">2 days</option>
                          <option value="">3 days</option>
                          <option value="">7 days</option>
                          <option value="">15 days</option>
                          <option value="">30 days</option>
                        </optgroup>
                      </select>
                    </div>
                    <div className="col-lg-3 col-md-6 form-group d-flex flex-column align-items-start">
                      <label htmlFor="equipment" className="mb-1">
                        Are any equipment required :
                      </label>
                      <div className="d-flex w-100  p-0 flex-lg-nowrap justify-content-start ">
                        <div className="inputTextOne w-100 mr-3 d-flex flex-column">
                          <input
                            type="text"
                            name=""
                            id="equipment"
                            className="rounded border w-100  p-3 mr-3"
                          />
                        </div>
                        <div className="rounded d-flex flex-column justify-content-between counter counterOne">
                          <h5
                            className="p-3"
                            onClick={() =>
                              addTask("text", "inputTextOne", "counterOne")
                            }
                          >
                            +
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex flex-lg-nowrap ">
                    <div className="col-lg-3 col-md-5 form-group d-flex flex-column align-items-start">
                      <p htmlFor="comment">Grade :</p>
                      <div className="w-100">
                        <div className="mb-3 d-flex justify-content-between align-items-center">
                          <label htmlFor="easy">Easy:</label>
                          <input
                            type="text"
                            className="rounded green col-8 p-3"
                            id="easy"
                            name=""
                          />
                        </div>
                        <div className="mb-3 d-flex justify-content-between align-items-center">
                          <label htmlFor="moderate" className="mr-3">
                            Moderate:
                          </label>
                          <input
                            type="text"
                            className="rounded yellow col-8 p-3"
                            id="moderate"
                            name=""
                          />
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <label htmlFor="difficult">Difficult:</label>
                          <input
                            type="text"
                            className="rounded red col-8  p-3"
                            id="difficult"
                            name=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-7 form-group border-2 d-flex flex-column align-items-start">
                      <label htmlFor="trekTips">Trek Tips :</label>
                      <textarea
                        className="form-control h-100"
                        id="trekTips"
                        name=""
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mb-5 d-flex flex-column align-items-start ">
              <h6>Attractions Points:</h6>
              <div className="w-100 boxBorder paddingZero rounded p-4 mb-4 ">
                <div className="innerCont ">
                  <div className="row d-flex flex-lg-nowrap align-items-start  ">
                    <div className="col-lg-3 col-md-12 form-group d-flex flex-column align-items-start">
                      <label htmlFor="attractionFile" className="mb-1">
                        Choose File:
                      </label>
                      <input
                        type="file"
                        name=""
                        id="attractionFile"
                        className="w-100 rounded border p-3 file"
                      />
                    </div>
                    <div className="col-lg-3 col-md-12 form-group d-flex flex-column align-items-start">
                      <label htmlFor="attractionState" className="mb-1">
                        State:
                      </label>
                      <input
                        type="text"
                        name=""
                        id="attractionState"
                        className="w-100 rounded border p-3"
                      />
                    </div>
                    <div className="col-lg-6 col-md-12 form-group d-flex flex-column align-items-start">
                      <label htmlFor="AttractionShortDesc" className="mb-1">
                        Short Description:
                      </label>
                      <div className="d-flex w-100  flex-lg-nowrap justify-content-start ">
                        <div className="inputTextTwo w-100 mr-3 d-flex flex-column">
                          <input
                            type="text"
                            name=""
                            id="AttractionShortDesc"
                            className="w-100 rounded border p-3 mr-3"
                          />
                        </div>
                        <div className="rounded d-flex flex-column justify-content-between counter counterTwo">
                          <h5
                            className="p-3"
                            onClick={() =>
                              addTask("text", "inputTextTwo", "counterTwo")
                            }
                          >
                            +
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mb-5 d-flex flex-column align-items-start ">
              <h6>Insightful information:</h6>
              <div className="w-100 boxBorder paddingZero rounded  p-5 mb-4">
                <div className="innerCont ">
                  <div className="row mb-5 d-flex flex-column justify-content-center ">
                    <h3 className="mb-5">Foods</h3>
                    <div className="d-flex flex-lg-nowrap flex-wrap  align-items-start ">
                      <div className="col-lg-3 col-md-12 form-group d-flex flex-column align-items-start">
                        <label htmlFor="foodFile" className="mb-1">
                          Choose File:
                        </label>
                        <input
                          type="file"
                          name=""
                          className="w-100 rounded border p-3 file"
                          id="foodFile"
                        />
                      </div>
                      <div className="col-lg-3 col-md-12 form-group d-flex flex-column align-items-start">
                        <label htmlFor="foodState" className="mb-1">
                          State:
                        </label>
                        <input
                          type="text"
                          name=""
                          id="foodState"
                          className="w-100 rounded border p-3"
                        />
                      </div>
                      <div className="col-lg-6 col-md-12 form-group d-flex flex-column align-items-start">
                        <label htmlFor="foodShortDesc" className="mb-1">
                          Short Description:
                        </label>
                        <div className="d-flex w-100  flex-lg-nowrap justify-content-start ">
                          <div className="inputTextThree w-100 mr-3 d-flex flex-column">
                            <input
                              type="text"
                              name=""
                              id="foodShortDesc"
                              className="w-100 rounded border p-3 mr-3"
                            />
                          </div>
                          <div className="rounded d-flex flex-column justify-content-between counter counterThree">
                            <h5
                              className="p-3"
                              onClick={() =>
                                addTask(
                                  "text",
                                  "inputTextThree",
                                  "counterThree"
                                )
                              }
                            >
                              +
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-5 d-flex flex-column justify-content-center ">
                    <h3 className="mb-5">Drinking water</h3>
                    <div className="d-flex flex-lg-nowrap flex-wrap  align-items-start">
                      <div className="col-lg-3 col-md-12 form-group d-flex flex-column align-items-start">
                        <label htmlFor="waterState" className="mb-1">
                          Choose File:
                        </label>
                        <input
                          type="file"
                          name=""
                          id="waterState"
                          className="w-100 rounded border p-3 file"
                        />
                      </div>
                      <div className="col-lg-3 col-md-12 form-group d-flex flex-column align-items-start">
                        <label htmlFor="waterState" className="mb-1">
                          State:
                        </label>
                        <input
                          type="text"
                          name=""
                          id="waterState"
                          className="w-100 rounded border p-3"
                        />
                      </div>
                      <div className="col-lg-6 col-md-12 form-group d-flex flex-column align-items-start">
                        <label htmlFor="waterShortDesc" className="mb-1">
                          Short Description:
                        </label>
                        <div className="d-flex w-100  flex-lg-nowrap justify-content-start ">
                          <div className="inputTextFour w-100 mr-3 d-flex flex-column">
                            <input
                              type="text"
                              name=""
                              id="waterShortDesc"
                              className="w-100 rounded border p-3 mr-3"
                            />
                          </div>
                          <div className="rounded d-flex flex-column justify-content-between counter counterFour">
                            <h5
                              className="p-3"
                              onClick={() =>
                                addTask("text", "inputTextFour", "counterFour")
                              }
                            >
                              +
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-5 d-flex flex-column justify-content-center ">
                    <h3 className="mb-5">Accommodation</h3>
                    <div className="d-flex flex-lg-nowrap flex-wrap align-items-start">
                      <div className="col-lg-3 col-md-12 form-group d-flex flex-column align-items-start">
                        <label htmlFor="accomodationState" className="mb-1">
                          Choose File:
                        </label>
                        <input
                          type="file"
                          name=""
                          id="accomodationState"
                          className="w-100 rounded border p-3 file"
                        />
                      </div>
                      <div className="col-lg-3 col-md-12 form-group d-flex flex-column align-items-start">
                        <label htmlFor="accomodationState" className="mb-1">
                          State:
                        </label>
                        <input
                          type="text"
                          name=""
                          id="accomodationState"
                          className="w-100 rounded border p-3"
                        />
                      </div>
                      <div className="col-lg-6 col-md-12 form-group d-flex flex-column align-items-start">
                        <label htmlFor="accShortDesc" className="mb-1">
                          Short Description:
                        </label>
                        <div className="d-flex w-100  flex-lg-nowrap justify-content-start ">
                          <div className="inputTextFive w-100 mr-3 d-flex flex-column">
                            <input
                              type="text"
                              name=""
                              id="accShortDesc"
                              className="w-100 rounded border p-3 mr-3"
                            />
                          </div>
                          <div className="rounded d-flex flex-column justify-content-between counter counterFive">
                            <h5
                              className="p-3"
                              onClick={() =>
                                addTask("text", "inputTextFive", "counterFive")
                              }
                            >
                              +
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-5 d-flex flex-column justify-content-center ">
                    <h3 className="mb-5">Weather</h3>
                    <div className="d-flex flex-lg-nowrap flex-wrap  justify-content-center">
                      <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                        <label htmlFor="summer" className="mb-1">
                          Summer:
                        </label>
                        <input
                          type="text"
                          name=""
                          id="summer"
                          className="w-100 rounded border p-3"
                        />
                      </div>
                      <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                        <label htmlFor="monsoon" className="mb-1">
                          Monsoon:
                        </label>
                        <input
                          type="text"
                          name=""
                          id="monsoon"
                          className="w-100 rounded border p-3"
                        />
                      </div>
                      <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                        <label htmlFor="winter" className="mb-1">
                          Winter:
                        </label>
                        <input
                          type="text"
                          name=""
                          id="winter"
                          className="w-100 rounded border p-3"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex flex-column justify-content-center ">
                    <div className="d-flex flex-lg-nowrap flex-wrap  justify-content-center">
                      <div className="col-lg-4 mb-md-4 form-group d-flex flex-column align-items-start">
                        <label htmlFor="photos" className="mb-3 subHead">
                          Photos
                        </label>
                        <div className="d-flex w-100 flex-lg-nowrap justify-content-start ">
                          <div className="d-flex w-100 mr-3  flex-column inputFileCont">
                            <input
                              type="file"
                              name=""
                              id="photos"
                              className="w-100 rounded border p-3 file"
                            />
                          </div>
                          <div className="rounded d-flex flex-column justify-content-between counter counterSix">
                            <h5
                              className="p-3"
                              onClick={() =>
                                addTask("file", "inputFileCont", "counterSix")
                              }
                            >
                              +
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 mb-md-4 form-group d-flex flex-column align-items-start">
                        <label htmlFor="mobileNetwork" className="mb-3 subHead">
                          Mobile Networks
                        </label>
                        <div className="d-flex w-100  flex-lg-nowrap justify-content-start ">
                          <div className="inputTextSix w-100 mr-3 d-flex flex-column">
                            <input
                              type="text"
                              name=""
                              id="mobileNetwork"
                              className="w-100 mr-3 rounded border p-3"
                            />
                          </div>
                          <div className="rounded d-flex flex-column justify-content-between counter counterSeven">
                            <h5
                              className="p-3"
                              onClick={() =>
                                addTask("text", "inputTextSix", "counterSeven")
                              }
                            >
                              +
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 form-group d-flex flex-column align-items-start">
                        <label htmlFor="contact" className="mb-3 subHead">
                          Contacts
                        </label>
                        <div className="d-flex w-100  flex-lg-nowrap justify-content-start ">
                          <div className="inputTextSeven w-100 mr-3 d-flex flex-column">
                            <input
                              type="text"
                              name=""
                              id="contact"
                              className="w-100 mr-3 rounded border p-3"
                            />
                          </div>
                          <div className="rounded d-flex flex-column justify-content-between counter counterEight">
                            <h5
                              className="p-3"
                              onClick={() =>
                                addTask(
                                  "text",
                                  "inputTextSeven",
                                  "counterEight"
                                )
                              }
                            >
                              +
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5 d-flex flex-column align-items-start ">
              <h6>How to Reach:</h6>
              <div className="w-100 boxBorder paddingZero rounded p-5 mb-4">
                <div className="innerCont ">
                  <div className="row mb-5 d-flex flex-lg-nowrap justify-content-start">
                    <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                      <label htmlFor="base" className="mb-1">
                        Base:
                      </label>
                      <input
                        type="text"
                        name=""
                        id="base"
                        className="w-100 rounded border p-3"
                      />
                    </div>
                    <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                      <label htmlFor="nearestTown" className="mb-1">
                        Nearest Town:
                      </label>
                      <input
                        type="text"
                        name=""
                        id="nearestTown"
                        className="w-100 rounded border p-3"
                      />
                    </div>
                    <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                      <label htmlFor="trekTime" className="mb-1">
                        Trek Time:
                      </label>
                      <input
                        type="text"
                        name=""
                        id="trekTime"
                        className="w-100 rounded border p-3"
                      />
                    </div>
                  </div>
                  <div className="row d-flex flex-column flex-lg-nowrap align-items-start">
                    <h4 className="mb-3 ml-3">How to reach base:</h4>
                    <div className="w-100 d-flex flex-lg-nowrap flex-wrap  justify-content-center">
                      <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                        <label htmlFor="selfDrive" className="mb-1">
                          Self Drive:
                        </label>
                        <div className="d-flex w-100 mb-3 flex-lg-nowrap justify-content-start ">
                          <input
                            type="text"
                            name=""
                            id="selfDrive"
                            className="w-100 mr-3 rounded border p-3"
                            placeholder="Enter Route"
                          />
                          <div className="p-3 rounded border bg-white  border-black  border-2 counter">
                            <FiPlus />
                          </div>
                        </div>
                        <div className="d-flex w-100 mb-3   flex-lg-nowrap justify-content-start ">
                          <input
                            type="text"
                            name=""
                            className="w-100 mr-3 rounded border p-3"
                            placeholder="Recommendation"
                          />
                          <div className="p-3 bg-white  rounded border border-2 counter">
                            <FiPlus />
                          </div>
                        </div>
                        <div className="d-flex w-100 mb-3 flex-lg-nowrap justify-content-start ">
                          <input
                            type="text"
                            name=""
                            className="w-100 mr-3 rounded border p-3"
                            placeholder="Parking"
                          />
                          <div className="p-3 bg-white  rounded border border-2 counter">
                            <FiPlus />
                          </div>
                        </div>
                        <div className="d-flex w-100  flex-lg-nowrap justify-content-start ">
                          <input
                            type="text"
                            name=""
                            className="w-100 mr-3 rounded border p-3"
                            placeholder="Note"
                          />
                          <div className="p-3 bg-white  rounded border border-2 counter">
                            <FiPlus />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                        <label htmlFor="publicTransport" className="mb-1">
                          Public transport:
                        </label>
                        <input
                          type="text"
                          name=""
                          id="publicTransport"
                          className="w-100 rounded border p-3"
                        />
                      </div>
                      <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                        <label htmlFor="rail" className="mb-1">
                          Rail:
                        </label>
                        <input
                          type="text"
                          name=""
                          id="rail"
                          className="w-100 rounded border p-3"
                        />
                      </div>
                      <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                        <label htmlFor="air" className="mb-1">
                          Air:
                        </label>
                        <input
                          type="text"
                          name=""
                          id="air"
                          className="w-100 rounded border p-3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5 d-flex flex-column align-items-start ">
              <h6>Contact:</h6>
              <div className="w-100 boxBorder paddingZero rounded p-5">
                <div className="innerCont ">
                  <div className="row d-flex flex-column flex-lg-nowrap align-items-start">
                    <div className="w-100 d-flex flex-lg-nowrap flex-wrap  justify-content-center">
                      <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                        <label htmlFor="petrolpump" className="mb-1">
                          Petrol Pump:
                        </label>
                        <div className="d-flex w-100 flex-lg-nowrap justify-content-start ">
                          <div className="inputTextEight w-100 mr-3 d-flex flex-column">
                            <input
                              type="text"
                              name=""
                              id="petrolpump"
                              className="w-100 mr-3 rounded border p-3"
                              placeholder="Enter Detail"
                            />
                          </div>
                          <div className="rounded d-flex flex-column justify-content-between counter counterNine">
                            <h5
                              className="p-3"
                              onClick={() =>
                                addTask("text", "inputTextEight", "counterNine")
                              }
                            >
                              +
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                        <label htmlFor="garage" className="mb-1">
                          Garage:
                        </label>
                        <div className="d-flex w-100 flex-lg-nowrap justify-content-start ">
                          <div className="inputTextNine w-100 mr-3 d-flex flex-column">
                            <input
                              type="text"
                              name=""
                              id="garage"
                              className="w-100 mr-3 rounded border p-3"
                              placeholder="Enter Detail"
                            />
                          </div>
                          <div className="rounded d-flex flex-column justify-content-between counter counterTen">
                            <h5
                              className="p-3"
                              onClick={() =>
                                addTask("text", "inputTextNine", "counterTen")
                              }
                            >
                              +
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                        <label htmlFor="hospital" className="mb-1">
                          Hospitals:
                        </label>
                        <div className="d-flex w-100 flex-lg-nowrap justify-content-start ">
                          <div className="inputTextTen w-100 mr-3 d-flex flex-column">
                            <input
                              type="text"
                              name=""
                              id="hospital"
                              className="w-100 mr-3 rounded border p-3"
                              placeholder="Enter Detail"
                            />
                          </div>
                          <div className="rounded d-flex flex-column justify-content-between  border border-2 counter counterEleven">
                            <h5
                              className="p-3"
                              onClick={() =>
                                addTask("text", "inputTextTen", "counterEleven")
                              }
                            >
                              +
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                        <label htmlFor="policeStation" className="mb-1">
                          Police Station:
                        </label>
                        <div className="d-flex w-100 flex-lg-nowrap justify-content-start ">
                          <div className="inputTextEleven w-100 mr-3 d-flex flex-column">
                            <input
                              type="text"
                              name=""
                              id="policeStation"
                              className="w-100 mr-3 rounded border p-3"
                              placeholder="Enter Detail"
                            />
                          </div>
                          <div className="rounded d-flex flex-column justify-content-between  border border-2 counter counterTwelve">
                            <h5
                              className="p-3"
                              onClick={() =>
                                addTask(
                                  "text",
                                  "inputTextEleven",
                                  "counterTwelve"
                                )
                              }
                            >
                              +
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button id="submitBtn" type="submit">
              Submit Now
            </button>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
}

export default DatabaseForm;
