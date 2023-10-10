import React from "react";
import { Link } from "react-router-dom";

export const Poster = () => {
  return (
    <div className="axil-poster-countdown">
      <div className="container">
        <div className="poster-countdown-wrap bg-lighter">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="poster-countdown-content">
                <div className="section-title-wrapper">
                  <span className="title-highlighter highlighter-secondary">
                    <i className="fal fa-headphones-alt"></i> Don’t Miss!!
                  </span>
                  <h2 className="title">Enhance Your Music Experience</h2>
                </div>
                <div className="poster-countdown countdown mb--40"></div>
                <Link to="/" className="axil-btn btn-bg-primary">
                  Check it Out!
                </Link>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="poster-countdown-thumbnail">
                <img
                  src="assets/images/product/poster/poster-03.png"
                  alt="Poster Product"
                />
                <div className="music-singnal">
                  <div className="item-circle circle-1"></div>
                  <div className="item-circle circle-2"></div>
                  <div className="item-circle circle-3"></div>
                  <div className="item-circle circle-4"></div>
                  <div className="item-circle circle-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
