import React from "react";

const Header = () => {
  return (
    <header className="header axil-header header-style-5">
      <div className="axil-header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 col-12">
              <div className="header-top-dropdown">
                <div className="dropdown">
                  <button
                    className="dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    English
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Arabic
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Spanish
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button
                    className="dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    USD
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        USD
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        AUD
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        EUR
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-12">
              <div className="header-top-link">
                <ul className="quick-link">
                  <li>
                    <a href="/">Help</a>
                  </li>
                  <li>
                    <a href="sign-up.html">Join Us</a>
                  </li>
                  <li>
                    <a href="sign-in.html">Sign In</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Mainmenu Area */}
      <div id="axil-sticky-placeholder"></div>
      <div className="axil-mainmenu">
        <div className="container">
          <div className="header-navbar">
            <div className="header-brand">
              <a href="index.html" className="logo logo-dark">
                <img src="assets/images/logo/logo.png" alt="Site Logo" />
              </a>
              <a href="index.html" className="logo logo-light">
                <img src="assets/images/logo/logo-light.png" alt="Site Logo" />
              </a>
            </div>
            <div className="header-main-nav">
              {/* Start Mainmanu Nav */}
              <nav className="mainmenu-nav">
                <button className="mobile-close-btn mobile-nav-toggler">
                  <i className="fas fa-times"></i>
                </button>
                <div className="mobile-nav-brand">
                  <a href="index.html" className="logo">
                    <img src="assets/images/logo/logo.png" alt="Site Logo" />
                  </a>
                </div>
                <ul className="mainmenu">
                  <li className="menu-item-has-children">
                    <a href="/">Home</a>
                    <ul className="axil-submenu">
                      <li>
                        <a href="index-1.html">Home - Electronics</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home - NFT</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home - Fashion</a>
                      </li>
                      <li>
                        <a href="index-4.html">Home - Jewellery</a>
                      </li>
                      <li>
                        <a href="index-5.html">Home - Furniture</a>
                      </li>
                      <li>
                        <a href="index-7.html">Home - Multipurpose</a>
                      </li>
                      <li>
                        <a href="https://new.axilthemes.com/demo/template/etrade-rtl/">
                          RTL Version
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="/">Shop</a>
                    <ul className="axil-submenu">
                      <li>
                        <a href="shop-sidebar.html">Shop With Sidebar</a>
                      </li>
                      <li>
                        <a href="shop.html">Shop no Sidebar</a>
                      </li>
                      <li>
                        <a href="single-product.html">Product Variation 1</a>
                      </li>
                      <li>
                        <a href="single-product-2.html">Product Variation 2</a>
                      </li>
                      <li>
                        <a href="single-product-3.html">Product Variation 3</a>
                      </li>
                      <li>
                        <a href="single-product-4.html">Product Variation 4</a>
                      </li>
                      <li>
                        <a href="single-product-5.html">Product Variation 5</a>
                      </li>
                      <li>
                        <a href="single-product-6.html">Product Variation 6</a>
                      </li>
                      <li>
                        <a href="single-product-7.html">Product Variation 7</a>
                      </li>
                      <li>
                        <a href="single-product-8.html">Product Variation 8</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="/">Pages</a>
                    <ul className="axil-submenu">
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="my-account.html">Account</a>
                      </li>
                      <li>
                        <a href="sign-up.html">Sign Up</a>
                      </li>
                      <li>
                        <a href="sign-in.html">Sign In</a>
                      </li>
                      <li>
                        <a href="forgot-password.html">Forgot Password</a>
                      </li>
                      <li>
                        <a href="reset-password.html">Reset Password</a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="coming-soon.html">Coming Soon</a>
                      </li>
                      <li>
                        <a href="404.html">404 Error</a>
                      </li>
                      <li>
                        <a href="typography.html">Typography</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about-us.html">About</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="/">Blog</a>
                    <ul className="axil-submenu">
                      <li>
                        <a href="blog.html">Blog List</a>
                      </li>
                      <li>
                        <a href="blog-grid.html">Blog Grid</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Standard Post</a>
                      </li>
                      <li>
                        <a href="blog-gallery.html">Gallery Post</a>
                      </li>
                      <li>
                        <a href="blog-video.html">Video Post</a>
                      </li>
                      <li>
                        <a href="blog-audio.html">Audio Post</a>
                      </li>
                      <li>
                        <a href="blog-quote.html">Quote Post</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
              {/* End Mainmanu Nav */}
            </div>
            <div className="header-action">
              <ul className="action-list">
                <li className="axil-search d-xl-block d-none">
                  <input
                    type="search"
                    className="placeholder product-search-input"
                    name="search2"
                    id="search2"
                    defaultValue=""
                    maxLength="128"
                    placeholder="What are you looking for?"
                    autoComplete="off"
                  />
                  <button type="submit" className="icon wooc-btn-search">
                    <i className="flaticon-magnifying-glass"></i>
                  </button>
                </li>
                <li className="axil-search d-xl-none d-block">
                  <a href="/" className="header-search-icon" title="Search">
                    <i className="flaticon-magnifying-glass"></i>
                  </a>
                </li>
                <li className="wishlist">
                  <a href="wishlist.html">
                    <i className="flaticon-heart"></i>
                  </a>
                </li>
                <li className="shopping-cart">
                  <a href="/" className="cart-dropdown-btn">
                    <span className="cart-count">3</span>
                    <i className="flaticon-shopping-cart"></i>
                  </a>
                </li>
                <li className="my-account">
                  <a href="/">
                    <i className="flaticon-person"></i>
                  </a>
                  <div className="my-account-dropdown">
                    <span className="title">QUICKLINKS</span>
                    <ul>
                      <li>
                        <a href="my-account.html">My Account</a>
                      </li>
                      <li>
                        <a href="/">Initiate return</a>
                      </li>
                      <li>
                        <a href="/">Support</a>
                      </li>
                      <li>
                        <a href="/">Language</a>
                      </li>
                    </ul>
                    <a href="sign-in.html" className="axil-btn btn-bg-primary">
                      Login
                    </a>
                    <div className="reg-footer text-center">
                      No account yet?{" "}
                      <a href="sign-up.html" className="btn-link">
                        REGISTER HERE.
                      </a>
                    </div>
                  </div>
                </li>
                <li className="axil-mobile-toggle">
                  <button className="menu-btn mobile-nav-toggler">
                    <i className="flaticon-menu-2"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Mainmenu Area */}
      <div className="header-top-campaign">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="header-campaign-activation axil-slick-arrow arrow-both-side header-campaign-arrow">
                <div className="slick-slide">
                  <div className="campaign-content">
                    <p>
                      STUDENT NOW GET 10% OFF : <a href="/">GET OFFER</a>
                    </p>
                  </div>
                </div>
                <div className="slick-slide">
                  <div className="campaign-content">
                    <p>
                      STUDENT NOW GET 10% OFF : <a href="/">GET OFFER</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
