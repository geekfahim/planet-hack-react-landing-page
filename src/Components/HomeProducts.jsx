import React from "react";
import Erp from "../Assets/images/erp.gif";
// import Crm from '../Assets/images/icrm.png'
import Sales from "../Assets/images/sales.jpg";
import Allpc from "../Assets/images/allinone.png";
import Info from "../Assets/images/info1.png";
import Laptop from "../Assets/images/1.png";
import { Link } from "react-router-dom";
import Longbanner from "./Longbanner";
const HomeProducts = () => {
  return (
    <div>
    <div className="container-fluid">
    <section class="section_all bg_custom_color m-t-10">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section_title_all text-center">
                <div class="section_icons text-white">
                <i class="fas fa-2x  fa-sitemap"></i>
                </div>
                <h6 class="mt-3 text-uppercase text-white section_tag">
                  Work Process{" "}
                </h6>
                <h1 class="mt-3 text-white">How it works ?</h1>
                <p class="section_subtitle mx-auto text-white">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
          </div>

          <div class="row mt-5 vertical_content_manage">
            <div class="col-lg-6">
              <div class="mt-3">
                <h2 class="text-white text-capitalize work_flow_soft">
                  {" "}
                  We Develop Exceptional Enterprise software solution.
                </h2>
                <div class="home_text_details">
                  <p class="home_subtitle mt-4 mb-0">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum. Ut tincidunt ex
                    a tempor congue, lacus magna pretium quam.{" "}
                  </p>
                </div>

                <div class="home_btn_manage mt-5">
                  <a href="#" class="learn-more mr-3">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="home_side_img mt-3">
                <img
                  src={Info}
                  alt=""
                  class="img-fluid mx-auto d-block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>    
    </div>
      <div className="container-fluid">
        <Longbanner title="Our Ready Products" />
        <div className="pc-bg">
          <div className="d-flex px-4">
            <div>
              <img src={Allpc} className="productpc" alt="" />
            </div>
            <div className="pc-title">
              <h3>All in One Pc</h3>
              <h5 className="m-b-30">Built in Audio,Webcam etc.</h5>
              <Link className="learn-more m-t-20" to="/pc">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="homeproducts">
          <div className="row">
            <div className="col-md-6">
              <div className="bg-itemn">
                <img src={Erp} className="img-product" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-itemn">
                <img src={Sales} className="img-product" alt="" />
              </div>
            </div>
          </div>
        </div>
        <section class="section_all bg_custom_color">
            <div class="container">
                <div class="row vertical_content_manage">
                    <div class="col-lg-6">
                        <div class="features_img mt-3">
                            <img src={Laptop} alt="" class="img-fluid mx-auto d-block"/>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="section_title_all">
                            <h3 class="text-white mt-3">15-days Delivery. Get Download Now.</h3>
                            <p class="section_subtitle mx-auto text-white mt-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                            <div class="mt-5">
                                <a href="#" class="learn-more">Download Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>        
      </div>      
    </div>
  );
};

export default HomeProducts;
