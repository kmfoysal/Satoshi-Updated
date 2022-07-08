import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Admin1 from '../../assests/images/Admin1.png';
import Admin2 from '../../assests/images/Admin2.png';
import Admin3 from '../../assests/images/Admin3.png';
import Admin4 from '../../assests/images/Admin4.png';
import Admin5 from '../../assests/images/Admin5.png';
import useSatoshi from "../../hooks/useSatoshi";
import "../../pages/Dashboard/dashboard.scss";
import DataTable from "../MyDashBoard/DataTable";
import AdminControlConfig from "./AdminControlConfig";
import SystemLog from "./SystemLog";

const AdminControl = () => {

  const {email} = useSatoshi();

    const [isLoading, setIsLoading] = useState(false);

    const [currentEquity, setCurrentEquity] = useState([]);
    
     const [investment, setInvesment] = useState([]);



      useEffect(()=>{

        setIsLoading(true);

        fetch('https://tranquil-beyond-13898.herokuapp.com/equityvalue')
        .then(res=>res.json())
        .then(data => {
            setCurrentEquity(data)

            });
            setIsLoading(false);
      },[])

    //   console.log(currentEquity);



      useEffect(()=>{

        setIsLoading(true);

        fetch('https://tranquil-beyond-13898.herokuapp.com/table2')
        .then(res=>res.json())
        .then(data => {
            setInvesment(data)
            });
            setIsLoading(false);
      },[])


      let currentEquityValue = currentEquity.reverse().map(item => (
                                        (item?.currentvalue).toFixed(0)
                                    )).slice(0,1);

        let totalInvestment = investment.filter( em => em?.clientname === email && em?.estequity !== null && em?.coins.length !== 0).map(item => (
                                    Math.ceil(item?.estequity * 0.95)
                                ))

                                
        let profitAgainstUsd = currentEquityValue.map(function (num, idx) {
            // return ((num - totalInvestment[idx])/totalInvestment[idx]).toFixed(2);
            if(totalInvestment[idx] !== 0){
                return ((num - totalInvestment[idx])/totalInvestment[idx]).toFixed(2);
            }else{
                return 0
            }
        });


        const getTotalInvestment = (arr) =>{
            let total = 0;

            for(var i in arr) { 
                total += arr[i];
            }

            return total;
        }

        let totalInvestmentValue = getTotalInvestment(totalInvestment)

  
  return (
    <React.Fragment>
      <div className="sectionPadding dashboardWrapper">
        <div className="d-flex align-items-center justify-content-between  gap-3 dashboardItem">
          <div className="d-flex align-items-center gap-3  mb-md-4 mb-0">
            <NavLink to="/" className="d-flex align-items-center gap-2 text-decoration-none ">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.76578 13.3657C7.45336 13.6781 6.94683 13.6781 6.63441 13.3657L1.83441 8.56571C1.52199 8.25329 1.52199 7.74676 1.83441 7.43434L6.63441 2.63434C6.94683 2.32192 7.45336 2.32192 7.76578 2.63434C8.0782 2.94676 8.0782 3.45329 7.76578 3.76571L4.33147 7.20002H13.6001C14.0419 7.20002 14.4001 7.5582 14.4001 8.00002C14.4001 8.44185 14.0419 8.80002 13.6001 8.80002L4.33147 8.80002L7.76578 12.2343C8.0782 12.5468 8.0782 13.0533 7.76578 13.3657Z"
                  fill="#6B6E78"
                />
              </svg>
              <p className="mb-0 commonPra fs-13 fw-bold">back</p>
            </NavLink>
            <div>
              <h1 className="text-white fs-36">Admin Control</h1>
            </div>
            <div className="mb-2">
              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.04917 0.927067C7.34852 0.00575608 8.65193 0.00575656 8.95129 0.927067L10.0209 4.21886C10.1547 4.63089 10.5387 4.90985 10.9719 4.90985H14.4331C15.4018 4.90985 15.8046 6.14946 15.0209 6.71886L12.2207 8.75331C11.8702 9.00795 11.7236 9.45932 11.8575 9.87134L12.927 13.1631C13.2264 14.0844 12.1719 14.8506 11.3882 14.2812L8.58801 12.2467C8.23753 11.9921 7.76293 11.9921 7.41244 12.2467L4.61227 14.2812C3.82856 14.8506 2.77408 14.0844 3.07343 13.1631L4.143 9.87134C4.27688 9.45932 4.13022 9.00795 3.77973 8.75331L0.979561 6.71886C0.195848 6.14946 0.598623 4.90985 1.56735 4.90985H5.02855C5.46177 4.90985 5.84573 4.63089 5.9796 4.21886L7.04917 0.927067Z"
                  fill="#4C4D54"
                />
              </svg>
            </div>
            <NavLink to="#" className="mb-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 8C16.6569 8 18 6.65685 18 5C18 3.34315 16.6569 2 15 2C13.3431 2 12 3.34315 12 5C12 5.12548 12.0077 5.24917 12.0227 5.37061L7.08259 7.84064C6.54303 7.32015 5.8089 7 5 7C3.34315 7 2 8.34315 2 10C2 11.6569 3.34315 13 5 13C5.80892 13 6.54306 12.6798 7.08263 12.1593L12.0227 14.6293C12.0077 14.7508 12 14.8745 12 15C12 16.6569 13.3431 18 15 18C16.6569 18 18 16.6569 18 15C18 13.3431 16.6569 12 15 12C14.1911 12 13.457 12.3201 12.9174 12.8406L7.97733 10.3706C7.9923 10.2492 8 10.1255 8 10C8 9.8745 7.99229 9.7508 7.97733 9.62934L12.9174 7.15932C13.4569 7.67984 14.1911 8 15 8Z"
                  fill="#4C4D54"
                />
              </svg>
            </NavLink>
          </div>
          <div className="d-flex align-items-center flex-wrap justify-content-end dashboardRight">
          <div>
            <div className="projectBorder py-4 d-flex flex-wrap align-items-center gap-2 border-bottom-0">
              <h4 className="selectTitle mb-1">Bot Status</h4>
              <div className="">
                <label className="switchWrapper">
                  <input type="checkbox" />
                  <span className="sliderWrapper round"></span>
                </label>
              </div>
            </div>
          </div>
      
          </div>
        </div>
        
          <div>
            <div className="portfolio-wrapper">
              
              <div className="summaryItemWrapper">
                <div className="summary summaryGrid">
                  <div className="summaryItem d-flex align-items-center">
                    <div className="d-flex align-items-center gap-3">
                      <img src={Admin1} className="img-fluid" alt=""/>
                      <div>
                        <p className="mb-0 summaryPra">Current Equity Value</p>
                        <h2 className="summaryHeading mb-0 ">
                          <div className={"d-flex"}>
                            <div className='summary'>
                              { !isLoading &&
                                <p className="mb-0 summaryHeading" >
                                {currentEquityValue} <span className='fs-6'>USD</span>
                              </p>}
                              {
                                     isLoading &&  <div className='text-center'>
                                                <Spinner className='my-4' animation="grow" variant="warning" />
                                            </div>
                                        }
                            </div>
                          </div>
                        </h2>
                      </div>
                    </div>
                  </div>
                  
                  <div className="summaryItem d-flex align-items-center">
                    <div className="d-flex align-items-center gap-3">
                      <img src={Admin2} className="img-fluid" alt=""/>
                      <div>
                        <p
                           className="mb-0 summaryPra">
                          Total Investment
                        </p>
                        <h2 className="summaryHeading mb-0 ">
                          <div>
                            <div className='summary'>
                              <p className="mb-0 summaryHeading">
                                {totalInvestmentValue} <span className='fs-6'>USD</span>
                              </p>
                            </div>
                          </div>
                        </h2>
                      
                      </div>
                    </div>
                  </div>
                  
                  <div className="summaryItem d-flex align-items-center">
                    <div className="d-flex align-items-center gap-3">
                      <img src={Admin3} className="img-fluid" alt=""/>
                      <div>
                        <p className="mb-0 summaryPra" >
                          BTC ROI
                        </p>
                        <h2 className="summaryHeading mb-0 " style={{color:'#17BD8D'}}>
                          1788 <span className="fs-6">USD</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  
                  <div className="summaryItem d-flex align-items-center">
                    <div className="d-flex align-items-center flex-wrap gap-3">
                      <img src={Admin4} className="img-fluid" alt=""/>
                      <div>
                        {/* <p className="mb-0 summaryPra"></p> */}
                        <p data-tip="React-tooltip"
                           className="mb-0 summaryPra d-flex justify-content-center align-items-center">
                          Profit Against USD
                        </p>
                        <h2 className="summaryHeading mb-0 " style={{color: "#FFA114"}}>
                          {profitAgainstUsd} %
                        </h2>
                      </div>
                    </div>
                  </div>   <div className="summaryItem d-flex align-items-center">
                    <div className="d-flex align-items-center flex-wrap gap-3">
                      <img src={Admin5} className="img-fluid" alt=""/>
                      <div>
                        {/* <p className="mb-0 summaryPra"></p> */}
                        <p data-tip="React-tooltip"
                           className="mb-0 summaryPra d-flex justify-content-center align-items-center">
                          Profit Against BTC
                        </p>
                        <h2 className="summaryHeading mb-0 " >
  
                          -24
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
  
        <div>
          <div className="row adminControlWrapper">
            <div className="col-lg-6 mb-4">
              <div className="DonutChart mb-4 ">
                <h1 className="DonutChartHeading mb-4">Current Equity</h1>
                <div className="DonutWrapper">
                  <div>
                    <AdminControlConfig/>
                  </div>
                </div>
              </div>
              <div className="tableControl">
              <SystemLog />
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <DataTable />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminControl;
