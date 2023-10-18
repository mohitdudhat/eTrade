import React from "react";
import { Link } from "react-router-dom";

export const Trending = () => {
const products = [
  {
    id: 1,
    name: "Media Remote",
    imageSrc: "assets/images/product/electric/product-09.png",
    rating: 4,
    reviews: 100,
    currentPrice: 29.99,
    oldPrice: 49.99,
  },
  {
    id: 2,
    name: "HD Camera",
    imageSrc: "assets/images/product/electric/product-10.png",
    rating: 4,
    reviews: 50,
    currentPrice: 49.99,
  },
  {
    id: 3,
    name: "Gaming Controller",
    imageSrc: "assets/images/product/electric/product-11.png",
    rating: 4,
    reviews: 120,
    currentPrice: 50.0,
  },
  {
    id: 4,
    name: "Wall Mount",
    imageSrc: "assets/images/product/electric/product-12.png",
    rating: 4,
    reviews: 30,
    currentPrice: 19.0,
  },
  {
    id: 5,
    name: "Lenevo Laptop",
    imageSrc: "assets/images/product/electric/product-13.png",
    rating: 4,
    reviews: 700,
    currentPrice: 999.99,
  },
  {
    id: 6,
    name: "Juice Grinder Machine",
    imageSrc: "assets/images/product/electric/product-14.png",
    rating: 4,
    reviews: 300,
    currentPrice: 99.0,
  },
  {
    id: 7,
    name: "Wireless Headphone",
    imageSrc: "assets/images/product/electric/product-15.png",
    rating: 4,
    reviews: 100,
    currentPrice: 59.99,
  },
  {
    id: 8,
    name: "Asus Zenbook Laptop",
    imageSrc: "assets/images/product/electric/product-16.png",
    rating: 4,
    reviews: 100,
    currentPrice: 899.0,
  },
];


  return (
    <div className="axil-most-sold-product axil-section-gap">
      <div className="container">
        <div className="product-area pb--50">
          <div className="section-title-wrapper section-title-center">
            <span className="title-highlighter highlighter-primary">
              <i className="fas fa-star"></i> Most Sold
            </span>
            <h2 className="title">Most Sold in eTrade Store</h2>
          </div>
          <div className="row row-cols-xl-2 row-cols-1 row--15">
            {products.map((product) => (
              <div className="col" key={product.id}>
                <div className="axil-product-list">
                  <div className="thumbnail">
                    <Link to="single-product.html">
                      <img
                        data-sal="zoom-in"
                        data-sal-delay="100"
                        data-sal-duration="1500"
                        src={product.imageSrc}
                        alt={product.name}
                      />
                    </Link>
                  </div>
                  <div className="product-content">
                    <div className="product-rating">
                      <span className="rating-icon">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <i
                            key={star}
                            className={`fas fa-star${
                              star <= product.rating ? "" : "-half"
                            }`}
                          ></i>
                        ))}
                      </span>
                      <span className="rating-number">
                        <span>{product.reviews}+ Reviews</span>
                      </span>
                    </div>
                    <h6 className="product-title">
                      <Link to="single-product.html">{product.name}</Link>
                    </h6>
                    <div className="product-price-variant">
                      <span className="price current-price">
                        ${product.currentPrice}
                      </span>
                      {product.oldPrice && (
                        <span className="price old-price">
                          ${product.oldPrice}
                        </span>
                      )}
                    </div>
                    <div className="product-cart">
                      <Link to="cart.html" className="cart-btn">
                        <i className="fal fa-shopping-cart"></i>
                      </Link>
                      <Link to="wishlist.html" className="cart-btn">
                        <i className="fal fa-heart"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
