import React from "react";

const products = [
  {
    id: 1,
    name: "Yantiti Leather & Canvas Bags",
    imageUrl: "assets/images/product/electric/product-01.png",
    price: 29.99,
    oldPrice: 49.99,
    rating: 5,
  },
  {
    id: 2,
    name: "Level 20 RGB Cherry",
    imageUrl: "assets/images/product/electric/product-02.png",
    price: 29.99,
    oldPrice: 49.99,
    rating: 4,
  },
  {
    id: 3,
    name: "Logitech Streamcam",
    imageUrl: "assets/images/product/electric/product-03.png",
    price: 29.99,
    oldPrice: 49.99,
    rating: 5,
  },
  {
    id: 4,
    name: "3D™ wireless headset",
    imageUrl: "assets/images/product/electric/product-04.png",
    price: 29.99,
    oldPrice: 49.99,
    rating: 5,
  },
  {
    id: 5,
    name: "Bass Meets Clarity",
    imageUrl: "assets/images/product/electric/product-05.png",
    price: 29.99,
    oldPrice: 49.99,
    rating: 5,
  },
  {
    id: 6,
    name: "Mice Logitech",
    imageUrl: "assets/images/product/electric/product-06.png",
    price: 29.99,
    oldPrice: 49.99,
    rating: 5,
  },
  {
    id: 7,
    name: "Zone Headphone",
    imageUrl: "assets/images/product/electric/product-07.png",
    price: 29.99,
    oldPrice: 49.99,
    rating: 5,
  },
  {
    id: 8,
    name: "3D™ wireless headset",
    imageUrl: "assets/images/product/electric/product-08.png",
    price: 29.99,
    oldPrice: 49.99,
    rating: 5,
  },
];

export const Explore = () => {
  return (
    <div className="axil-product-area bg-color-white axil-section-gap">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="title-highlighter highlighter-primary">
            <i className="far fa-shopping-basket"></i> Our Products
          </span>
          <h2 className="title">Explore our Products</h2>
        </div>
        <div className="explore-product-activation slick-layout-wrapper slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
          {/* <div className="slick-single-layout">  slick*/}
          <div>
            <div className="row row--15">
              {products.map((product) => (
                <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
                  <div className="axil-product product-style-one">
                    <div className="thumbnail">
                      <a href="single-product.html">
                        <img
                          data-sal="zoom-out"
                          data-sal-delay="200"
                          data-sal-duration="800"
                          loading="lazy"
                          className="main-img"
                          src={product.imageUrl}
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
                            <a href="single-product.html">Add to Cart</a>
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
                        <div className="product-rating">
                          <span className="icon">
                            {Array.from(
                              { length: product.rating },
                              (_, index) => (
                                <i key={index} className="fas fa-star"></i>
                              )
                            )}
                          </span>
                          <span className="rating-number">
                            ({product.rating})
                          </span>
                        </div>
                        <h5 className="title">
                          <a href="single-product.html">{product.name}</a>
                        </h5>
                        <div className="product-price-variant">
                          <span className="price current-price">
                            ${product.price}
                          </span>
                          <span className="price old-price">
                            ${product.oldPrice}
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
  );
};
