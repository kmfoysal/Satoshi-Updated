import React from 'react';
import mark_failed from "../../../../assests/images/mark_failed.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import './FailedStep.css'
import {Link} from "react-router-dom";


const FailedStep = () => {
  return (
    <div id={"failed_step"}>
      <div className="container-fluid">
        <div className="row h-100">
          <div className="col-lg-12 d-flex justify-content-center align-items-center vh-100">
            <div className="api_connection_box">
              <div className="content">
                <img src={mark_failed} alt="satoshi_success"/>
                <div className="text">
                  <h3 className={"h2 text-white my-3"}>API Connection <br/> <strong>Not Successfully</strong></h3>
                  <p>Not Successfully connect the client should keep holding the Connection object throughout their entire API session.</p>
                </div>
                <button>
                  <Link to={"/multi_step_form"} className={"text-decoration-none"}>
                    <strong className={"text-white"}>Try Again <FontAwesomeIcon icon={faChevronRight}/>
                    </strong>
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

export default FailedStep;