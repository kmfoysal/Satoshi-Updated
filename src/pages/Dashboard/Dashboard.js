import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import FilterableTab from "../../components/FilterableTab";
import { HiUser } from "react-icons/hi";
import { HiChartPie } from "react-icons/hi";
import "./dashboard.scss";
import { myDashboard, globalDashboard } from "../../summaryData";

const Dashboard = ({ menuOpen, setMenuOpen }) => {
    const [selected, setSelected] = useState("MyDashboard");
    const [data, setData] = useState([]);

    const menu = [
        {
            id: "MyDashboard",
            tabIcon: <HiUser />,
            title: "My Dashboard",
        },

        {
            id: "GlobalDahboard",
            tabIcon: <HiChartPie />,
            title: "Global Dahboard",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "MyDashboard":
                setData(myDashboard);
                break;
            case "GlobalDahboard":
                setData(globalDashboard);
                break;

            default:
                setData(myDashboard);
        }
    }, [selected]);

    return (
        <div>
            {/* <NavigationBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
            <div className="sectionPadding dashboardWrapper">
                <div className="d-flex align-items-start justify-content-between  gap-3 dashboardItem">
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
                            <h1 className="text-white fs-36">dashboard</h1>
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
                        <ul className="list-unstyled d-flex align-items-center mb-4">
                            {menu.map((item) => (
                                <FilterableTab tabIcon={item.tabIcon} title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} key={item.id} />
                            ))}
                        </ul>

                        <div className="d-flex align-items-center gap-3 ms-5  mb-4 settingBtn">
                            <button type="button" className="commonBtn">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.4892 3.17094C11.1102 1.60969 8.8898 1.60969 8.51078 3.17094C8.26594 4.17949 7.11045 4.65811 6.22416 4.11809C4.85218 3.28212 3.28212 4.85218 4.11809 6.22416C4.65811 7.11045 4.17949 8.26593 3.17094 8.51078C1.60969 8.8898 1.60969 11.1102 3.17094 11.4892C4.17949 11.7341 4.65811 12.8896 4.11809 13.7758C3.28212 15.1478 4.85218 16.7179 6.22417 15.8819C7.11045 15.3419 8.26594 15.8205 8.51078 16.8291C8.8898 18.3903 11.1102 18.3903 11.4892 16.8291C11.7341 15.8205 12.8896 15.3419 13.7758 15.8819C15.1478 16.7179 16.7179 15.1478 15.8819 13.7758C15.3419 12.8896 15.8205 11.7341 16.8291 11.4892C18.3903 11.1102 18.3903 8.8898 16.8291 8.51078C15.8205 8.26593 15.3419 7.11045 15.8819 6.22416C16.7179 4.85218 15.1478 3.28212 13.7758 4.11809C12.8896 4.65811 11.7341 4.17949 11.4892 3.17094ZM10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
                                        fill="#6B6E78"
                                    />
                                </svg>
                                Settings
                            </button>
                            <button type="button" className="commonBtn">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6V10C9 10.2652 9.10536 10.5196 9.29289 10.7071L12.1213 13.5355C12.5118 13.9261 13.145 13.9261 13.5355 13.5355C13.9261 13.145 13.9261 12.5118 13.5355 12.1213L11 9.58579V6Z"
                                        fill="#6B6E78"
                                    />
                                </svg>
                                Activity Log
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="portfolio-wrapper">
                        {data.map((com) => (
                            <div className="portfolio-item" key={com.id}>
                                {com.componentName}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
