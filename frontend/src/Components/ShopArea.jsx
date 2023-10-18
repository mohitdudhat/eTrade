import React from "react";

const products = [
  {
    id: 1,
    name: "3D™ wireless headset",
    image: "assets/images/product/electric/product-01.png",
    price: 30,
    oldPrice: 30,
  },
  {
    id: 2,
    name: "Media remote",
    image: "assets/images/product/electric/product-02.png",
    price: 40,
    oldPrice: 50,
  },
  {
    id: 3,
    name: "HD camera",
    image: "assets/images/product/electric/product-03.png",
    price: 45,
    oldPrice: 60,
  },
  {
    id: 4,
    name: "Guys Bomber Jacket",
    image: "assets/images/product/electric/product-04.png",
    price: 70,
    oldPrice: 100,
  },
  {
    id: 5,
    name: "Level 20 RGB Cherry",
    image: "assets/images/product/electric/product-05.png",
    price: 38,
    oldPrice: 50,
  },
  {
    id: 6,
    name: "Level 20 RGB Cherry",
    image: "assets/images/product/electric/product-06.png",
    price: 25,
    oldPrice: 40,
  },
  {
    id: 7,
    name: "Logitech Streamcam",
    image: "assets/images/product/electric/product-07.png",
    price: 15,
    oldPrice: 20,
  },
  {
    id: 8,
    name: "Bass Meets Clarity",
    image: "assets/images/product/electric/product-08.png",
    price: 60,
    oldPrice: 80,
  },
  {
    id: 9,
    name: "Wall Mount",
    image: "assets/images/product/fashion/product-9.png",
    price: 30,
    oldPrice: 30,
  },
  {
    id: 10,
    name: "MX Master 3",
    image: "assets/images/product/fashion/product-10.png",
    price: 40,
    oldPrice: 50,
  },
  {
    id: 11,
    name: "Zone Headphone",
    image: "assets/images/product/fashion/product-11.png",
    price: 45,
    oldPrice: 60,
  },
  {
    id: 12,
    name: "Mice Logitech",
    image: "assets/images/product/fashion/product-12.png",
    price: 70,
    oldPrice: 100,
  },
];

export const ShopArea = () => {
  return (
    <div className="axil-shop-area axil-section-gap bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="axil-shop-top">
              <div className="row">
                <div className="col-lg-9">
                  <div className="category-select">
                    <select className="single-select">
                      <option>Categories</option>
                      <option>Fashion</option>
                      <option>Electronics</option>
                      <option>Furniture</option>
                      <option>Beauty</option>
                    </select>
                    <select className="single-select">
                      <option>Color</option>
                      <option>Red</option>
                      <option>Blue</option>
                      <option>Green</option>
                      <option>Pink</option>
                    </select>
                    <select className="single-select">
                      <option>Price Range</option>
                      <option>0 - 100</option>
                      <option>100 - 500</option>
                      <option>500 - 1000</option>
                      <option>1000 - 1500</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="category-select mt_md--10 mt_sm--10 justify-content-lg-end">
                    <select className="single-select">
                      <option>Sort by Latest</option>
                      <option>Sort by Name</option>
                      <option>Sort by Price</option>
                      <option>Sort by Viewed</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row--15">
          {products.map((product) => (
            <div key={product.id} className="col-xl-3 col-lg-4 col-sm-6">
              <div className="axil-product product-style-one has-color-pick mt--40">
                <div className="thumbnail">
                  <a href="single-product.html">
                    <img src={product.image} alt="Product Images" />
                  </a>
                  <div className="label-block label-right">
                    <div className="product-badget">20% OFF</div>
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
                          href="/"
                          data-bs-toggle="modal"
                          data-bs-target="/quick-view-modal"
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
                      <span className="price current-price">
                        ${product.price}
                      </span>
                      <span className="price old-price">
                        ${product.oldPrice}
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
        </div>
        <div className="text-center pt--30">
          <a href="/" className="axil-btn btn-bg-lighter btn-load-more">
            Load more
          </a>
        </div>
      </div>
    </div>
  );
};
