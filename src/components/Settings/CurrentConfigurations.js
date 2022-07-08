import React from 'react'
import { Link } from 'react-router-dom';

const CurrentConfigurations = () => {
  return (
      <div>
          <h4 className="configurationTitle">Edit Configurations</h4>
          <div className="projectBorder pb-4 ">
              <span className="subConfiguration">Current 1 Bot Configurations</span>
          </div>
          <div className="currentBot pt-4">
              <div className="row">
                  <div className="col-lg-4">
                      <div className="currentBotItem d-flex align-items-center gap-3 mb-4">
                          <div className="currentBotIcon mb-1">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10 9C11.6569 9 13 7.65685 13 6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6C7 7.65685 8.34315 9 10 9Z" fill="#6B6E78" />
                                  <path d="M3 18C3 14.134 6.13401 11 10 11C13.866 11 17 14.134 17 18H3Z" fill="#6B6E78" />
                              </svg>
                          </div>
                          <div className="aboutBot">
                              <h5 className="botHeading mb-1">User</h5>
                              <p className="botPra mb-0">Lennox Matsinde</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="currentBotItem d-flex align-items-center gap-3 mb-4">
                          <div className="currentBotIcon mb-1">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M18 13V5C18 3.89543 17.1046 3 16 3H4C2.89543 3 2 3.89543 2 5V13C2 14.1046 2.89543 15 4 15H7L10 18L13 15H16C17.1046 15 18 14.1046 18 13ZM5 7C5 6.44772 5.44772 6 6 6H14C14.5523 6 15 6.44772 15 7C15 7.55228 14.5523 8 14 8H6C5.44772 8 5 7.55228 5 7ZM6 10C5.44772 10 5 10.4477 5 11C5 11.5523 5.44772 12 6 12H9C9.55229 12 10 11.5523 10 11C10 10.4477 9.55229 10 9 10H6Z"
                                      fill="#6B6E78"
                                  />
                              </svg>
                          </div>
                          <div className="aboutBot">
                              <h5 className="botHeading mb-1">Bot Status</h5>
                              <p className="botPra mb-0">No</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="currentBotItem d-flex align-items-center gap-3 mb-4">
                          <div className="currentBotIcon mb-1">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z"
                                      fill="#6B6E78"
                                  />
                                  <path
                                      d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z"
                                      fill="#6B6E78"
                                  />
                                  <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z"
                                      fill="#6B6E78"
                                  />
                              </svg>
                          </div>
                          <div className="aboutBot">
                              <h5 className="botHeading mb-1">Bot Budget</h5>
                              <p className="botPra mb-0">$48</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="currentBotItem d-flex align-items-center gap-3">
                          <div className="currentBotIcon mb-1">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M2 11C2 10.4477 2.44772 10 3 10H5C5.55228 10 6 10.4477 6 11V16C6 16.5523 5.55228 17 5 17H3C2.44772 17 2 16.5523 2 16V11Z" fill="#6B6E78" />
                                  <path d="M8 7C8 6.44772 8.44772 6 9 6H11C11.5523 6 12 6.44772 12 7V16C12 16.5523 11.5523 17 11 17H9C8.44772 17 8 16.5523 8 16V7Z" fill="#6B6E78" />
                                  <path d="M14 4C14 3.44772 14.4477 3 15 3H17C17.5523 3 18 3.44772 18 4V16C18 16.5523 17.5523 17 17 17H15C14.4477 17 14 16.5523 14 16V4Z" fill="#6B6E78" />
                              </svg>
                          </div>
                          <div className="aboutBot">
                              <h5 className="botHeading mb-1">Trading Frequency</h5>
                              <p className="botPra mb-0">Weekly</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="currentBotItem d-flex align-items-center gap-3">
                          <div className="currentBotIcon mb-1">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5H17C17.5523 5 18 5.44772 18 6V11C18 11.5523 17.5523 12 17 12C16.4477 12 16 11.5523 16 11V8.41421L11.7071 12.7071C11.3166 13.0976 10.6834 13.0976 10.2929 12.7071L8 10.4142L3.70711 14.7071C3.31658 15.0976 2.68342 15.0976 2.29289 14.7071C1.90237 14.3166 1.90237 13.6834 2.29289 13.2929L7.29289 8.29289C7.68342 7.90237 8.31658 7.90237 8.70711 8.29289L11 10.5858L14.5858 7H12Z"
                                      fill="#6B6E78"
                                  />
                              </svg>
                          </div>
                          <div className="aboutBot">
                              <h5 className="botHeading mb-1">Volume Weighted Buys</h5>
                              <p className="botPra mb-0">No</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="currentBotItem d-flex align-items-center gap-3">
                          <div className="currentBotIcon mb-1">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M9 2C7.89543 2 7 2.89543 7 4V12C7 13.1046 7.89543 14 9 14H15C16.1046 14 17 13.1046 17 12V6.41421C17 5.88378 16.7893 5.37507 16.4142 5L14 2.58579C13.6249 2.21071 13.1162 2 12.5858 2H9Z"
                                      fill="#6B6E78"
                                  />
                                  <path d="M3 8C3 6.89543 3.89543 6 5 6V16H13C13 17.1046 12.1046 18 11 18H5C3.89543 18 3 17.1046 3 16V8Z" fill="#6B6E78" />
                              </svg>
                          </div>
                          <div className="aboutBot">
                              <h5 className="botHeading mb-1">Exchange</h5>
                              <p className="botPra mb-0">CoinBase</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default CurrentConfigurations