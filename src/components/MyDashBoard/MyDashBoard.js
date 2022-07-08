import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Countdown from "react-countdown";
import ReactTooltip from "react-tooltip";
import useSatoshi from "../../hooks/useSatoshi";
import summaryIcon1 from "../../icons/summary1.svg";
import summaryIcon3 from "../../icons/summary3.svg";
import summaryIcon4 from "../../icons/summary4.svg";
import summaryIcon5 from "../../icons/summary5.svg";
import Areachart from "./Areachart";
import DataTable from "./DataTable";
// import { MyDashboardTab } from "../../summaryData";
import Donut from "./Donut";
import './MyDashBoard.css';
import "./MyDashBoard.scss";

const MyDashBoard = ({btcRio,totalBtcQuantityValue}) => {

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
                                          1 day <Countdown daysInHours={true} date={Date.now() + 30000000} />
                                           
                                      </div>
                                  </div>
                              </h2>
                          </div>
                      </div>
                  </div>
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
                                  {  isLoading ? 
                                            <div className='text-center'>
                                                <Spinner className='my-4' animation="grow" variant="warning" />
                                            </div>
                                            :
                                            <span>{currentEquityValue}</span>
                                  }
                                  <span className="fs-6"> USD</span>
                              </h2>
                          </div>
                      </div>
                  </div>

                  <div className="summaryItem d-flex align-items-center">
                      <div className="d-flex align-items-center gap-3">
                          <img src={summaryIcon4} className="img-fluid" alt="" />
                          <div>
                              <p className="mb-0 summaryPra">
                                  Total Investment
                              </p>
                              <h2 className="summaryHeading mb-0 " style={{ color: "#FFA114" }}>
                                  { !isLoading &&
                                     <>
                                      {totalInvestmentValue}
                                    <span className="fs-6"> USD</span>
                                    </>
                                  }
                                  {
                                     isLoading &&  <div className='text-center'>
                                                <Spinner className='my-4' animation="grow" variant="warning" />
                                            </div>
                                        }
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

                              <h2 className="summaryHeading mb-0 ">{profitAgainstUsd} %</h2>
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
                              <div className="d-flex justify-content-center d-md-block">
                                  <Donut />
                              </div>
                          </div>
                      </div>
                      <div className="DonutChart">
                          <h1 className="DonutChartHeading performance mb-4">Bot Performance</h1>
                          <div className="botPerformanceChart">
                              <div>
                                  <Areachart totalInvestmentValue={totalInvestmentValue} currentEquityValue={currentEquityValue} btcRio={btcRio} totalBtcQuantityValue={totalBtcQuantityValue}/>
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
}

export default MyDashBoard ;
