import React,{useState} from 'react';
import forget_right_avatar from "../../assests/images/avatar-lennox_forget_password.png"
import logo_avatar from '../../assests/images/logo_avatar.png'
import "./CreateAccount.css"
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const CreateAccount = () => {
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
      <div id={"create_account"} className={"container-fluid"}>
          <div className="row">
              <div className="col-lg-6">
                  <div className="row h-100 d-flex align-items-center justify-content-center">
                      <div className="col-lg-8">
                          <div className="create_account_left_side">
                              <div className="create_account_head mt-4">
                                  <img src={logo_avatar} alt="satoshi_avatar" />
                              </div>
                              <div className="create_account_head_content">
                                  <h3 className={"text-white"}>Create an account</h3>
                                  <p>Register your Satoshi's Bot account</p>
                                  <strong className={"text-white"}>Hello Lennox Matsinde</strong>
                                  <p>
                                      <span className={"text-primary"}>Devon</span> has invited you to join Satoshi's Bot Please complete the following and choose a password to accept your invitation
                                      and continue:
                                  </p>
                                  <hr style={{ borderColor: "#848484", marginTop: "40px", marginBottom: "40px" }} />
                              </div>
                              <div className="create_account_form">
                                  <form>
                                      <div className="mb-3 email">
                                          <label htmlFor="exampleInputEmail1" className="form-label text-white">
                                              Emaill
                                          </label>

                                          <input type="email" placeholder="lennoxmatsinde@gmail.com" className="form-control w-100" id="exampleInputEmail1" required />
                                      </div>

                                      <div className="mb-3 name">
                                          <label htmlFor="InputName" className="form-label text-white">
                                              Name
                                          </label>

                                          <input type="text" placeholder="Lennox Matsinde" className="form-control w-100" id="InputName" required />
                                      </div>

                                      <div className="mb-3 username">
                                          <label htmlFor="InputUserName" className="form-label text-white">
                                              Username
                                          </label>

                                          <input type="email" placeholder="lennoxmatsinde" className="form-control w-100" id="InputUserName" required />
                                      </div>

                                      <div className="mb-3 password">
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

                                      <button type="submit" className="btn btn-primary w-100">
                                          Login
                                      </button>
                                  </form>
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

export default CreateAccount;