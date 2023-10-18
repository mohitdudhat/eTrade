import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export const Arrival = () => {
  const products = [
    {
      id: 1,
      name: "Demon's Souls",
      oldPrice: 40,
      currentPrice: 30,
      discount: 10,
      imageSrc: "assets/images/product/electric/product-05.png",
    },
    {
      id: 2,
      name: "Google Home",
      oldPrice: 50,
      currentPrice: 40,
      imageSrc: "assets/images/product/electric/product-06.png",
    },
    {
      id: 3,
      name: "Netflix Remote",
      oldPrice: 60,
      currentPrice: 45,
      discount: 15,
      imageSrc: "assets/images/product/electric/product-07.png",
    },
    {
      id: 4,
      name: "Digital Accessories",
      oldPrice: 30,
      currentPrice: 20,
      discount: 30,
      imageSrc: "assets/images/product/electric/product-08.png",
    },
    {
      id: 5,
      name: "PS5 Smart Remote",
      oldPrice: 50,
      currentPrice: 25,
      discount: 50,
      imageSrc: "assets/images/product/electric/product-04.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Set the number of slides to show
    slidesToScroll: 1,
  };

  return (
    <div className="axil-new-arrivals-product-area bg-color-white axil-section-gap pb--0">
      <div className="container">
        <div className="product-area pb--50">
          <div className="section-title-wrapper">
            <span className="title-highlighter highlighter-primary">
              <i className="far fa-shopping-basket"></i>This Week’s
            </span>
            <h2 className="title">New Arrivals</h2>
          </div>
          <div className="new-arrivals-product-activation slick-layout-wrapper--30 axil-slick-arrow arrow-top-slide">
            <Slider {...settings}>
              {products.map((product) => (
                <div className="slick-single-layout" key={product.id}>
                  <div className="axil-product product-style-two">
                    <div className="thumbnail">
                      <Link to="single-product.html">
                        <img
                          data-sal="zoom-out"
                          data-sal-delay="200"
                          data-sal-duration="500"
                          src={product.imageSrc}
                          alt="Product Images"
                        />
                      </Link>
                      {product.discount && (
                        <div className="label-block label-right">
                          <div className="product-badget">
                            {product.discount}% OFF
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="product-content">
                      <div className="inner">
                        <h5 className="title">
                          <Link to="single-product.html">{product.name}</Link>
                        </h5>
                        <div className="product-price-variant">
                          {product.oldPrice && (
                            <span className="price old-price">
                              ${product.oldPrice}
                            </span>
                          )}
                          <span className="price current-price">
                            ${product.currentPrice}
                          </span>
                        </div>
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
                              <Link to="single-product.html">Add to Cart</Link>
                            </li>
                            <li className="wishlist">
                              <Link to="wishlist.html">
                                <i className="far fa-heart"></i>
                              </Link>
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
    </div>
  );
};
