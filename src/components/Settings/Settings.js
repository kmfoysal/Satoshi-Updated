import React from "react";
import { NavLink } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import CurrentConfigurations from "./CurrentConfigurations";
import EditConfigurations from "./EditConfigurations";
import "./Settings.scss";

const Settings = () => {
    return (
        <div>
            <div className="sectionPadding">
                <div className="d-flex align-items-center gap-3">
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
                        <h1 className="text-white fs-36">Settings</h1>
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

                <div className="settingWrapper mt-4">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="editConfiguration px-4 py-4">
                                <EditConfigurations />
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="currentConfigurations px-4 py-4">
                                <CurrentConfigurations />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
