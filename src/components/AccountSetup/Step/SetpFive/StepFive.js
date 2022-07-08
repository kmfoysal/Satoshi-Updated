import React from "react";
import form_timeline_five from "../../../../assests/images/form_timeline_five.png";
import {Link} from "react-router-dom";
import "./StepFive.css"

const StepFive = () => {
  return (
    <React.Fragment>
      <div className="multi_step_form_head_content">
        <div className="form_timeline w-100 my-3">
          <img className={"img-fluid"} src={form_timeline_five} alt="form_timeline"/>
        </div>
        <Link className={"connect_api"} to={"/documentation"}>
          How to connect API key? How it Work?
        </Link>
        <hr style={{borderColor: "#848484", marginTop: "40px", marginBottom: "40px"}}/>
      </div>
      
      <div className="multi_step_form_form">
        
        <div className="row">
          <div className="col-lg-6">
            <div className="d-flex review_bottom">
              <div className="currentBotIcon mb-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  
                  <path
                    d="M9 2C7.89543 2 7 2.89543 7 4V12C7 13.1046 7.89543 14 9 14H15C16.1046 14 17 13.1046 17 12V6.41421C17 5.88378 16.7893 5.37507 16.4142 5L14 2.58579C13.6249 2.21071 13.1162 2 12.5858 2H9Z"
                    fill="#6B6E78"
                  />
                  
                  <path
                    d="M3 8C3 6.89543 3.89543 6 5 6V16H13C13 17.1046 12.1046 18 11 18H5C3.89543 18 3 17.1046 3 16V8Z"
                    fill="#6B6E78"/>
                </svg>
                
              </div>
              
              <div className="aboutBot">
                <h5 className="botHeading mb-1">Exchange</h5>
                <p className="botPra mb-0">Coinbase</p>
              </div>
            </div>
            
            
            <div className="d-flex review_bottom">
              <div className="currentBotIcon mb-1">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M2 7V5C2 2.23858 4.23858 0 7 0C9.76142 0 12 2.23858 12 5V7C13.1046 7 14 7.89543 14 9V14C14 15.1046 13.1046 16 12 16H2C0.89543 16 0 15.1046 0 14V9C0 7.89543 0.895431 7 2 7ZM10 5V7H4V5C4 3.34315 5.34315 2 7 2C8.65685 2 10 3.34315 10 5Z"
                        fill="#6B6E78"/>
                </svg>
              
              </div>
              <div className="aboutBot">
                <h5 className="botHeading mb-1">API Secret</h5>
                <p className="botPra mb-0">d3jNT12RKaTfKFJa</p>
              </div>
            </div>
            
            
            <div className="d-flex review_bottom">
              <div className="currentBotIcon mb-1">
                
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.43338 5.41784C6.58818 5.31464 6.77939 5.2224 7 5.15101L7.00001 6.84899C6.77939 6.7776 6.58818 6.68536 6.43338 6.58216C6.06927 6.33942 6 6.1139 6 6C6 5.8861 6.06927 5.66058 6.43338 5.41784Z"
                    fill="#6B6E78"/>
                  <path
                    d="M9.00002 10.849L9.00001 9.15101C9.22062 9.2224 9.41184 9.31464 9.56663 9.41784C9.93075 9.66058 10 9.8861 10 10C10 10.1139 9.93075 10.3394 9.56664 10.5822C9.41184 10.6854 9.22063 10.7776 9.00002 10.849Z"
                    fill="#6B6E78"/>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9 3C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3V3.09199C6.3784 3.20873 5.80348 3.43407 5.32398 3.75374C4.6023 4.23485 4 5.00933 4 6C4 6.99067 4.6023 7.76515 5.32398 8.24626C5.80348 8.56593 6.37841 8.79128 7.00001 8.90801L7.00002 10.8492C6.60902 10.7223 6.31917 10.5319 6.15667 10.3446C5.79471 9.92748 5.16313 9.88274 4.74599 10.2447C4.32885 10.6067 4.28411 11.2382 4.64607 11.6554C5.20855 12.3036 6.05956 12.7308 7 12.9076L7 13C6.99999 13.5523 7.44769 14 7.99998 14C8.55226 14 8.99999 13.5523 9 13L9 12.908C9.62161 12.7913 10.1965 12.5659 10.676 12.2463C11.3977 11.7651 12 10.9907 12 10C12 9.00933 11.3977 8.23485 10.676 7.75373C10.1965 7.43407 9.6216 7.20873 9.00001 7.09199L9 5.15075C9.391 5.27771 9.68085 5.4681 9.84335 5.65538C10.2053 6.07252 10.8369 6.11726 11.254 5.7553C11.6712 5.39335 11.7159 4.76176 11.354 4.34462C10.7915 3.69637 9.94046 3.26915 9 3.09236V3Z"
                        fill="#6B6E78"/>
                </svg>
              
              </div>
              <div className="aboutBot">
                <h5 className="botHeading mb-1">Bot Budget</h5>
                <p className="botPra mb-0">$48</p>
              </div>
            </div>
            
            
            <div className="d-flex review_bottom">
              <div className="currentBotIcon mb-1">
                
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M10 2C9.44771 2 9 1.55228 9 1C9 0.447715 9.44771 0 10 0H15C15.5523 0 16 0.447715 16 1V6C16 6.55228 15.5523 7 15 7C14.4477 7 14 6.55228 14 6V3.41421L9.70711 7.70711C9.31658 8.09763 8.68342 8.09763 8.29289 7.70711L6 5.41421L1.70711 9.70711C1.31658 10.0976 0.683417 10.0976 0.292893 9.70711C-0.0976311 9.31658 -0.0976311 8.68342 0.292893 8.29289L5.29289 3.29289C5.68342 2.90237 6.31658 2.90237 6.70711 3.29289L9 5.58579L12.5858 2H10Z"
                        fill="#6B6E78"/>
                </svg>
              
              
              </div>
              <div className="aboutBot">
                <h5 className="botHeading mb-1">Volume Weighted Buys</h5>
                <p className="botPra mb-0">No</p>
              </div>
            </div>
          </div>
          
          {/*LEFT SIDE*/}
          
          <div className="col-lg-6">
            <div className="d-flex review_bottom">
              <div className="currentBotIcon mb-1">
                
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M16 6C16 9.31371 13.3137 12 10 12C9.39383 12 8.80865 11.9101 8.25707 11.7429L6 14H4V16H0V12L4.25707 7.74293C4.08989 7.19135 4 6.60617 4 6C4 2.68629 6.68629 0 10 0C13.3137 0 16 2.68629 16 6ZM10 2C9.44771 2 9 2.44772 9 3C9 3.55228 9.44771 4 10 4C11.1046 4 12 4.89543 12 6C12 6.55228 12.4477 7 13 7C13.5523 7 14 6.55228 14 6C14 3.79086 12.2091 2 10 2Z"
                        fill="#6B6E78"/>
                </svg>
              
              </div>
              <div className="aboutBot">
                <h5 className="botHeading mb-1">API Key</h5>
                <p className="botPra mb-0">d3jNT12RKaTfKFJa</p>
              </div>
            </div>
            
            <div className="d-flex review_bottom">
              <div className="currentBotIcon mb-1">
                
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M2.08296 7H4.02863C4.11783 5.45361 4.41228 4.02907 4.86644 2.88228C3.41752 3.77135 2.37513 5.25848 2.08296 7ZM8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM8 2C7.92395 2 7.76787 2.03173 7.5347 2.26184C7.29723 2.4962 7.03751 2.8849 6.79782 3.44417C6.40914 4.3511 6.12491 5.58559 6.03237 7H9.96763C9.87509 5.58559 9.59086 4.3511 9.20218 3.44417C8.96249 2.8849 8.70277 2.4962 8.4653 2.26184C8.23213 2.03173 8.07605 2 8 2ZM11.9714 7C11.8822 5.45361 11.5877 4.02907 11.1336 2.88228C12.5825 3.77135 13.6249 5.25848 13.917 7H11.9714ZM9.96763 9H6.03237C6.12491 10.4144 6.40914 11.6489 6.79782 12.5558C7.03751 13.1151 7.29723 13.5038 7.5347 13.7382C7.76787 13.9683 7.92395 14 8 14C8.07605 14 8.23213 13.9683 8.4653 13.7382C8.70277 13.5038 8.96249 13.1151 9.20218 12.5558C9.59086 11.6489 9.87509 10.4144 9.96763 9ZM11.1336 13.1177C11.5877 11.9709 11.8822 10.5464 11.9714 9H13.917C13.6249 10.7415 12.5825 12.2287 11.1336 13.1177ZM4.86644 13.1177C4.41228 11.9709 4.11783 10.5464 4.02863 9H2.08296C2.37513 10.7415 3.41752 12.2287 4.86644 13.1177Z"
                        fill="#6B6E78"/>
                </svg>
              
              </div>
              <div className="aboutBot">
                <h5 className="botHeading mb-1">API Passphrase</h5>
                <p className="botPra mb-0">d3jNT12RKaTfKFJa</p>
              </div>
            </div>
            
            
            <div className="d-flex review_bottom">
              <div className="currentBotIcon mb-1">
                
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 8C0 7.44772 0.447715 7 1 7H3C3.55228 7 4 7.44772 4 8V13C4 13.5523 3.55228 14 3 14H1C0.447715 14 0 13.5523 0 13V8Z"
                    fill="#6B6E78"/>
                  <path
                    d="M6 4C6 3.44772 6.44772 3 7 3H9C9.55228 3 10 3.44772 10 4V13C10 13.5523 9.55228 14 9 14H7C6.44772 14 6 13.5523 6 13V4Z"
                    fill="#6B6E78"/>
                  <path
                    d="M12 1C12 0.447716 12.4477 0 13 0H15C15.5523 0 16 0.447715 16 1V13C16 13.5523 15.5523 14 15 14H13C12.4477 14 12 13.5523 12 13V1Z"
                    fill="#6B6E78"/>
                </svg>
              
              </div>
              <div className="aboutBot">
                <h5 className="botHeading mb-1">Trading Frequency</h5>
                <p className="botPra mb-0">Weekly</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="projectBorder py-4">
          <h4 className="selectTitle">Bot Status</h4>
          
          <div>
            <label className="switchWrapper">
              <input type="checkbox"/>
              <span className="sliderWrapper round"></span>
            </label>
          </div>
        </div>
        
        <hr style={{borderColor: "#848484", marginTop: "40px", marginBottom: "40px"}}/>
      </div>
    </React.Fragment>
  );
};

export default StepFive;