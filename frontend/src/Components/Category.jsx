import React from "react";
import { Link } from "react-router-dom";

export const Category = () => {
  return (
    <div className="axil-categorie-area bg-color-white axil-section-gapcommon">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="title-highlighter highlighter-secondary">
            <i className="far fa-tags"></i> Categories
          </span>
          <h2 className="title">Browse by Category</h2>
        </div>
        <div className="categrie-product-activation slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
          <div className="slick-single-layout">
            <div
              className="categrie-product"
              data-sal="zoom-out"
              data-sal-delay="200"
              data-sal-duration="500"
            >
              <Link to="/">
                <img
                  className="img-fluid"
                  src="/assets/images/product/categories/elec-4.png"
                  alt="product categorie"
                />
                <h6 className="cat-title">Phones</h6>
              </Link>
            </div>
          </div>
          <div className="slick-single-layout">
            <div
              className="categrie-product"
              data-sal="zoom-out"
              data-sal-delay="300"
              data-sal-duration="500"
            >
              <Link to="/">
                <img
                  className="img-fluid"
                  src="/assets/images/product/categories/elec-5.png"
                  alt="product categorie"
                />
                <h6 className="cat-title">Computers</h6>
              </Link>
            </div>
          </div>
          <div className="slick-single-layout">
            <div
              className="categrie-product"
              data-sal="zoom-out"
              data-sal-delay="400"
              data-sal-duration="500"
            >
              <Link to="/">
                <img
                  className="img-fluid"
                  src="/assets/images/product/categories/elec-11.png"
                  alt="product categorie"
                />
                <h6 className="cat-title">Accessories</h6>
              </Link>
            </div>
          </div>
          <div className="slick-single-layout">
            <div
              className="categrie-product"
              data-sal="zoom-out"
              data-sal-delay="500"
              data-sal-duration="500"
            >
              <Link to="/">
                <img
                  className="img-fluid"
                  src="/assets/images/product/categories/elec-6.png"
                  alt="product categorie"
                />
                <h6 className="cat-title">Laptops</h6>
              </Link>
            </div>
          </div>
          <div className="slick-single-layout">
            <div
              className="categrie-product"
              data-sal="zoom-out"
              data-sal-delay="600"
              data-sal-duration="500"
            >
              <Link to="/">
                <img
                  className="img-fluid"
                  src="/assets/images/product/categories/elec-2.png"
                  alt="product categorie"
                />
                <h6 className="cat-title">Monitors</h6>
              </Link>
            </div>
          </div>
          <div className="slick-single-layout">
            <div
              className="categrie-product"
              data-sal="zoom-out"
              data-sal-delay="700"
              data-sal-duration="500"
            >
              <Link to="/">
                <img
                  className="img-fluid"
                  src="/assets/images/product/categories/elec-7.png"
                  alt="product categorie"
                />
                <h6 className="cat-title">Networking</h6>
              </Link>
            </div>
          </div>
          <div className="slick-single-layout">
            <div
              className="categrie-product"
              data-sal="zoom-out"
              data-sal-delay="800"
              data-sal-duration="500"
            >
              <Link to="/">
                <img
                  className="img-fluid"
                  src="/assets/images/product/categories/elec-8.png"
                  alt="product categorie"
                />
                <h6 className="cat-title">PC Gaming</h6>
              </Link>
            </div>
          </div>
          <div className="slick-single-layout">
            <div className="categrie-product">
              <Link to="/">
                <img
                  className="img-fluid"
                  src="/assets/images/product/categories/elec-1.png"
                  alt="product categorie"
                />
                <h6 className="cat-title">Smartwatches</h6>
              </Link>
            </div>
          </div>
          <div className="slick-single-layout">
            <div className="categrie-product">
              <Link to="/">
                <img
                  className="img-fluid"
                  src="/assets/images/product/categories/elec-9.png"
                  alt="product categorie"
                />
                <h6 className="cat-title">Headphones</h6>
              </Link>
            </div>
          </div>
          <div className="slick-single-layout">
            <div className="categrie-product">
              <Link to="/">
                <img
                  className="img-fluid"
                  src="/assets/images/product/categories/elec-10.png"
                  alt="product categorie"
                />
                <h6 className="cat-title">Camera & Photo</h6>
              </Link>
            </div>
          </div>
          <div className="slick-single-layout">
            <div className="categrie-product">
              <Link to="/">
                <img
                  className="img-fluid"
                  src="/assets/images/product/categories/elec-8.png"
                  alt="product categorie"
                />
                <h6 className="cat-title">Video Games</h6>
              </Link>
            </div>
          </div>
          <div className="slick-single-layout">
            <div className="categrie-product">
              <Link to="/">
                <img
                  className="img-fluid"
                  src="/assets/images/product/categories/elec-1.png"
                  alt="product categorie"
                />
                <h6 className="cat-title">Sports</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
