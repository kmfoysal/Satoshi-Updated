import React from 'react';
import form_timeline_two from "../../../../assests/images/form_timeline_two.png";
import {Link} from "react-router-dom";
import "./StepTwo.css"


const StepTwo = ({formData, setFormData}) => {
  return (
      <React.Fragment>
          <div className="multi_step_form_head_content">
              <p>
                  Connect your API Key from <span className={"text-primary"}>Coinbase</span>
              </p>
              <div className="form_timeline w-100 my-3">
                  <img className={"img-fluid"} src={form_timeline_two} alt="form_timeline" />
              </div>
              <Link className={"connect_api"} to={"/documentation"}>
                  How to connect API key? How it Work?
              </Link>
              <hr style={{ borderColor: "#848484", marginTop: "40px", marginBottom: "40px" }} />
          </div>

          <div className="multi_step_form_form">
              <div className="mb-3">
                  <label htmlFor="InputApiKey" className="form-label text-white">
                      API Key
                  </label>
                  <input
                      type="text"
                      placeholder="d3jNT12RKaTfKFJa"
                      className="form-control apiKey w-100 "
                      id="InputApiKey"
                      value={formData.api_key}
                      onChange={(event) => setFormData({ ...formData, api_key: event.target.value })}
                      required
                  />

                  <div className={"my-3"}>
                      <label htmlFor="InputApiSecretKey" className="form-label  text-white">
                          API Secret
                      </label>
                      <input
                          type="text"
                          placeholder="API Secret"
                          className="form-control w-100 secret"
                          id="InputApiSecretKey"
                          value={formData.api_secret}
                          onChange={(event) => setFormData({ ...formData, api_secret: event.target.value })}
                          required
                      />
                  </div>

                  <label htmlFor="InputApiPassphrase" className="form-label text-white">
                      API Passphrase (CoinBase Only)
                  </label>
                  <input
                      type="text"
                      placeholder="API Passphrase (CoinBase Only)"
                      className="form-control Passphrase w-100 global"
                      id="InputApiPassphrase"
                      value={formData.api_passphrase_coinbase}
                      onChange={(event) => {
                          setFormData({ ...formData, api_passphrase_coinbase: event.target.value });
                      }}
                      required
                  />
              </div>

              <hr style={{ borderColor: "#848484", marginTop: "40px", marginBottom: "40px" }} />
          </div>
      </React.Fragment>
  );
};

export default StepTwo;