import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { NavLink } from "react-router-dom";
import FilterableTab from "../../components/FilterableTab";
import { HiUser } from "react-icons/hi";
import { HiChartPie } from "react-icons/hi";
import { FiSliders } from "react-icons/fi";
import { FaKey } from "react-icons/fa";
import "./Configaration.scss";
import { user, preferences, aPIkeys } from "../../summaryData";
const Configaration = () => {
    const [selected, setSelected] = useState("Users");
    const [data, setData] = useState([]);

    const menu = [
        {
            id: "Users",
            tabIcon: <HiUser />,
            title: "Users",
        },
        {
            id: "Preferences",
            tabIcon: <FiSliders />,
            title: "Preferences",
        },
        {
            id: "APIkeys",
            tabIcon: <FaKey />,
            title: "API keys",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "Users":
                setData(user);
                break;
            case "Preferences":
                setData(preferences);
                break;
            case "APIkeys":
                setData(aPIkeys);
                break;

            default:
                setData(user);
        }
    }, [selected]);
    return (
        <div>
            <div className="sectionPadding">
                <div className="d-flex align-items-center gap-3 mb-4">
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
                        <h1 className="text-white fs-36">Configuration</h1>
                    </div>
                </div>

                <div className="configurationWrapper ps-0 pt-2">
                    <div className="d-flex align-items-center justify-content-between">
                        <ul className="list-unstyled d-flex align-items-center mb-0">
                            {menu.map((item) => (
                                <FilterableTab tabIcon={item.tabIcon} title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} key={item.id} />
                            ))}
                        </ul>
                        <NavLink to="#" className="text-decoration-none d-flex align-items-center gap-1 invitation">
                            <span className="gradientText">2 Pending Invites</span>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.94043 13.78L10.2871 9.4333C10.8004 8.91997 10.8004 8.07997 10.2871 7.56664L5.94043 3.21997"
                                    stroke="url(#paint0_linear_8712_406)"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <defs>
                                    <linearGradient id="paint0_linear_8712_406" x1="5.94043" y1="8.6035" x2="10.6721" y2="8.6035" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FF8833" />
                                        <stop offset="1" stopColor="#F53E4C" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </NavLink>

                        {/* for responsive 8-6-22 */}

                        <svg className="threeDot" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 10C6 11.1046 5.10457 12 4 12C2.89543 12 2 11.1046 2 10C2 8.89543 2.89543 8 4 8C5.10457 8 6 8.89543 6 10Z" fill="#6B6E78" />
                            <path d="M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z" fill="#6B6E78" />
                            <path d="M16 12C17.1046 12 18 11.1046 18 10C18 8.89543 17.1046 8 16 8C14.8954 8 14 8.89543 14 10C14 11.1046 14.8954 12 16 12Z" fill="#6B6E78" />
                        </svg> 
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
        </div>
    );
};

export default Configaration;
