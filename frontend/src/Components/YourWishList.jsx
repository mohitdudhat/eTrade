import React, { useState } from "react";

export const YourWishList = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Wireless PS Handler",
      price: 124.0,
      stockStatus: "In Stock",
    },
    {
      id: 2,
      name: "Gradient Light Keyboard",
      price: 124.0,
      stockStatus: "In Stock",
    },
    {
      id: 3,
      name: "HD CC Camera",
      price: 124.0,
      stockStatus: "In Stock",
    },
  ]);

  return (
    <div className="axil-wishlist-area axil-section-gap">
      <div className="container">
        <div className="product-table-heading">
          <h4 className="title">My Wish List on eTrade</h4>
        </div>
        <div className="table-responsive">
          <table className="table axil-product-table axil-wishlist-table">
            <thead>
              <tr>
                <th scope="col" className="product-remove"></th>
                <th scope="col" className="product-thumbnail">
                  Product
                </th>
                <th scope="col" className="product-title"></th>
                <th scope="col" className="product-price">
                  Unit Price
                </th>
                <th scope="col" className="product-stock-status">
                  Stock Status
                </th>
                <th scope="col" className="product-add-cart"></th>
              </tr>
            </thead>
            <tbody>
              {wishlistItems.map((item) => (
                <tr key={item.id}>
                  <td className="product-remove">
                    <a href="#" className="remove-wishlist">
                      <i className="fal fa-times"></i>
                    </a>
                  </td>
                  <td className="product-thumbnail">
                    <a href={`single-product-${item.id}.html`}>
                      <img
                        src={`assets/images/product/electric/product-0${item.id}.png`}
                        alt="Digital Product"
                      />
                    </a>
                  </td>
                  <td className="product-title">
                    <a href={`single-product-${item.id}.html`}>{item.name}</a>
                  </td>
                  <td className="product-price" data-title="Price">
                    <span className="currency-symbol">$</span>
                    {item.price.toFixed(2)}
                  </td>
                  <td className="product-stock-status" data-title="Status">
                    {item.stockStatus}
                  </td>
                  <td className="product-add-cart">
                    <a href="cart.html" className="axil-btn btn-outline">
                      Add to Cart
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
