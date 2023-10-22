import React, { useEffect, useState } from "react";
import axios from "axios";
import Sal from "sal.js";
import "sal.js/dist/sal.css";
export const Explore = () => {
  const [productData, setProductData] = useState([]);
  Sal();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products`)
      .then((response) => {
        console.log(response.data);
        setProductData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    console.log(productData);
  }, []);

  return (
    productData && (
      <div className="axil-product-area bg-color-white axil-section-gap">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="title-highlighter highlighter-primary">
              <i className="far fa-shopping-basket"></i> Our Products
            </span>
            <h2 className="title">Explore our Products</h2>
          </div>
          <div className="explore-product-activation slick-layout-wrapper wsslick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
            <div>
              <div className="row row--15">
                {productData.map((product) => (
                  <div
                    className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30"
                    key={product.id}
                  >
                    <div className="axil-product product-style-one">
                      <div className="thumbnail">
                        <a href={`single-product.html/${product.id}`}>
                          <img
                            data-sal="zoom-out"
                            data-sal-delay="200"
                            data-sal-duration="800"
                            loading="lazy"
                            className="main-img"
                            src={product.thumbnail}
                            alt="Product Images"
                          />
                        </a>
                        <div className="label-block label-right">
                          <div className="product-badget">20% Off</div>
                        </div>
                        <div className="product-hover-action">
                          <ul className="cart-action">
                            <li className="quickview">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view-modal"
                              >
                                <i className="far fa-eye"></i>
                              </a>
                            </li>
                            <li className="select-option">
                              <a href={`cart.html?id=${product.id}`}>
                                Add to Cart
                              </a>
                            </li>
                            <li className="wishlist">
                              <a href={`wishlist.html?id=${product.id}`}>
                                <i className="far fa-heart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="inner">
                          <div className="product-rating">
                            <span className="icon">
                              {Array.from(
                                { length: product.productRating },
                                (_, index) => (
                                  <i key={index} className="fas fa-star"></i>
                                )
                              )}
                            </span>
                            <span className="rating-number">
                              ({product.totalReviews})
                            </span>
                          </div>
                          <h5 className="title">
                            <a href="single-product.html">
                              {product.productTitle}
                            </a>
                          </h5>
                          <div className="product-price-variant">
                            <span className="price current-price">
                              {product.price}
                            </span>
                            <span className="price old-price">
                              {product.oldPrice}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
    )
  );
};
