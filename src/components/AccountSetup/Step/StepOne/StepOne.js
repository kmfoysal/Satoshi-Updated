import React from 'react';
import {Link} from "react-router-dom";
import "./StepOne.css";
import form_timeline_one from "../../../../assests/images/form_timeline_one.png"
import './step.scss'
const StepOne = () => {
    return (
        <React.Fragment>
            <div className="multi_step_form_head_content">
                <p>
                    Connect your API Key from <span style={{ color: "#0D99FF" }}>Binance</span> or <span style={{ color: "#0D99FF" }}>Coinbase</span>
                </p>
                <div className="form_timeline w-100 my-3">
                    <img className={"img-fluid"} src={form_timeline_one} alt="form_timeline" />
                </div>
                <Link className={"connect_api"} to={"/documentation"}>
                    How to connect API key? How it Work?
                </Link>
                <hr style={{ borderColor: "#848484", marginTop: "40px", marginBottom: "40px" }} />
            </div>

            <div className="multi_step_form_form">
                <div className="py-4 mb-3">
                    <h4 className="selectTitle">Select Exchange</h4>
                    <div className="d-flex flex-wrap align-items-center gap-3 mt-3 py-2">
                        <label htmlFor="exchange" className="exchangeWrapper ps-0 d-block">
                            <div className="d-flex align-items-center gap-2 exchangeContent">
                                <input type="radio" name="exchange" id="exchange" className="d-none" />

                                <div className="selectExchange"></div>
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.50709 8.06412L9.00303 4.56961L12.5004 8.06696L14.5334 6.03252L9.00303 0.500732L3.47266 6.0311L5.50709 8.06412Z" fill="#F3BA2F" />
                                    <path d="M0 9.50142L2.03301 7.46698L4.06745 9.50142L2.03301 11.5344L0 9.50142Z" fill="#F3BA2F" />
                                    <path d="M5.50709 10.9373L9.00303 14.4333L12.5004 10.9359L14.5348 12.9675L9.00445 18.4993L3.47266 12.9718L5.50709 10.9373Z" fill="#F3BA2F" />
                                    <path d="M13.9316 9.50142L15.9647 7.46698L17.9991 9.49999L15.9647 11.5359L13.9316 9.50142Z" fill="#F3BA2F" />
                                    <path d="M11.0652 9.50002L9.00232 7.43573L7.47685 8.9612L7.30056 9.13607L6.93945 9.49718L9.00232 11.5586L11.0652 9.50144V9.50002Z" fill="#F3BA2F" />
                                </svg>

                                <p className="mb-0 exchangeTitle">Binance</p>
                            </div>
                        </label>
                        <label htmlFor="exchange1" className="exchangeWrapper d-block">
                            <div className="d-flex align-items-center gap-2 exchangeContent">
                                <input type="radio" name="exchange" id="exchange1" className="d-none" checked />
                                <div className="selectExchange"></div>
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18.5C13.9706 18.5 18 14.4706 18 9.5C18 4.52944 13.9706 0.5 9 0.5C4.02944 0.5 0 4.52944 0 9.5C0 14.4706 4.02944 18.5 9 18.5Z" fill="#004FF7" />
                                    <path
                                        d="M12.1058 10.087C11.8309 11.5439 10.5525 12.6456 9.01584 12.6456C7.27837 12.6456 5.87023 11.2374 5.87023 9.49997C5.87023 7.7625 7.27837 6.35435 9.01584 6.35435C10.5525 6.35435 11.8309 7.45665 12.1058 8.91298H15.2799C14.9839 5.71362 12.2924 3.20874 9.01584 3.20874C5.54089 3.20874 2.72461 6.02564 2.72461 9.49997C2.72461 12.9749 5.54151 15.7912 9.01584 15.7912C12.2924 15.7912 14.9839 13.2863 15.2799 10.087H12.1058Z"
                                        fill="white"
                                    />
                                </svg>
                                <p className="mb-0 exchangeTitle">Binance</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default StepOne;