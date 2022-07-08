import React from "react";
import form_timeline_four from "../../../../assests/images/form_timeline_four.png";
import {Link} from "react-router-dom";
import "./StepFour.css"

const StepFour = ({formData, setFormData}) => {
  return (
    <React.Fragment>
      <div className="multi_step_form_head_content">
        <p>Connect your API Key from <span className={"text-primary"}>Coinbase</span></p>
        <div className="form_timeline w-100 my-3">
          <img className={"img-fluid"} src={form_timeline_four} alt="form_timeline"/>
        </div>
        <Link className={"connect_api"} to={"/documentation"}>
          How to connect API key? How it Work?
        </Link>
        <hr style={{borderColor: "#848484", marginTop: "40px", marginBottom: "40px"}}/>
      </div>
      
      <div className="multi_step_form_form d-flex flex-wrap">
        
        <div className="left_radio customRadio mb-3">
          <label className="form-check-label label_head" htmlFor="flexRadioDefault1">
            Trading Frequency
          </label>
          
          <div className="d-flex">
            <div className="form-check p-0">
              
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value={formData.trading_frequency}
                onChange={(event)=>{
                  formData({...formData, trading_frequency: event.target.value})
                }}
              />
              
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Weekly
              </label>
            
            </div>
            <div className="form-check mx-4 p-0">
              
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value={formData.trading_frequency}
                onChange={(event)=>{
                  formData({...formData, trading_frequency: event.target.value})
                }}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Monthly
              </label>
            </div>
          
          </div>
        </div>
        
        {/*RIGHT BUTTON*/}
        
        <div className="right_radio mb-3">
          <label className="form-check-label label_head" htmlFor="flexRadioDefault1">
            Trading Frequency
          </label>
          <div className="form-check form-switch p-0">
            <label className="switchWrapper">
              <input
                type="checkbox"
                
              />
              <span className="sliderWrapper round"></span>
            </label>
          </div>
        </div>
        
        <hr style={{borderColor: "#848484", marginTop: "40px", marginBottom: "40px"}}/>
      
      </div>
    </React.Fragment>
  );
};

export default StepFour;