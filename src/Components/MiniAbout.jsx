import React from "react";
import Rocket from "../Assets/images/about.gif";
const MiniAbout = () => {
  return (
    <div>
      <div className="bg-item">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="title m-t-100">
                <h1>Lead through the challanges and give you success!</h1>
              </div>
              <div className="p-details m-t-70">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={Rocket} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="icon-blue">
                <i className="fas fa-clone fa-2x"></i>
              </div>
              <h5 className="mini-title">Fully customizable</h5>
              <p>
                Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa id.
              </p>
            </div>
            <div className="col-md-3">
              <div className="icon-blue">
                <i className="fas fa-user-check fa-2x"></i>
              </div>
              <h5 className="mini-title">Qualified Team</h5>
              <p>
                Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa id.
              </p>
            </div>
            <div className="col-md-3">
              <div className="icon-blue">
                <i className="fas fa-headset fa-2x"></i>
              </div>
              <h5 className="mini-title">24/7 Support</h5>
              <p>
                Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa id.
              </p>
            </div>
            <div className="col-md-3">
              <div className="icon-blue">
                <i className="fas fa-fighter-jet  fa-2x"></i>
              </div>
              <h5 className="mini-title">Modern Technology</h5>
              <p>
                Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa id.
              </p>
            </div>                                    
          </div>
        </div>
      </div>
      <div className="bg-item">
        <div className="col-md-12">
            <h4 className="mini-title">For Any Query Call Us:+88017000000</h4>
        </div>
      </div>
    
    </div>
  );
};

export default MiniAbout;
