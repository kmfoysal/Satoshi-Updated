import React from 'react';
import './AdminControl.css'
import {Table} from "react-bootstrap";
import coinImg1 from "../../icons/coinImg1.svg";
import coinImg2 from "../../icons/coinImg2.svg";
import coinImg3 from "../../icons/coinImg3.svg";
import coinImg4 from "../../icons/coinImg4.svg";
import coinImg5 from "../../icons/coinImg5.svg";
import coinImg6 from "../../icons/coinImg6.svg";
import coinImg7 from "../../icons/coinImg7.svg";
import coinImg8 from "../../icons/coinImg8.svg";
import coinImg9 from "../../icons/coinImg9.svg";
import coinImg10 from "../../icons/coinImg10.svg";
import coinImg11 from "../../icons/coinImg11.svg";
import coinImg12 from "../../icons/coinImg12.svg";
import coinImg13 from "../../icons/coinImg13.svg";

const AdminControlConfig = () => {
  return (
      <React.Fragment>
          <div className={"row pb-4 inputBottom"}>
              <div className="col-xxl-6 pe-2 pe-xxl-3 mb-3">
                  <div className="coinInput">
                      <h3 className="coinHeading">Top Coins</h3>
                      <input type="text" className="form-control" placeholder={"16"} />
                      <button type="button" className="buttonControl">
                          Send
                      </button>
                  </div>
              </div>
              <div className="col-xxl-6 ps-2 ps-xxl-3 mb-3">
                  <div className="coinInput">
                      <h3 className="coinHeading">Top n Coin List</h3>
                      <input type="text" className="form-control" placeholder={"16"} />
                      <button type="button" className="buttonControl">
                          Send
                      </button>
                  </div>
              </div>
          </div>
          <div className="adminConfigControl">
              <h1 className="tableHeading">Admin Control Configuration</h1>
              <div className="data">
                  {/*<table className="table ">*/}
                  {/*  <th>Top Coin</th>*/}
                  {/*  <th>Top n Coin List</th>*/}
                  {/*  <th>Bot Activated</th>*/}
                  {/*  <tr>*/}
                  {/*    <td>29</td>*/}
                  {/*    <td>14</td>*/}
                  {/*    <td>false</td>*/}
                  {/*  </tr>*/}
                  {/*</table>*/}

                  <div className="tableWrapperAdmin">
                      <div className="">
                          <div className=" table-responsive">
                              <Table striped hover>
                                  <thead>
                                      <tr>
                                          <th className=" text-nowrap">
                                              Top Coins{" "}
                                              <svg className="ms-2 mb-1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M1.5 3.5L10.5 3.5L1.5 3.5Z" fill="#219FFF" />
                                                  <path d="M1.5 3.5L10.5 3.5" stroke="#0D99FF" strokeWidth="1.2" strokeLinecap="round" />
                                                  <path d="M3 6L9 6L3 6Z" fill="#219FFF" />
                                                  <path d="M3 6L9 6" stroke="#0D99FF" strokeWidth="1.2" strokeLinecap="round" />
                                                  <path d="M5 8.5H7" stroke="#0D99FF" strokeWidth="1.2" strokeLinecap="round" />
                                              </svg>
                                          </th>{" "}
                                          <th className=" text-nowrap">
                                              Top n Coin List{" "}
                                              <svg className="ms-2 mb-1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M1.5 3.5L10.5 3.5L1.5 3.5Z" fill="#219FFF" />
                                                  <path d="M1.5 3.5L10.5 3.5" stroke="#0D99FF" strokeWidth="1.2" strokeLinecap="round" />
                                                  <path d="M3 6L9 6L3 6Z" fill="#219FFF" />
                                                  <path d="M3 6L9 6" stroke="#0D99FF" strokeWidth="1.2" strokeLinecap="round" />
                                                  <path d="M5 8.5H7" stroke="#0D99FF" strokeWidth="1.2" strokeLinecap="round" />
                                              </svg>
                                          </th>
                                          <th className=" text-nowrap">
                                              Bot Activated{" "}
                                              <svg className="ms-2 mb-1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M1.5 3.5L10.5 3.5L1.5 3.5Z" fill="#219FFF" />
                                                  <path d="M1.5 3.5L10.5 3.5" stroke="#0D99FF" strokeWidth="1.2" strokeLinecap="round" />
                                                  <path d="M3 6L9 6L3 6Z" fill="#219FFF" />
                                                  <path d="M3 6L9 6" stroke="#0D99FF" strokeWidth="1.2" strokeLinecap="round" />
                                                  <path d="M5 8.5H7" stroke="#0D99FF" strokeWidth="1.2" strokeLinecap="round" />
                                              </svg>
                                          </th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td className="fs-14 text-nowrap">29</td>
                                          <td className="fs-14 text-nowrap">144</td>
                                          <td className="d-flex text-nowrap align-items-center gap-2 text-danger fs-14">
                                              <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <circle cx="2.5" cy="3" r="2.5" fill="#FF4E3E" />
                                              </svg>
                                              False
                                          </td>
                                      </tr>
                                  </tbody>
                              </Table>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </React.Fragment>
  );
};

export default AdminControlConfig;