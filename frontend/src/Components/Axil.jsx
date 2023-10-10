import React from "react";
import { Link } from "react-router-dom";

export const Axil = () => {
  return (
    <div className="axil-poster">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb--30">
            <div className="single-poster">
              <Link href="shop.html">
                <img
                  src="assets/images/product/poster/poster-01.png"
                  alt="eTrade promotion poster"
                />
                <div className="poster-content">
                  <div className="inner">
                    <h3 className="title">
                      Rich sound, <br />
                      for less.
                    </h3>
                    <span className="sub-title">
                      Collections <i className="fal fa-long-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 mb--30">
            <div className="single-poster">
              <Link href="shop-sidebar.html">
                <img
                  src="assets/images/product/poster/poster-02.png"
                  alt="eTrade promotion poster"
                />
                <div className="poster-content content-left">
                  <div className="inner">
                    <span className="sub-title">50% Offer In Winter</span>
                    <h3 className="title">
                      Get VR <br />
                      Reality Glass
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
