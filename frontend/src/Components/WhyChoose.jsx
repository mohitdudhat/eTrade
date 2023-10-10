import React from "react";

export const WhyChoose = () => {
  return (
    <div className="axil-why-choose-area pb--50 pb_sm--30">
      <div className="container">
        <div className="section-title-wrapper section-title-center">
          <span className="title-highlighter highlighter-secondary">
            <i className="fal fa-thumbs-up"></i>Why Us
          </span>
          <h2 className="title">Why People Choose Us</h2>
        </div>
        <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 row--20">
          <div className="col">
            <div className="service-box">
              <div className="icon">
                <img src="assets/images/icons/service6.png" alt="Service" />
              </div>
              <h6 className="title">Fast &amp; Secure Delivery</h6>
            </div>
          </div>
          <div className="col">
            <div className="service-box">
              <div className="icon">
                <img src="assets/images/icons/service7.png" alt="Service" />
              </div>
              <h6 className="title">100% Guarantee On Product</h6>
            </div>
          </div>
          <div className="col">
            <div className="service-box">
              <div className="icon">
                <img src="assets/images/icons/service8.png" alt="Service" />
              </div>
              <h6 className="title">24 Hour Return Policy</h6>
            </div>
          </div>
          <div className="col">
            <div className="service-box">
              <div className="icon">
                <img src="assets/images/icons/service9.png" alt="Service" />
              </div>
              <h6 className="title">24 Hour Return Policy</h6>
            </div>
          </div>
          <div className="col">
            <div className="service-box">
              <div className="icon">
                <img src="assets/images/icons/service10.png" alt="Service" />
              </div>
              <h6 className="title">Next Level Pro Quality</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
