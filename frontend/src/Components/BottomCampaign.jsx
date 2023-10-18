import React from "react";
import Slider from "react-slick";

export const BottomCampaign = () => {
  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="header-top-campaign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-10">
            <Slider {...settings}>
              <div className="slick-slide">
                <div className="campaign-content">
                  <p>
                    STUDENT NOW GET 10% OFF : <a href="/">GET OFFER</a>
                  </p>
                </div>
              </div>
              <div className="slick-slide">
                <div className="campaign-content">
                  <p>
                    STUDENT NOW GET 10% OFF : <a href="/">GET OFFER</a>
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
