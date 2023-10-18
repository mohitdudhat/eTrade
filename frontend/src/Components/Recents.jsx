import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const products = [
  {
    id: 1,
    name: "3D™ wireless headset",
    image: "assets/images/product/electric/product-01.png",
    oldPrice: "$30",
    currentPrice: "$30",
    discount: "20% OFF",
  },
  {
    id: 2,
    name: "Media remote",
    image: "assets/images/product/electric/product-02.png",
    oldPrice: "$80",
    currentPrice: "$50",
    discount: "40% OFF",
  },
  {
    id: 3,
    name: "HD camera",
    image: "assets/images/product/electric/product-03.png",
    oldPrice: "$60",
    currentPrice: "$45",
    discount: "30% OFF",
  },
  {
    id: 4,
    name: "PS Remote Control",
    image: "assets/images/product/electric/product-04.png",
    oldPrice: "$70",
    currentPrice: "$35",
    discount: "50% OFF",
  },
  {
    id: 5,
    name: "PS5 Remote Control",
    image: "assets/images/product/electric/product-05.png",
    oldPrice: "$50",
    currentPrice: "$38",
    discount: "25% OFF",
  },
];

export const Recents = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="axil-product-area bg-color-white axil-section-gap pb--50 pb_sm--30">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="title-highlighter highlighter-primary">
            <i className="far fa-shopping-basket"></i> Your Recently
          </span>
          <h2 className="title">Viewed Items</h2>
        </div>
        <div className="recent-product-activation slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
          <Slider {...settings}>
            {products.map((product) => (
              <div className="slick-single-layout" key={product.id}>
                <div className="axil-product">
                  <div className="thumbnail">
                    <a href="single-product.html">
                      <img src={product.image} alt="Product Images" />
                    </a>
                    <div className="label-block label-right">
                      <div className="product-badget">{product.discount}</div>
                    </div>
                    <div className="product-hover-action">
                      <ul className="cart-action">
                        <li className="wishlist">
                          <a href="wishlist.html">
                            <i className="far fa-heart"></i>
                          </a>
                        </li>
                        <li className="select-option">
                          <a href="cart.html">Add to Cart</a>
                        </li>
                        <li className="quickview">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#quick-view-modal"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="inner">
                      <h5 className="title">
                        <a href="single-product.html">{product.name}</a>
                      </h5>
                      <div className="product-price-variant">
                        <span className="price old-price">
                          {product.oldPrice}
                        </span>
                        <span className="price current-price">
                          {product.currentPrice}
                        </span>
                      </div>
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
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
