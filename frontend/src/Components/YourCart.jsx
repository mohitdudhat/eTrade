import React from "react";

export const YourCart = () => {
  return (
    <div className="axil-product-cart-area axil-section-gap">
      <div className="container">
        <div className="axil-product-cart-wrap">
          <div className="product-table-heading">
            <h4 className="title">Your Cart</h4>
            <a href="#" className="cart-clear">
              Clear Shopping Cart
            </a>
          </div>
          <div className="table-responsive">
            <table className="table axil-product-table axil-cart-table mb--40">
              <thead>
                <tr>
                  <th scope="col" className="product-remove"></th>
                  <th scope="col" className="product-thumbnail">
                    Product
                  </th>
                  <th scope="col" className="product-title"></th>
                  <th scope="col" className="product-price">
                    Price
                  </th>
                  <th scope="col" className="product-quantity">
                    Quantity
                  </th>
                  <th scope="col" className="product-subtotal">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="product-remove">
                    <a href="#" className="remove-wishlist">
                      <i className="fal fa-times"></i>
                    </a>
                  </td>
                  <td className="product-thumbnail">
                    <a href="single-product.html">
                      <img
                        src="assets/images/product/electric/product-01.png"
                        alt="Digital Product"
                      />
                    </a>
                  </td>
                  <td className="product-title">
                    <a href="single-product.html">Wireless PS Handler</a>
                  </td>
                  <td className="product-price" data-title="Price">
                    <span className="currency-symbol">$</span>124.00
                  </td>
                  <td className="product-quantity" data-title="Qty">
                    <div className="pro-qty">
                      <input
                        type="number"
                        className="quantity-input"
                        value="1"
                      />
                    </div>
                  </td>
                  <td className="product-subtotal" data-title="Subtotal">
                    <span className="currency-symbol">$</span>275.00
                  </td>
                </tr>
                <tr>
                  <td className="product-remove">
                    <a href="#" className="remove-wishlist">
                      <i className="fal fa-times"></i>
                    </a>
                  </td>
                  <td className="product-thumbnail">
                    <a href="single-product-2.html">
                      <img
                        src="assets/images/product/electric/product-02.png"
                        alt="Digital Product"
                      />
                    </a>
                  </td>
                  <td className="product-title">
                    <a href="single-product-2.html">Gradient Light Keyboard</a>
                  </td>
                  <td className="product-price" data-title="Price">
                    <span className="currency-symbol">$</span>124.00
                  </td>
                  <td className="product-quantity" data-title="Qty">
                    <div className="pro-qty">
                      <input
                        type="number"
                        className="quantity-input"
                        value="1"
                      />
                    </div>
                  </td>
                  <td className="product-subtotal" data-title="Subtotal">
                    <span className="currency-symbol">$</span>275.00
                  </td>
                </tr>
                <tr>
                  <td className="product-remove">
                    <a href="#" className="remove-wishlist">
                      <i className="fal fa-times"></i>
                    </a>
                  </td>
                  <td className="product-thumbnail">
                    <a href="single-product-3.html">
                      <img
                        src="assets/images/product/electric/product-03.png"
                        alt="Digital Product"
                      />
                    </a>
                  </td>
                  <td className="product-title">
                    <a href="single-product-3.html">HD CC Camera</a>
                  </td>
                  <td className="product-price" data-title="Price">
                    <span className="currency-symbol">$</span>124.00
                  </td>
                  <td className="product-quantity" data-title="Qty">
                    <div className="pro-qty">
                      <input
                        type="number"
                        className="quantity-input"
                        value="1"
                      />
                    </div>
                  </td>
                  <td className="product-subtotal" data-title="Subtotal">
                    <span className="currency-symbol">$</span>275.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="cart-update-btn-area">
            <div className="input-group product-cupon">
              <input placeholder="Enter coupon code" type="text" />
              <div className="product-cupon-btn">
                <button type="submit" className="axil-btn btn-outline">
                  Apply
                </button>
              </div>
            </div>
            <div className="update-btn">
              <a href="#" className="axil-btn btn-outline">
                Update Cart
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-5 col-lg-7 offset-xl-7 offset-lg-5">
              <div className="axil-order-summery mt--80">
                <h5 className="title mb--20">Order Summary</h5>
                <div className="summery-table-wrap">
                  <table className="table summery-table mb--30">
                    <tbody>
                      <tr className="order-subtotal">
                        <td>Subtotal</td>
                        <td>$117.00</td>
                      </tr>
                      <tr className="order-shipping">
                        <td>Shipping</td>
                        <td>
                          <div className="input-group">
                            <input
                              type="radio"
                              id="radio1"
                              name="shipping"
                              checked
                            />
                            <label htmlFor="radio1">Free Shipping</label>
                          </div>
                          <div className="input-group">
                            <input type="radio" id="radio2" name="shipping" />
                            <label htmlFor="radio2">Local: $35.00</label>
                          </div>
                          <div className="input-group">
                            <input type="radio" id="radio3" name="shipping" />
                            <label htmlFor="radio3">Flat rate: $12.00</label>
                          </div>
                        </td>
                      </tr>
                      <tr className="order-tax">
                        <td>State Tax</td>
                        <td>$8.00</td>
                      </tr>
                      <tr className="order-total">
                        <td>Total</td>
                        <td className="order-total-amount">$125.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a
                  href="checkout.html"
                  className="axil-btn btn-bg-primary checkout-btn"
                >
                  Process to Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
