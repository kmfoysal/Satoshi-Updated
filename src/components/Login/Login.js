import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import login_right_avatar from "../../assests/images/avatar-lennox.png";
import logo_avatar from "../../assests/images/logo_avatar.png";
import "./Login.css";

const Login = () => {
  
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };
  
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  
  return (
    <div id={"login"} className={"container-fluid"}>
      <div className="row">
        <div className="col-lg-6 col-md-12 px-0">
          <div className="row h-100 d-flex align-items-center justify-content-center responsive">
            <div className="col-lg-6 col-md-12">
              <div className="login_left_side">
                <div className="login_head">
                  <img src={logo_avatar} alt="satoshi_avatar"/>
                </div>
                <div className="login_head_content">
                  <h3>Login to account</h3>
                  <p>Welcome to Satoshi's Bot</p>
                  <hr style={{borderColor: "#848484", marginTop: "40px", marginBottom: "40px"}}/>
                </div>
                <div className="login_form">
                  {/*<form>*/}
                  <div className="mb-3 email">
                    <label htmlFor="exampleInputEmail1" className="form-label text-white">
                      Email or username
                    </label>
                    
                    <input type="email" placeholder="Email or username" className="form-control w-100"
                           id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                  </div>
                  <div className="mb-3 password eye">
                  <label htmlFor="exampleInputPassword1" className="form-label text-white">
                                          {" "}
                                          Password{" "}
                                          <input type={passwordType} onChange={handlePasswordChange} name="password" placeholder="Password" className="form-control w-100 mt-1" id="exampleInputPassword1" />
                                          {/*PASSWORD SHOW OFF*/}
                                          <button className="btn" onClick={togglePassword}>
                                              {passwordType === "password" ? <FontAwesomeIcon className="highlight" icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                                          </button>
                                      </label>
                    
                    <p className={"text-end mt-2"}>
                      <Link to="/forget_password/">Forget your password</Link>
                    </p>
                    <hr
                      style={{
                        borderColor: "#848484",
                        marginTop: "40px",
                        marginBottom: "40px",
                      }}
                    />
                  </div>
                  
                  <button type="submit" className="btn btn-primary w-100 login_button">
                    Login
                  </button>
                  {/*</form>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/*RIGHT SIDE*/}
        <div className="col-lg-6 col-md-12 px-0">
          <div id="SatoshiCarouselCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#SatoshiCarouselCaptions" data-bs-slide-to="0" className="active"
                      aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#SatoshiCarouselCaptions" data-bs-slide-to="1"
                      aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#SatoshiCarouselCaptions" data-bs-slide-to="2"
                      aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner login_right_side">
              <img src={login_right_avatar} className="d-block w-100 login_right_avatar" alt="satoshi_right_avatar"/>
              <div className="carousel-item active">
                <div className="carousel-caption d-none d-md-block">
                  <h5>What is Satoshi's Index?</h5>
                  <p>According to the official website, Satoshi's Index is the first utility NFT offering crypto
                    investment automation.</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption d-none d-md-block">
                  <h5>What is Satoshi's Index?</h5>
                  <p>According to the official website, Satoshi's Index is the first utility NFT offering crypto
                    investment automation.</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption d-none d-md-block">
                  <h5>What is Satoshi's Index?</h5>
                  <p>According to the official website, Satoshi's Index is the first utility NFT offering crypto
                    investment automation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
