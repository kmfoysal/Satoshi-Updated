import React from 'react';
import form_timeline_three from "../../../../assests/images/form_timeline_three.png";
import {Link} from "react-router-dom";
import "./StepThree.css"

const StepThree = ({formData, setFormData}) => {
    return (
        <React.Fragment>
            <div className="multi_step_form_head_content">
                <p>Connect your API Key from <span className={"text-primary"}>Coinbase</span></p>
                <div className="form_timeline w-100 my-3">
                    <img className={"img-fluid"} src={form_timeline_three} alt="form_timeline"/>
                </div>
                <Link className={"connect_api"} to={"/documentation"}>
                    How to connect API key? How it Work?
                </Link>
                <hr style={{borderColor: "#848484", marginTop: "40px", marginBottom: "40px"}}/>
            </div>

            <div className="multi_step_form_form">
                <div className="mb-3">
                    <label htmlFor="InputBot" className="form-label text-white align-middle">
                        <span>
                            Bot Budget
                            <span className={"inputBot"}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8 10.6667V8M8 5.33333H8.00667M14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8Z"
                            stroke="#4C4D54" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                            </span>
                        </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Bot Budget"
                      className="form-control w-100 bot"
                      id="InputBot"
                      value={formData.bot_budget}
                      onChange={(event)=>
                        setFormData({...formData, bot_budget: event.target.value})
                    }
                    />
                </div>

                <hr style={{borderColor: "#848484", marginTop: "40px", marginBottom: "40px"}}/>

            </div>
        </React.Fragment>
    );
};

export default StepThree;