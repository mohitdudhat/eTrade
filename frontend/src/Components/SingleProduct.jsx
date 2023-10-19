import React, { useEffect, useRef } from "react";
import WooCommerce from "./WooCommerce";
import $ from "jquery"; // Import jQuery

export const SingleProduct = () => {
  const smallThumbRef = useRef(null);
  const largeThumbRef = useRef(null);

  useEffect(() => {
    // Initialize the small thumbnail slider
    $(".color-variant > li").on("click", function (e) {
      $(this).addClass("active").siblings().removeClass("active");
    });
    $(smallThumbRef.current).slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      focusOnSelect: true,
      vertical: true,
      speed: 800,
      draggable: false,
      swipe: false,
      asNavFor: largeThumbRef.current,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            vertical: false,
          },
        },
      ],
    });

    // Initialize the large thumbnail slider
    $(largeThumbRef.current).slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 800,
      draggable: false,
      swipe: false,
      asNavFor: smallThumbRef.current,
    });
  }, []);

  return (
    <div>
      <div className="axil-single-product-area axil-section-gap pb--0 bg-color-white">
        <div className="single-product-thumb mb--40">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 mb--40">
                <div className="row">
                  <div className="col-lg-10 order-lg-2">
                    <div className="single-product-thumbnail-wrap zoom-gallery">
                      <div
                        className="single-product-thumbnail product-large-thumbnail-3 axil-product"
                        ref={largeThumbRef}
                      >
                        <div className="thumbnail">
                          <a
                            href="assets/images/product/product-big-01.png"
                            className="popup-zoom"
                          >
                            <img
                              src="assets/images/product/product-big-01.png"
                              alt="Product Images"
                            />
                          </a>
                        </div>
                        <div className="thumbnail">
                          <a
                            href="assets/images/product/product-big-02.png"
                            className="popup-zoom"
                          >
                            <img
                              src="assets/images/product/product-big-02.png"
                              alt="Product Images"
                            />
                          </a>
                        </div>
                        <div className="thumbnail">
                          <a
                            href="assets/images/product/product-big-03.png"
                            className="popup-zoom"
                          >
                            <img
                              src="assets/images/product/product-big-03.png"
                              alt="Product Images"
                            />
                          </a>
                        </div>
                        <div className="thumbnail">
                          <a
                            href="assets/images/product/product-big-02.png"
                            className="popup-zoom"
                          >
                            <img
                              src="assets/images/product/product-big-02.png"
                              alt="Product Images"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="label-block">
                        <div className="product-badget">20% OFF</div>
                      </div>
                      <div className="product-quick-view position-view">
                        <a
                          href="assets/images/product/product-big-01.png"
                          className="popup-zoom"
                        >
                          <i className="far fa-search-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 order-lg-1">
                    <div
                      className="product-small-thumb-3 small-thumb-wrapper"
                      ref={smallThumbRef}
                    >
                      <div className="small-thumb-img">
                        <img
                          src="assets/images/product/product-thumb/thumb-08.png"
                          alt="thumb"
                        />
                      </div>
                      <div className="small-thumb-img">
                        <img
                          src="assets/images/product/product-thumb/thumb-07.png"
                          alt="thumb"
                        />
                      </div>
                      <div className="small-thumb-img">
                        <img
                          src="assets/images/product/product-thumb/thumb-09.png"
                          alt="thumb"
                        />
                      </div>
                      <div className="small-thumb-img">
                        <img
                          src="assets/images/product/product-thumb/thumb-07.png"
                          alt="thumb"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mb--40">
                <div className="single-product-content">
                  <div className="inner">
                    <h2 className="product-title">3D™ wireless headset</h2>
                    <span className="price-amount">$155.00 - $255.00</span>
                    <div className="product-rating">
                      <div className="star-rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <div className="review-link">
                        <a href="/">
                          (<span>2</span> customer reviews)
                        </a>
                      </div>
                    </div>
                    <ul className="product-meta">
                      <li>
                        <i className="fal fa-check"></i>In stock
                      </li>
                      <li>
                        <i className="fal fa-check"></i>Free delivery available
                      </li>
                      <li>
                        <i className="fal fa-check"></i>Sales 30% Off Use Code:
                        MOTIVE30
                      </li>
                    </ul>
                    <p className="description">
                      In ornare lorem ut est dapibus, ut tincidunt nisi pretium.
                      Integer ante est, elementum eget magna. Pellentesque
                      sagittis dictum libero, eu dignissim tellus.
                    </p>

                    <div className="product-variations-wrapper">
                      <div className="product-variation">
                        <h6 className="title">Colors:</h6>
                        <div className="color-variant-wrapper">
                          <ul className="color-variant">
                            <li className="color-extra-01 active">
                              <span>
                                <span className="color"></span>
                              </span>
                            </li>
                            <li className="color-extra-02">
                              <span>
                                <span className="color"></span>
                              </span>
                            </li>
                            <li className="color-extra-03">
                              <span>
                                <span className="color"></span>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="product-variation product-size-variation">
                        <h6 className="title">Size:</h6>
                        <ul className="range-variant">
                          <li>xs</li>
                          <li>s</li>
                          <li>m</li>
                          <li>l</li>
                          <li>xl</li>
                        </ul>
                      </div>
                    </div>

                    <div className="product-action-wrapper d-flex-center">
                      <div className="pro-qty">
                        <input type="text" defaultValue="1" />
                      </div>

                      <ul className="product-action d-flex-center mb--0">
                        <li className="add-to-cart">
                          <a
                            href="cart.html"
                            className="axil-btn btn-bg-primary"
                          >
                            Add to Cart
                          </a>
                        </li>
                        <li className="wishlist">
                          <a
                            href="wishlist.html"
                            className="axil-btn wishlist-btn"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WooCommerce />
      </div>
    </div>
  );
};

export default SingleProduct;
