import React, {useState} from "react";
import "./MyDashBoard.scss";
// import { MyDashboardTab } from "../../summaryData";
import Donut from "./Donut";
import DataTable from "./DataTable";
import Areachart from "./Areachart";
import summaryIcon1 from "../../icons/summary1.svg";
import summaryIcon2 from "../../icons/summary2.svg";
import summaryIcon3 from "../../icons/summary3.svg";
import summaryIcon4 from "../../icons/summary4.svg";
import summaryIcon5 from "../../icons/summary5.svg";
import './MyDashBoard.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";
import {useTime, useTimer} from 'react-timer-hook';

const MyDashBoard = ({ expiryTimestamp }) => {
  const {days} = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') })
//   console.log(days)
  const {
    seconds,
    minutes,
    hours,
    ampm,
  } = useTime({format: '12-hour'});
  
  return (
      <React.Fragment>
          <div className="summaryItemWrapper">
              <div className="summary">
                  <div className="summaryItem d-flex align-items-center">
                      <div className="d-flex align-items-center gap-3">
                          <img src={summaryIcon1} className="img-fluid" alt="" />
                          <div>
                              <p className="mb-0 summaryPra">Next Weekly Buy</p>
                              <h2 className="summaryHeading mb-0 ">
                                  <div className={"d-flex"}>
                                      <div>
                                          <span>1 day </span>
                                          <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                                      </div>
                                      <div>
                                          <span className={"p-2"}>{ampm}</span>
                                      </div>
                                  </div>
                              </h2>
                          </div>
                      </div>
                  </div>

                  {/*<div className="summaryItem d-flex align-items-center">*/}
                  {/*    <div className="d-flex align-items-center flex-wrap gap-3">*/}
                  {/*        <img src={summaryIcon2} className="img-fluid" alt="" />*/}
                  {/*        <div>*/}
                  {/*            <p className="mb-0 summaryPra">Next Month Buy</p>*/}
                  {/*            <h2 className="summaryHeading mb-0 ">10:55:27</h2>*/}
                  {/*        </div>*/}
                  {/*    </div>*/}
                  {/*</div>*/}

                  <div className="summaryItem d-flex align-items-center">
                      <div className="d-flex align-items-center gap-3">
                          <img src={summaryIcon3} className="img-fluid" alt="" />
                          <div>
                              <p data-tip="React-tooltip" className="mb-0 summaryPra d-flex justify-content-center align-items-center">
                                  Current Equty Value
                                  <FontAwesomeIcon className={"mx-2"} icon={faCircleInfo} data-tip data-for="_info" />
                              </p>

                              <ReactTooltip className={"customTheme"} id="_info" type="dark">
                                  <span>
                                      This is an approximation of
                                      <br /> when the bot will buy, not an <br /> exact time.
                                  </span>
                              </ReactTooltip>

                              <h2 className="summaryHeading mb-0 " style={{ color: "#17BD8D" }}>
                                  1749 <span className="fs-6">USD</span>
                              </h2>
                          </div>
                      </div>
                  </div>

                  <div className="summaryItem d-flex align-items-center">
                      <div className="d-flex align-items-center gap-3">
                          <img src={summaryIcon4} className="img-fluid" alt="" />
                          <div>
                              <p className="mb-0 summaryPra">
                                  1938 <span>USD</span>
                              </p>
                              <h2 className="summaryHeading mb-0 " style={{ color: "#FFA114" }}>
                                  1938 <span className="fs-6">USD</span>
                              </h2>
                          </div>
                      </div>
                  </div>
                  <div className="summaryItem d-flex align-items-center">
                      <div className="d-flex align-items-center flex-wrap gap-3">
                          <img src={summaryIcon5} className="img-fluid" alt="" />
                          <div>
                              {/* <p className="mb-0 summaryPra"></p> */}
                              <p data-tip="React-tooltip" className="mb-0 summaryPra d-flex justify-content-center align-items-center">
                                  Profit Against USD
                                  <FontAwesomeIcon className={"mx-2"} icon={faCircleInfo} data-tip data-for="Index" />
                              </p>

                              <ReactTooltip className={"customThemes"} id="Index" type="dark">
                                  <span>
                                      Satoshis Index has historically underperformed in <br /> bear markets but substantially outperforms in <br /> bull markets, resulting in superior gains.
                                  </span>
                              </ReactTooltip>

                              <h2 className="summaryHeading mb-0 ">-9.7</h2>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div>
              <div className="row">
                  <div className="col-lg-6 mb-4">
                      <div className="DonutChart mb-4 ">
                          <h1 className="DonutChartHeading mb-4">Current Equity</h1>
                          <div className="DonutWrapper pb-4">
                              {/*<div className="d-flex justify-content-center d-md-block">*/}
                              {/*    <Donut />*/}
                              {/*</div>*/}
                          </div>
                      </div>
                      <div className="DonutChart">
                          <h1 className="DonutChartHeading performance mb-4">Bot Performance</h1>
                          <div className="botPerformanceChart">
                              <div>
                                  <Areachart />
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                      <DataTable />
                  </div>
              </div>
          </div>
      </React.Fragment>
  );
};

export default MyDashBoard;
