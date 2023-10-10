import React from "react";
import { Link } from "react-router-dom";

export const SearchModal = () => {
  return (
    <div className="header-search-modal" id="header-search-modal">
      <button className="card-close sidebar-close">
        <i className="fas fa-times"></i>
      </button>
      <div className="header-search-wrap">
        <div className="card-header">
          <form action="#">
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                name="prod-search"
                id="prod-search"
                placeholder="Write Something...."
              />
              <button type="submit" className="axil-btn btn-bg-primary">
                <i className="far fa-search"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="card-body">
          <div className="search-result-header">
            <h6 className="title">24 Result Found</h6>
            <Link href="shop.html" className="view-all">
              View All
            </Link>
          </div>
          <div className="psearch-results">
            <div className="axil-product-list">
              <div className="thumbnail">
                <Link href="single-product.html">
                  <img
                    src="assets/images/product/electric/product-09.png"
                    alt="Yantiti Leather Bags"
                  />
                </Link>
              </div>
              <div className="product-content">
                <div className="product-rating">
                  <span className="rating-icon">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fal fa-star"></i>
                  </span>
                  <span className="rating-number">
                    <span>100+</span> Reviews
                  </span>
                </div>
                <h6 className="product-title">
                  <Link href="single-product.html">Media Remote</Link>
                </h6>
                <div className="product-price-variant">
                  <span className="price current-price">$29.99</span>
                  <span className="price old-price">$49.99</span>
                </div>
                <div className="product-cart">
                  <Link href="cart.html" className="cart-btn">
                    <i className="fal fa-shopping-cart"></i>
                  </Link>
                  <Link href="wishlist.html" className="cart-btn">
                    <i className="fal fa-heart"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="axil-product-list">
              <div className="thumbnail">
                <Link href="single-product.html">
                  <img
                    src="assets/images/product/electric/product-09.png"
                    alt="Yantiti Leather Bags"
                  />
                </Link>
              </div>
              <div className="product-content">
                <div className="product-rating">
                  <span className="rating-icon">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fal fa-star"></i>
                  </span>
                  <span className="rating-number">
                    <span>100+</span> Reviews
                  </span>
                </div>
                <h6 className="product-title">
                  <Link href="single-product.html">Media Remote</Link>
                </h6>
                <div className="product-price-variant">
                  <span className="price current-price">$29.99</span>
                  <span className="price old-price">$49.99</span>
                </div>
                <div className="product-cart">
                  <Link href="cart.html" className="cart-btn">
                    <i className="fal fa-shopping-cart"></i>
                  </Link>
                  <Link href="wishlist.html" className="cart-btn">
                    <i className="fal fa-heart"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
