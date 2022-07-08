import React from 'react';
import "./StepFinal.css";
import mark_success from "../../../../assests/images/mark_success.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


const SuccessStep = () => {
  return (
    <div id={"final_step"}>
      <div className="container-fluid">
        <div className="row h-100">
          <div className="col-lg-12 d-flex justify-content-center align-items-center vh-100">
            <div className="api_connection_box">
              <div className="content">
                <img src={mark_success} alt="satoshi_success"/>
                <div className="text">
                  <h3 className={"h2 text-white my-3"}>API Connection <br/> <strong>Successfully</strong></h3>
                  <p>On successful connect the client should keep holding the Connection object throughout their entire
                    API session.</p>
                </div>
                <button>
                  <Link to={"/dashboard"} className={"text-decoration-none"}>
                    <strong className={"text-white"}>Dashboard <FontAwesomeIcon icon={faChevronRight}/> </strong>
                  </Link>
                </button>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStep;