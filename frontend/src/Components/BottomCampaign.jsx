import React, { useEffect } from "react";
import { salActivation } from ".";
import $ from "jquery";
export const BottomCampaign = () => {
  useEffect(()=>{
    salActivation();
    $(".header-campaign-activation").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: true,
      prevArrow:
        '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
      nextArrow:
        '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
    });
  },[])
  return (
    <div className="header-top-campaign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-10">
            <div className="header-campaign-activation axil-slick-arrow arrow-both-side header-campaign-arrow">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
