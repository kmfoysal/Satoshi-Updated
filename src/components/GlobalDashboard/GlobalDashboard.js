import React from 'react'
import useSatoshi from '../../hooks/useSatoshi';
import BarChart1 from './BarChart1';
import BarChart2 from './BarChart2';
import BarChart3 from './BarChart3';
import BarChart4 from './BarChart4';
import './GlobalDashboard.scss'

const GlobalDashboard = () => {
    const {users} = useSatoshi()
    
  return (
      <div className="summaryItemWrapper">
          <div className="row">
              <div className="col-lg-6">
                  <div className="DonutChart barChart mb-4">
                      <h1 className="DonutChartHeading mb-4">Month to Date Highest Trading Volume Coins panel</h1>
                      <div className="DonutWrapper">
                          <div>
                              <BarChart1 users={users}/>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-6">
                  <div className="DonutChart barChart mb-4">
                      <h1 className="DonutChartHeading mb-4">Last Month Highest Trading Volume Coins</h1>
                      <div className="DonutWrapper">
                          <div>
                              <BarChart2 />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-6">
                  <div className="DonutChart barChart mb-4">
                      <h1 className="DonutChartHeading mb-4">Week to Date Highest Trading Volume Coins</h1>
                      <div className="">
                          <div>
                              <BarChart3 />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-6">
                  <div className="DonutChart barChart mb-4">
                      <h1 className="DonutChartHeading mb-4">Last Week Highest Trading Volume Coins</h1>
                      <div className="DonutWrapper">
                          <div>
                              <BarChart4 />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default GlobalDashboard