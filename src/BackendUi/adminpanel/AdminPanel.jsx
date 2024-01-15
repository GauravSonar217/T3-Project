import React from "react";
import bell from "../../assets/png/bell.png";
import menulogo from "../../assets/png/menulogo.png";
import morelink from "../../assets/svg/morelink.svg";
import search from "../../assets/svg/search2.svg";
import message from "../../assets/svg/message.svg";
import user from "../../assets/svg/user.svg";
import poll from "../../assets/svg/poll.svg";
import home from "../../assets/svg/home.svg";
import chat from "../../assets/svg/chat.svg";
import task from "../../assets/svg/task.svg";
import calender from "../../assets/svg/calender.svg";
import messaging from "../../assets/svg/messaging.svg";
import statistic from "../../assets/svg/statistic.svg";
import arrow from "../../assets/svg/orangeArrow.svg";
import plus from "../../assets/svg/plus.svg";
import taskgrey from "../../assets/svg/taskgrey.svg";
import stagesgrey from "../../assets/svg/stagesgrey.svg";
import timer from "../../assets/svg/timergrey.svg";
import usergrey from "../../assets/svg/usergrey.svg";
import messagegrey from "../../assets/svg/messagegrey.svg";
import file from "../../assets/svg/filegrey.svg";
import greentimer from "../../assets/svg/timergreen.svg";
import userblue from "../../assets/svg/userblue.svg";
import stageorange from "../../assets/svg/stagesorange.svg";
import fileblue from "../../assets/svg/fileblue.svg";
import blog from "../../assets/svg/blog.svg";
import financialChart from "../../assets/png/financialChart.png";
import highStock from "../../assets/svg/highStock.svg";
import lowStock from "../../assets/svg/lowStock.svg";
import { HashLink } from "react-router-hash-link";

function AdminPanel() {
  return (
    <React.Fragment>
      <section className="adminSec border border-warning w-100">
        <nav className="d-flex align-items-center justify-content-between">
          <div className="logoBox d-flex align-items-center ">
            <img src={menulogo} alt="menu icon" />
            <h3 className=" text-decoration-none ">T3</h3>
          </div>
          <ul className="d-flex align-items-center admiNavLinkCont ">
            <li>
              <HashLink className="p-4 active">Dashboard</HashLink>
            </li>
            <li>
              <HashLink className="p-4">Pages</HashLink>
            </li>
            <li>
              <HashLink className="p-4">Posts</HashLink>
            </li>
            <li>
              <HashLink className="p-4">Files</HashLink>
            </li>
            <li>
              <HashLink className="p-4">Users</HashLink>
            </li>
            <li>
              <HashLink className="p-4">
                <img src={morelink} />
              </HashLink>
            </li>
          </ul>
          <div className="adminSearchBox d-flex justify-content-between align-items-center">
            <input
              type="text"
              name="search"
              placeholder="Try searching"
              className="p-3 border-0"
            />
            <img src={search} alt="search icon" className="" />
          </div>
          <div className="iconsCont">
            <HashLink>
              <img src={bell} alt="" className="" />
            </HashLink>
            <HashLink className="">
              <img src={message} alt="" className="" />
            </HashLink>
            <HashLink>
              <img src={user} alt="" className="" />
            </HashLink>
            <HashLink>
              <img src={poll} alt="" className="" />
            </HashLink>
          </div>
        </nav>
        <div className="adminPanelWrapper w-100 d-flex ">
          <aside className=" p-0">
            <div className="dropDownCont d-flex flex-column p-4 border mb-5 border-2">
              <div className="dropDownBox d-flex align-items-center p-4 mb-3">
                <img src={home} alt="" />
                <select name="project" id="project" className="ml-3">
                  <option value="">My projects</option>
                  <option value="">Lorem, ipsum.</option>
                  <option value="">Lorem, ipsum.</option>
                  <option value="">Lorem, ipsum.</option>
                </select>
              </div>
              <div className="dropDownBox d-flex align-items-center p-4 mb-3">
                <img src={chat} alt="" />
                <select name="project" id="project" className="ml-3">
                  <option value="">Chats</option>
                  <option value="">Lorem, ipsum.</option>
                  <option value="">Lorem, ipsum.</option>
                  <option value="">Lorem, ipsum.</option>
                </select>
              </div>
              <div className="dropDownBox d-flex align-items-center p-4 mb-3">
                <img src={task} alt="" />
                <select name="project" id="project" className="ml-3">
                  <option value="">Tasks</option>
                  <option value="">Lorem, ipsum.</option>
                  <option value="">Lorem, ipsum.</option>
                  <option value="">Lorem, ipsum.</option>
                </select>
              </div>
              <div className="dropDownBox d-flex align-items-center p-4 mb-3">
                <img src={calender} alt="" />
                <select name="project" id="project" className="ml-3">
                  <option value="">Calendars</option>
                  <option value="">Lorem, ipsum.</option>
                  <option value="">Lorem, ipsum.</option>
                  <option value="">Lorem, ipsum.</option>
                </select>
              </div>
              <div className="dropDownBox d-flex align-items-center p-4 mb-3">
                <img src={messaging} alt="" />
                <select name="project" id="project" className="ml-3">
                  <option value="">Messages</option>
                  <option value="">Lorem, ipsum.</option>
                  <option value="">Lorem, ipsum.</option>
                  <option value="">Lorem, ipsum.</option>
                </select>
              </div>
              <div className="dropDownBox d-flex align-items-center p-4">
                <img src={statistic} alt="" />
                <select name="project" id="project" className="ml-3">
                  <option value="">Statistics</option>
                  <option value="">Lorem, ipsum.</option>
                  <option value="">Lorem, ipsum.</option>
                  <option value="">Lorem, ipsum.</option>
                </select>
              </div>
            </div>
            <div className="projectCont d-flex flex-column p-4 border  border-2 ">
              <div className="deadlineCont mb-5 w-100 ">
                <div className="w-100 mb-5 d-flex justify-content-between align-items-center">
                  <h6 className="m-0 ml-2">Projects on Deadlines</h6>{" "}
                  <img src={morelink} alt="" />
                </div>
                <div className="projectBar d-flex justify-content-between align-items-center p-4">
                  <h6 className="m-0">Update Hampi details</h6>
                  <img src={arrow} />
                </div>
              </div>
              <div className="menuBoxCont w-100 mb-5">
                <div className="menuBox d-flex flex-column justify-content-center align-items-center ">
                  <div className="numBox d-flex justify-content-center align-items-center">
                    3
                  </div>
                  <h6 className="m-0 mt-4">Projects</h6>
                </div>
                <div className="menuBox d-flex flex-column justify-content-center align-items-center ">
                  <div className="numBox d-flex justify-content-center align-items-center ">
                    3
                  </div>
                  <h6 className="m-0 mt-4">Tasks</h6>
                </div>
                <div className="menuBox d-flex flex-column justify-content-center align-items-center ">
                  <div className="numBox d-flex justify-content-center align-items-center ">
                    3
                  </div>
                  <h6 className="m-0 mt-4">Messages</h6>
                </div>
                <div className="menuBox d-flex flex-column justify-content-center align-items-center ">
                  <div className="numBox d-flex justify-content-center align-items-center ">
                    3
                  </div>
                  <h6 className="m-0 mt-4">Chats</h6>
                </div>
              </div>
              <div className="updateBoxCont w-100">
                <div className="updateHeader d-flex justify-content-between align-items-center mb-4">
                  <h6 className="m-0 ml-2">Recent Updates</h6>
                  <img src={morelink} alt="" />
                </div>
                <div className="updateBox mb-3 d-flex justify-content-between align-items-center">
                  <h6 className="m-0">Lorem ipsum is dummy</h6>
                  <h6 className="m-0">&gt;</h6>
                </div>
                <div className="updateBox mb-3 d-flex justify-content-between align-items-center">
                  <h6 className="m-0">Lorem ipsum is dummy</h6>
                  <h6 className="m-0">&gt;</h6>
                </div>
                <div className="updateBox mb-3 d-flex justify-content-between align-items-center">
                  <h6 className="m-0">Lorem ipsum is dummy</h6>
                  <h6 className="m-0">&gt;</h6>
                </div>
                <div className="updateBox d-flex justify-content-between align-items-center">
                  <h6 className="m-0">Lorem ipsum is dummy</h6>
                  <h6 className="m-0">&gt;</h6>
                </div>
              </div>
            </div>
          </aside>
          <main className="adminDashboardWrapper w-100 p-0">
            <header className="dashboardHeader w-100 d-flex align-items-center justify-content-between ">
              <h4>Dashboard Projects</h4>
              <ul className="d-flex align-items-center p-4">
                <li>
                  <HashLink className="p-4 active">Dashboard</HashLink>
                </li>
                <li>
                  <HashLink className="p-4">Upcoming Events</HashLink>
                </li>
                <li>
                  <HashLink className="p-4">Trek</HashLink>
                </li>
                <li>
                  <HashLink className="p-4">Tour</HashLink>
                </li>
                <li>
                  <HashLink className="p-4">Travel</HashLink>
                </li>
                <li>
                  <HashLink className="p-4">Index</HashLink>
                </li>
              </ul>
              <div className="d-flex justify-content-between align-items-center  ">
                <img src={plus} />
                <p className="m-0 ml-4">Add new to dashboard</p>
              </div>
            </header>
            <div className="dashboardCont w-100 d-flex justify-content-between ">
              <div className="dataCont">
                <div className="dashboardMenu ">
                  <ul className="d-flex align-items-center mb-5 ">
                    <li className="d-flex flex-column  align-items-center ">
                      <img src={taskgrey} />
                      <h6 className="m-0 mt-5">Tre</h6>
                    </li>
                    <li className="d-flex flex-column  align-items-center ">
                      <img src={stagesgrey} />
                      <h6 className="m-0 mt-5">Stages</h6>
                    </li>
                    <li className="d-flex flex-column  align-items-center ">
                      <img src={timer} />
                      <h6 className="m-0 mt-5">Task</h6>
                    </li>
                    <li className="d-flex flex-column  align-items-center ">
                      <img src={usergrey} />
                      <h6 className="m-0 mt-5">Member</h6>
                    </li>
                    <li className="d-flex flex-column  align-items-center ">
                      <img src={messagegrey} />
                      <h6 className="m-0 mt-5">Message</h6>
                    </li>
                    <li className="d-flex flex-column  align-items-center ">
                      <img src={file} />
                      <h6 className="m-0 mt-5">File</h6>
                    </li>
                  </ul>
                  <div className="dashboardDataCont d-flex justify-content-between">
                    <div className="projectCountCont d-flex flex-column">
                      <div className="projectCountBox d-flex flex-column align-items-center justify-content-center mb-5">
                        <h2 className="mb-5">2100</h2>
                        <h6>Trekking Location</h6>
                      </div>
                      <div className="projectCountBox d-flex flex-column align-items-center justify-content-center mb-5 ">
                        <h2 className="mb-5">1450</h2>
                        <h6>Tour Locations </h6>
                      </div>
                      <div className="projectCountBox d-flex flex-column align-items-center justify-content-center mb-5 ">
                        <h2 className="mb-5">120</h2>
                        <h6>Travel Packages</h6>
                      </div>
                      <div className="projectCountBox d-flex flex-column align-items-center justify-content-center ">
                        <h2 className="mb-5">18</h2>
                        <h6>Drafts</h6>
                      </div>
                    </div>
                    <div className="dashboardFeatureCont d-flex flex-column align-items-center ">
                      <div className="featureHeader border-bottom border-2 w-100 ">
                        <h6 className="m-0 py-5 px-5">Database Forms</h6>
                      </div>
                      <div className="featureBoxCont w-100 py-4 d-flex flex-column align-items-center justify-content-start ">
                        <div className="featureBox px-5 w-100 py-4 d-flex justify-content-between  align-items-center">
                          <div className="featureTextCont d-flex align-items-start">
                            <div className="featureIconCont">
                              <img src={greentimer} />
                            </div>
                            <div className="ml-5 d-flex align-items-start flex-column justify-content-center  ">
                              <h6 className="m-0">
                                Add new Content to Database
                              </h6>
                              <h6 className="m-0">Trek</h6>
                            </div>
                          </div>
                          <button className="updateBtn">Update</button>
                        </div>
                        <div className="featureBox px-5 w-100 py-4 d-flex justify-content-between  align-items-center">
                          <div className="featureTextCont d-flex align-items-start">
                            <div className="featureIconCont">
                              <img src={userblue} />
                            </div>
                            <div className="ml-5 d-flex align-items-start flex-column justify-content-center  ">
                              <h6 className="m-0">
                                Add new Content to Database
                              </h6>
                              <h6 className="m-0">Tour</h6>
                            </div>
                          </div>
                          <button className="updateBtn">Update</button>
                        </div>
                        <div className="featureBox px-5 w-100  py-4 d-flex justify-content-between  align-items-center">
                          <div className="featureTextCont d-flex align-items-start">
                            <div className="featureIconCont">
                              <img src={stageorange} />
                            </div>
                            <div className="ml-5 d-flex align-items-start flex-column justify-content-center  ">
                              <h6 className="m-0">
                                Add new Content to Database
                              </h6>
                              <h6 className="m-0">Travel</h6>
                            </div>
                          </div>
                          <button className="updateBtn">Update</button>
                        </div>
                        <div className="featureBox px-5 w-100 py-5 d-flex justify-content-between  align-items-center">
                          <div className="featureTextCont d-flex align-items-start">
                            <div className="featureIconCont">
                              <img src={messaging} />
                            </div>
                            <div className="ml-5 d-flex align-items-start flex-column justify-content-center  ">
                              <h6 className="m-0">
                                Add new Content to Database
                              </h6>
                              <h6 className="m-0">Trekking Camps</h6>
                            </div>
                          </div>
                          <button className="updateBtn">Update</button>
                        </div>
                        <div className="featureBox px-5 w-100 py-4 d-flex justify-content-between  align-items-center">
                          <div className="featureTextCont d-flex align-items-start">
                            <div className="featureIconCont">
                              <img src={fileblue} />
                            </div>
                            <div className="ml-5 d-flex align-items-start flex-column justify-content-center  ">
                              <h6 className="m-0">
                                Add new Content to Database
                              </h6>
                              <h6 className="m-0">Tour Packages</h6>
                            </div>
                          </div>
                          <button className="updateBtn">Update</button>
                        </div>
                        <div className="featureBox px-5 w-100  py-4 d-flex justify-content-between  align-items-center">
                          <div className="featureTextCont d-flex align-items-start">
                            <div className="featureIconCont">
                              <img src={blog} />
                            </div>
                            <div className="ml-5 d-flex align-items-start flex-column justify-content-center  ">
                              <h6 className="m-0">
                                Add new Content to Database
                              </h6>
                              <h6 className="m-0">Add Blog</h6>
                            </div>
                          </div>
                          <button className="updateBtn">Update</button>
                        </div>
                        <div className="featureBox px-5 w-100 py-4 d-flex justify-content-between  align-items-center">
                          <div className="featureTextCont d-flex align-items-start">
                            <div className="featureIconCont">
                              <img src={userblue} />
                            </div>
                            <div className="ml-5 d-flex align-items-start flex-column justify-content-center  ">
                              <h6 className="m-0">
                                Add new Content to Database
                              </h6>
                              <h6 className="m-0">Add New Testimonials</h6>
                            </div>
                          </div>
                          <button className="updateBtn">Update</button>
                        </div>
                        <button className="showmoreBtn border-0 mx-5 my-4 ">
                          Show More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="financialsCont my-5 w-100 d-flex justify-content-between">
                    <div className="financialChartCont py-5 col-6 d-flex flex-column justify-content-center  align-items-center ">
                      <div className="financialHeader w-100  px-4 d-flex align-items-center justify-content-between ">
                        <h6 className="m-0">Financial Statistics</h6>
                        <img src={morelink} alt="" />
                      </div>
                      <img
                        src={financialChart}
                        alt="financial graphical representation"
                        className="my-3"
                      />
                    </div>
                    <div className="financialDetailCont col-5 p-0">
                      <div className="financialBox mb-5">
                        <div className="financialBoxHeader w-100 pt-5 pb-4 px-5 d-flex align-items-center justify-content-between ">
                          <h6 className="m-0">Incoming income</h6>
                          <img src={morelink} alt="" />
                        </div>
                        <div className="d-flex justify-content-between px-5 pt-4 pb-5  align-items-center ">
                          <h1 className="m-0">₹ 10,00,000</h1>
                          <div className="returnCont d-flex flex-column align-items-center">
                            <img src={highStock} alt="" />
                            <h6>+23%</h6>
                          </div>
                        </div>
                      </div>
                      <div className="financialBox">
                        <div className="financialBoxHeader w-100 pt-5 pb-4 px-5 d-flex align-items-center justify-content-between ">
                          <h6 className="m-0">Profit from income</h6>
                          <img src={morelink} alt="" />
                        </div>
                        <div className="d-flex justify-content-between px-5 pt-4 pb-5  align-items-center ">
                          <h1 className="m-0">₹ 4,00,000</h1>
                          <div className="returnCont d-flex flex-column align-items-center">
                            <img src={lowStock} alt="" />
                            <h6>-11%</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboardFeedbackCont ">
                <div className="feedbackHeader d-flex justify-content-between px-4 border-bottom border-2 align-items-center">
                  <h6 className="m-0 py-5 px-5 active">Users Control</h6>
                  <h6 className="m-0 py-5 px-5">Custom treks requests</h6>
                  <h6 className="m-0 py-5 px-5">Group Controls</h6>
                </div>
                <div className="w-100  mb-5 reviewBox"></div>
                <div className="w-100  mb-5 reviewBox"></div>
                <div className="w-100  mb-5 reviewBox"></div>
                <div className="w-100  mb-5 reviewBox"></div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </React.Fragment>
  );
}

export default AdminPanel;
