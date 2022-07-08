import React, {useState} from "react";
import {Link} from "react-router-dom";
import forget_right_avatar from "../../../assests/images/avatar-lennox_forget_password.png";
import "./MultiStepForm.css";
import StepOne from "../Step/StepOne/StepOne";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeftLong, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import StepTwo from "../Step/StepTwo/StepTwo";
import StepThree from "../Step/StepThree/StepThree";
import StepFour from "../Step/StepFour/StepFour";
import StepFive from "../Step/SetpFive/StepFive";

const MultiStepForm = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    api_key: "",
    api_secret: "",
    api_passphrase_coinbase: "",
    bot_budget: "",
    trading_frequency: "",
    trading_frequency_switch: "",
  });
  
  const FormTitles = ["Connect Your Exchange", "Connect API Key", "Set Your Investment Budget", "Select Trade Frequency", "Review"];
  
  const PageDisplay = () => {
    if (page === 0) {
      return <StepOne formData={formData} setFormData={setFormData}/>;
      
    } else if (page === 1) {
      return <StepTwo formData={formData} setFormData={setFormData}/>;
      
    } else if (page === 2) {
      return <StepThree formData={formData} setFormData={setFormData}/>;
      
    } else if (page === 3) {
      return <StepFour formData={formData} setFormData={setFormData}/>;
      
    } else {
      return <StepFive formData={formData} setFormData={setFormData}/>;
    }
  };
  
  return (
    <div id={"multi_step_form"} className={"container-fluid"}>
      <div className="row">
        <div className="col-lg-6 col-md-12 px-0">
          <div className="row h-100 d-flex align-items-center justify-content-center responsive">
            <div className="col-lg-6 col-md-12">
              <div className="multi_step_form_left_side">
                <div className="multi_step_form_head mb-2">
                  <button className={"text-decoration-none border-0 back_arrow"}
                          disabled={page == 0}
                          onClick={() => {
                            setPage((currPage) => currPage - 1);
                          }}
                  >
                    <FontAwesomeIcon icon={faArrowLeftLong}/> Back
                  </button>
                  
                  <h3>{FormTitles[page]}</h3>
                
                </div>
                
                {/*STEP GOES HERE*/}
                
                {
                  PageDisplay()
                }
                
                
                {/*CONTINUE AND PREVIOUS BUTTON*/}
                
                <button type="submit" className="btn btn-primary w-100 continue"
                        onClick={() => {
                          if (page === FormTitles.length - 1) {
                            alert("FORM SUBMITTED");
                            console.log(formData);
                          } else {
                            setPage((currPage) => currPage + 1);
                          }
                        }}
                >
                  
                  
                  <span>Continue <FontAwesomeIcon icon={faChevronRight}/></span>
                
                
                </button>
                
                <button type="skip" className="btn btn-primary w-100 mt-3 skip"
                        disabled={page == 4}
                        onClick={() => {
                          if (page === FormTitles.length - 1) {
                            alert("FORM SUBMITTED");
                            console.log(formData);
                          } else {
                            setPage((currPage) => currPage + 1);
                          }
                        }}
                >
                  Skip
                
                </button>
              </div>
            
            </div>
          </div>
        </div>
        
        
        {/*RIGHT SIDE */}
        <div className="col-lg-6 col-md-12 px-0">
          <div id="SatoshiCarouselCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#SatoshiCarouselCaptions" data-bs-slide-to="0"
                      className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#SatoshiCarouselCaptions" data-bs-slide-to="1"
                      aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#SatoshiCarouselCaptions" data-bs-slide-to="2"
                      aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner login_right_side">
              <img src={forget_right_avatar} className="d-block w-100 login_right_avatar vh-100 img-fluid"
                   alt="satoshi_right_avatar"/>
              <div className="carousel-item active">
                <div className="carousel-caption d-none d-md-block">
                  <h5>What is Satoshi's Index?</h5>
                  <p>According to the official website, Satoshi's Index is the first utility NFT
                    offering crypto investment automation.</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption d-none d-md-block">
                  <h5>What is Satoshi's Index?</h5>
                  <p>According to the official website, Satoshi's Index is the first utility NFT
                    offering crypto investment automation.</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption d-none d-md-block">
                  <h5>What is Satoshi's Index?</h5>
                  <p>According to the official website, Satoshi's Index is the first utility NFT
                    offering crypto investment automation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;