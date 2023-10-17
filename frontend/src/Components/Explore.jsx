import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    name: "Yantiti Leather & Canvas Bags",
    mainImgSrc: "assets/images/product/electric/product-01.png",
    hoverImgSrc: "assets/images/product/electric/product-01.png",
    discount: "20% Off",
    price: {
      current: "$29.99",
      old: "$49.99",
    },
  },
  {
    id: 2,
    name: "Level 20 RGB Cherry",
    mainImgSrc: "assets/images/product/electric/product-02.png",
    hoverImgSrc: "assets/images/product/electric/product-02.png",
    price: {
      current: "$29.99",
      old: "$49.99",
    },
  },
  {
    id: 3,
    name: "Logitech Streamcam",
    mainImgSrc: "assets/images/product/electric/product-03.png",
    hoverImgSrc: "assets/images/product/electric/product-03.png",
    discount: "20% Off",
    price: {
      current: "$29.99",
      old: "$49.99",
    },
  },
  {
    id: 4,
    name: "3D™ wireless headset",
    mainImgSrc: "assets/images/product/electric/product-04.png",
    hoverImgSrc: "assets/images/product/electric/product-04.png",
    price: {
      current: "$29.99",
      old: "$49.99",
    },
  },
  {
    id: 5,
    name: "Bass Meets Clarity",
    mainImgSrc: "assets/images/product/electric/product-05.png",
    hoverImgSrc: "assets/images/product/electric/product-05.png",
    discount: "20% Off",
    price: {
      current: "$29.99",
      old: "$49.99",
    },
  },
  {
    id: 6,
    name: "Mice Logitech",
    mainImgSrc: "assets/images/product/electric/product-06.png",
    hoverImgSrc: "assets/images/product/electric/product-06.png",
    discount: "20% Off",
    price: {
      current: "$29.99",
      old: "$49.99",
    },
  },
  {
    id: 7,
    name: "Zone Headphone",
    mainImgSrc: "assets/images/product/electric/product-07.png",
    hoverImgSrc: "assets/images/product/electric/product-07.png",
    discount: "20% Off",
    price: {
      current: "$29.99",
      old: "$49.99",
    },
  },
  {
    id: 8,
    name: "3D™ wireless headset",
    mainImgSrc: "assets/images/product/electric/product-08.png",
    hoverImgSrc: "assets/images/product/electric/product-08.png",
    price: {
      current: "$29.99",
      old: "$49.99",
    },
  },
];

export const Explore = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };

  return (
    <div className="axil-product-area bg-color-white axil-section-gap">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="title-highlighter highlighter-primary">
            <i className="far fa-shopping-basket"></i> Our Products
          </span>
          <h2 className="title">Explore our Products</h2>
        </div>
        <Slider
          className="explore-product-activation slick-layout-wrapper slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide"
          {...settings}
        >
          <div className="slick-single-layout" style={{ Width: "100%" }}>
            <div className="row row--15">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30"
                >
                  <div className="axil-product product-style-one">
                    <div className="thumbnail">
                      <a href="single-product.html">
                        <img
                          data-sal="zoom-out"
                          data-sal-delay="200"
                          data-sal-duration="800"
                          loading="lazy"
                          className="main-img"
                          src={product.mainImgSrc}
                          alt="Product Images"
                        />
                        <img
                          className="hover-img"
                          src={product.hoverImgSrc}
                          alt="Product Images"
                        />
                      </a>
                      {product.discount && (
                        <div className="label-block label-right">
                          <div className="product-badget">
                            {product.discount}
                          </div>
                        </div>
                      )}
                      <div className="product-hover-action">
                        <ul className="cart-action">
                          <li className="quickview">
                            <Link
                              to="/"
                              data-bs-toggle="modal"
                              data-bs-target="#quick-view-modal"
                            >
                              <i className="far fa-eye"></i>
                            </Link>
                          </li>
                          <li className="select-option">
                            <a href="single-product.html">Select Option</a>
                          </li>
                          <li className="wishlist">
                            <a href="wishlist.html">
                              <i className="far fa-heart"></i>
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
                          <span className="price current-price">
                            {product.price.current}
                          </span>
                          {product.price.old && (
                            <span className="price old-price">
                              {product.price.old}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Slider>
        <div className="row">
          <div className="col-lg-12 text-center mt--20 mt_sm--0">
            <a
              href="shop.html"
              className="axil-btn btn-bg-lighter btn-load-more"
            >
              View All Products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
