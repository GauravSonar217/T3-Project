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
    node.className = "new p-2 rounded w-100";
    container.className = "myCont w-100";
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
          <h2 className="mb-5">Sahyadri Trek Guide Database Form</h2>
          <form action="" className="w-100 p-0" onSubmit={handleForm}>
            <div className="row m-0 mb-4 d-flex flex-lg-nowrap ">
              <div className="col-lg-4 form-group d-flex flex-column align-items-start">
                <label htmlFor="" className="mb-1">
                  Location Name:
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-100 rounded border p-2"
                />
              </div>
              <div className="col-lg-4 form-group d-flex flex-column align-items-start">
                <label htmlFor="" className="mb-1">
                  Location Type:
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-100 rounded border p-2 "
                />
              </div>
              <div className="col-lg-4 form-group d-flex flex-column align-items-start">
                <label htmlFor="" className="mb-1">
                  Parent Range:
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-100 rounded border p-2"
                />
              </div>
            </div>
            <div className=" mb-5 d-flex flex-column align-items-start ">
              <h6>Overview:</h6>
              <div className="w-100 boxBorder rounded paddingZero p-4 ">
                <div className="innerCont">
                  <div className="row mb-3 d-flex flex-lg-nowrap ">
                    <div className="col-lg-3 col-md-6 form-group d-flex flex-column align-items-start">
                      <label htmlFor="" className="mb-1">
                        Country:
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="w-100 rounded border p-2"
                      />
                    </div>
                    <div className="col-lg-3 col-md-6 form-group  d-flex flex-column align-items-start">
                      <label htmlFor="" className="mb-1">
                        State :
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="w-100 rounded border p-2"
                      />
                    </div>
                    <div className="col-lg-3 col-md-6 form-group d-flex flex-column align-items-start">
                      <label htmlFor="" className="mb-1">
                        District :
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="w-100 rounded border p-2"
                      />
                    </div>
                    <div className="col-lg-3 col-md-6 form-group d-flex flex-column align-items-start">
                      <label htmlFor="" className="mb-1">
                        Region:
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="w-100 rounded border p-2"
                      />
                    </div>
                  </div>
                  <div className="row mb-3  d-flex flex-lg-nowrap ">
                    <div className="col-lg-3 col-md-6 form-group d-flex flex-column align-items-start">
                      <label htmlFor="" className="mb-1">
                        Range :
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="w-100 rounded border p-2"
                      />
                    </div>
                    <div className="col-lg-3 col-md-6 form-group d-flex flex-column align-items-start">
                      <label htmlFor="" className="mb-1">
                        Altitude :
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="w-100 rounded border p-2 "
                      />
                    </div>
                    <div className="col-lg-3 col-md-6 form-group d-flex flex-column align-items-start">
                      <label htmlFor="" className="mb-1">
                        Duration :
                      </label>
                      <select
                        name="duration"
                        className="w-100 rounded border p-2 "
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
                      <label htmlFor="" className="mb-1">
                        Are any equipment required :
                      </label>
                      <div className="d-flex w-100  p-0 flex-lg-nowrap justify-content-start ">
                        <div className="inputTextOne w-100 mr-3 d-flex flex-column">
                          <input
                            type="text"
                            name="name"
                            className="rounded border w-100  p-2 mr-3"
                          />
                        </div>
                        <div className="rounded d-flex flex-column justify-content-between  border border-2 counter counterOne">
                          <h5
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
                      <label htmlFor="comment">Grade :</label>
                      <div className="w-100">
                        <div className="mb-3 d-flex justify-content-between align-items-center">
                          <p>Easy:</p>
                          <input
                            type="text"
                            className="rounded green col-8 p-2 "
                          />
                        </div>
                        <div className="mb-3 d-flex justify-content-between align-items-center">
                          <p className="mr-3">Moderate:</p>
                          <input
                            type="text"
                            className="rounded yellow col-8 p-2"
                          />
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <p>Difficult:</p>
                          <input
                            type="text"
                            className="rounded red col-8  p-2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-7 form-group border-2 d-flex flex-column align-items-start">
                      <label htmlFor="comment">Trek Tips :</label>
                      <textarea className="form-control h-100"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mb-5 d-flex flex-column align-items-start ">
              <h6>Attractions Points:</h6>
              <div className="w-100 boxBorder paddingZero rounded p-4 ">
                <div className="innerCont ">
                  <div className="row d-flex flex-lg-nowrap align-items-start  ">
                    <div className="col-lg-3 col-md-12 form-group d-flex flex-column align-items-start">
                      <label className="mb-1 disable">.</label>
                      <input
                        type="file"
                        name="name"
                        className="w-100 rounded border p-2 file"
                      />
                    </div>
                    <div className="col-lg-3 col-md-12 form-group d-flex flex-column align-items-start">
                      <label htmlFor="" className="mb-1">
                        State:
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="w-100 rounded border p-2"
                      />
                    </div>
                    <div className="col-lg-6 col-md-12 form-group d-flex flex-column align-items-start">
                      <label htmlFor="" className="mb-1">
                        Short Description:
                      </label>
                      <div className="d-flex w-100  flex-lg-nowrap justify-content-start ">
                        <div className="inputTextTwo w-100 mr-3 d-flex flex-column">
                          <input
                            type="text"
                            name="name"
                            className="w-100 rounded border p-2 mr-3"
                          />
                        </div>
                        <div className="rounded d-flex flex-column justify-content-between  border border-2 counter counterTwo">
                          <h5
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
              <div className="w-100 boxBorder paddingZero rounded  p-5">
                <div className="innerCont ">
                  <div className="row mb-5 d-flex flex-column justify-content-center ">
                    <h3 className="mb-4">Foods</h3>
                    <div className="d-flex flex-lg-nowrap flex-wrap  align-items-start ">
                      <div className="col-lg-3 col-md-12 form-group d-flex flex-column align-items-start">
                        <label className="mb-1 disable">.</label>
                        <input
                          type="file"
                          name="name"
                          className="w-100 rounded border p-2 file"
                        />
                      </div>
                      <div className="col-lg-3 col-md-12 form-group d-flex flex-column align-items-start">
                        <label htmlFor="" className="mb-1">
                          State:
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="w-100 rounded border p-2"
                        />
                      </div>
                      <div className="col-lg-6 col-md-12 form-group d-flex flex-column align-items-start">
                        <label htmlFor="" className="mb-1">
                          Short Description:
                        </label>
                        <div className="d-flex w-100  flex-lg-nowrap justify-content-start ">
                          <div className="inputTextThree w-100 mr-3 d-flex flex-column">
                            <input
                              type="text"
                              name="name"
                              className="w-100 rounded border p-2 mr-3"
                            />
                          </div>
                          <div className="rounded d-flex flex-column justify-content-between  border border-2 counter counterThree">
                            <h5
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
                    <h3 className="mb-4">Drinking water</h3>
                    <div className="d-flex flex-lg-nowrap flex-wrap  align-items-start">
                      <div className="col-lg-3 col-md-12 form-group d-flex flex-column align-items-start">
                        <label className="mb-1 disable">.</label>
                        <input
                          type="file"
                          name="name"
                          className="w-100 rounded border p-2 file"
                        />
                      </div>
                      <div className="col-lg-3 col-md-12 form-group d-flex flex-column align-items-start">
                        <label htmlFor="" className="mb-1">
                          State:
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="w-100 rounded border p-2"
                        />
                      </div>
                      <div className="col-lg-6 col-md-12 form-group d-flex flex-column align-items-start">
                        <label htmlFor="" className="mb-1">
                          Short Description:
                        </label>
                        <div className="d-flex w-100  flex-lg-nowrap justify-content-start ">
                          <div className="inputTextFour w-100 mr-3 d-flex flex-column">
                            <input
                              type="text"
                              name="name"
                              className="w-100 rounded border p-2 mr-3"
                            />
                          </div>
                          <div className="rounded d-flex flex-column justify-content-between  border border-2 counter counterFour">
                            <h5
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
                    <h3 className="mb-4">Accommodation</h3>
                    <div className="d-flex flex-lg-nowrap flex-wrap align-items-start">
                      <div className="col-lg-3 col-md-12 form-group d-flex flex-column align-items-start">
                        <label className="mb-1 disable">.</label>
                        <input
                          type="file"
                          name="name"
                          className="w-100 rounded border p-2 file"
                        />
                      </div>
                      <div className="col-lg-3 col-md-12 form-group d-flex flex-column align-items-start">
                        <label htmlFor="" className="mb-1">
                          State:
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="w-100 rounded border p-2"
                        />
                      </div>
                      <div className="col-lg-6 col-md-12 form-group d-flex flex-column align-items-start">
                        <label htmlFor="" className="mb-1">
                          Short Description:
                        </label>
                        <div className="d-flex w-100  flex-lg-nowrap justify-content-start ">
                          <div className="inputTextFive w-100 mr-3 d-flex flex-column">
                            <input
                              type="text"
                              name="name"
                              className="w-100 rounded border p-2 mr-3"
                            />
                          </div>
                          <div className="rounded d-flex flex-column justify-content-between  border border-2 counter counterFive">
                            <h5
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
                    <h3 className="mb-4">Weather</h3>
                    <div className="d-flex flex-lg-nowrap flex-wrap  justify-content-center">
                      <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                        <label htmlFor="" className="mb-1">
                          Summer:
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="w-100 rounded border p-2"
                        />
                      </div>
                      <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                        <label htmlFor="" className="mb-1">
                          Monsoon:
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="w-100 rounded border p-2"
                        />
                      </div>
                      <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                        <label htmlFor="" className="mb-1">
                          Winter:
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="w-100 rounded border p-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex flex-column justify-content-center ">
                    <div className="d-flex flex-lg-nowrap flex-wrap  justify-content-center">
                      <div className="col-lg-4 mb-md-4 form-group d-flex flex-column align-items-start">
                        <h3>Photos</h3>
                        <div className="d-flex w-100 flex-lg-nowrap justify-content-start ">
                          <div className="d-flex w-100 mr-3  flex-column inputFileCont">
                            <input
                              type="file"
                              name="name"
                              className="w-100 rounded border p-2 file"
                            />
                          </div>
                          <div className="rounded d-flex flex-column justify-content-between  border border-2 counter counterSix">
                            <h5
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
                        <h3>Mobile Networks</h3>
                        <div className="d-flex w-100  flex-lg-nowrap justify-content-start ">
                          <div className="inputTextSix w-100 mr-3 d-flex flex-column">
                            <input
                              type="text"
                              name="name"
                              className="w-100 mr-3 rounded border p-2"
                            />
                          </div>
                          <div className="rounded d-flex flex-column justify-content-between  border border-2 counter counterSeven">
                            <h5
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
                        <h3>Contacts</h3>
                        <div className="d-flex w-100  flex-lg-nowrap justify-content-start ">
                          <div className="inputTextSeven w-100 mr-3 d-flex flex-column">
                            <input
                              type="text"
                              name="name"
                              className="w-100 mr-3 rounded border p-2"
                            />
                          </div>
                          <div className="rounded d-flex flex-column justify-content-between  border border-2 counter counterEight">
                            <h5
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
              <div className="w-100 boxBorder paddingZero rounded p-5">
                <div className="innerCont ">
                  <div className="row mb-5 d-flex flex-lg-nowrap justify-content-start">
                    <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                      <label htmlFor="" className="mb-1">
                        Base:
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="w-100 rounded border p-2"
                      />
                    </div>
                    <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                      <label htmlFor="" className="mb-1">
                        Nearest Town:
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="w-100 rounded border p-2"
                      />
                    </div>
                    <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                      <label htmlFor="" className="mb-1">
                        Trek Time:
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="w-100 rounded border p-2"
                      />
                    </div>
                  </div>
                  <div className="row d-flex flex-column flex-lg-nowrap align-items-start">
                    <h4 className="mb-3">How to reach base:</h4>
                    <div className="w-100 d-flex flex-lg-nowrap flex-wrap  justify-content-center">
                      <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                        <label htmlFor="" className="mb-1">
                          Self Drive:
                        </label>
                        <div className="d-flex w-100 mb-3 flex-lg-nowrap justify-content-start ">
                          <input
                            type="text"
                            name="name"
                            className="w-100 mr-3 rounded border p-2"
                            placeholder="Enter Route"
                          />
                          <div className="p-2 rounded border border-2 counter">
                            <FiPlus />
                          </div>
                        </div>
                        <div className="d-flex w-100 mb-3   flex-lg-nowrap justify-content-start ">
                          <input
                            type="text"
                            name="name"
                            className="w-100 mr-3 rounded border p-2"
                            placeholder="Recommendation"
                          />
                          <div className="p-2 rounded border border-2 counter">
                            <FiPlus />
                          </div>
                        </div>
                        <div className="d-flex w-100 mb-3 flex-lg-nowrap justify-content-start ">
                          <input
                            type="text"
                            name="name"
                            className="w-100 mr-3 rounded border p-2"
                            placeholder="Parking"
                          />
                          <div className="p-2 rounded border border-2 counter">
                            <FiPlus />
                          </div>
                        </div>
                        <div className="d-flex w-100  flex-lg-nowrap justify-content-start ">
                          <input
                            type="text"
                            name="name"
                            className="w-100 mr-3 rounded border p-2"
                            placeholder="Note"
                          />
                          <div className="p-2 rounded border border-2 counter">
                            <FiPlus />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                        <label htmlFor="" className="mb-1">
                          Public transport:
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="w-100 rounded border p-2"
                        />
                      </div>
                      <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                        <label htmlFor="" className="mb-1">
                          Rail:
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="w-100 rounded border p-2"
                        />
                      </div>
                      <div className="col-lg-3 form-group d-flex flex-column align-items-start">
                        <label htmlFor="" className="mb-1">
                          Air:
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="w-100 rounded border p-2"
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
                        <label htmlFor="" className="mb-1">
                          Petrol Pump:
                        </label>
                        <div className="d-flex w-100 flex-lg-nowrap justify-content-start ">
                          <div className="inputTextEight w-100 mr-3 d-flex flex-column">
                            <input
                              type="text"
                              name="name"
                              className="w-100 mr-3 rounded border p-2"
                              placeholder="Enter Detail"
                            />
                          </div>
                          <div className="rounded d-flex flex-column justify-content-between  border border-2 counter counterNine">
                            <h5
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
                        <label htmlFor="" className="mb-1">
                          Garage:
                        </label>
                        <div className="d-flex w-100 flex-lg-nowrap justify-content-start ">
                          <div className="inputTextNine w-100 mr-3 d-flex flex-column">
                            <input
                              type="text"
                              name="name"
                              className="w-100 mr-3 rounded border p-2"
                              placeholder="Enter Detail"
                            />
                          </div>
                          <div className="rounded d-flex flex-column justify-content-between  border border-2 counter counterTen">
                            <h5
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
                        <label htmlFor="" className="mb-1">
                          Hospitals:
                        </label>
                        <div className="d-flex w-100 flex-lg-nowrap justify-content-start ">
                          <div className="inputTextTen w-100 mr-3 d-flex flex-column">
                            <input
                              type="text"
                              name="name"
                              className="w-100 mr-3 rounded border p-2"
                              placeholder="Enter Detail"
                            />
                          </div>
                          <div className="rounded d-flex flex-column justify-content-between  border border-2 counter counterEleven">
                            <h5
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
                        <label htmlFor="" className="mb-1">
                          Police Station:
                        </label>
                        <div className="d-flex w-100 flex-lg-nowrap justify-content-start ">
                          <div className="inputTextEleven w-100 mr-3 d-flex flex-column">
                            <input
                              type="text"
                              name="name"
                              className="w-100 mr-3 rounded border p-2"
                              placeholder="Enter Detail"
                            />
                          </div>
                          <div className="rounded d-flex flex-column justify-content-between  border border-2 counter counterTwelve">
                            <h5
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
          </form>
        </div>
      </section>
    </React.Fragment>
  );
}

export default DatabaseForm;
