import React, { useState } from "react";
import logo_avatar from "../../assests/images/logo_avatar.png";
import forget_right_avatar from "../../assests/images/avatar-lennox_forget_password.png"
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


import './ConfirmPass.css'

const ConfirmPass = () => {

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
        <div id={"confirm_password"} className={"container-fluid"}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="row h-100 d-flex align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <div className="forget_left_side">
                                <div className="forget_head">
                                    <img src={logo_avatar} alt="satoshi_avatar" />
                                </div>
                                <div className="forget_head_content">
                                    <h3>Reset password</h3>
                                    <p>Reset your password within 2 hours.</p>
                                    <hr style={{ borderColor: "#848484", marginTop: "40px", marginBottom: "40px" }} />
                                </div>
                                <div className="forget_form">
                                    <div className="mb-3 password eye">
                                        <label htmlFor="exampleInputPassword1" className="form-label text-white position-relative">
                                            Password
                                            <input
                                                type={passwordType}
                                                onChange={handlePasswordChange}
                                                name="password"
                                                placeholder="Password"
                                                className="form-control w-100 mt-2"
                                                id="exampleInputPassword1"
                                            />
                                            {/*PASSWORD SHOW OFF*/}
                                            <button className="btn" onClick={togglePassword}>
                                                {passwordType === "password" ? <FontAwesomeIcon className="highlight" icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                                            </button>
                                            {/*PASSWORD SHOW OFF*/}
                                        </label>

                                        <label htmlFor="exampleInputPassword2" className="form-label text-white position-relative mt-3">
                                            Confirm New Password
                                            <input
                                                type={passwordType}
                                                onChange={handlePasswordChange}
                                                name="password"
                                                placeholder=" Confirm New Password"
                                                className="form-control w-100 mt-2"
                                                id="exampleInputPassword2"
                                            />
                                            {/*PASSWORD SHOW OFF*/}
                                            <button className="btn" onClick={togglePassword}>
                                                {passwordType === "password" ? <FontAwesomeIcon className="highlight" icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                                            </button>
                                            {/*PASSWORD SHOW OFF*/}
                                        </label>

                                      

                                        <hr style={{ borderColor: "#848484", marginTop: "40px", marginBottom: "40px" }} />
                                        <button type="submit" className="btn btn-primary w-100 confirm_button">
                                            <Link to={"/confirm_password"} className={"text-decoration-none text-white"}>
                                                <span>Submit</span>
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 p-0 m-0">
                    <div id="SatoshiCarouselCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#SatoshiCarouselCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#SatoshiCarouselCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#SatoshiCarouselCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner login_right_side">
                            <img src={forget_right_avatar} className="d-block w-100 login_right_avatar vh-100" alt="satoshi_right_avatar" />
                            <div className="carousel-item active">
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>What is Satoshi's Index?</h5>
                                    <p>According to the official website, Satoshi's Index is the first utility NFT offering crypto investment automation.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>What is Satoshi's Index?</h5>
                                    <p>According to the official website, Satoshi's Index is the first utility NFT offering crypto investment automation.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>What is Satoshi's Index?</h5>
                                    <p>According to the official website, Satoshi's Index is the first utility NFT offering crypto investment automation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmPass;