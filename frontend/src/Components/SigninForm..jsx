import React from "react";

export const SigninForm = () => {
  return (
    <div className="row">
      <div className="col-xl-4 col-lg-6">
        <div className="axil-signin-banner bg_image bg_image--9">
          <h3 className="title">We Offer the Best Products</h3>
        </div>
      </div>
      <div className="col-lg-6 offset-xl-2">
        <div className="axil-signin-form-wrap">
          <div className="axil-signin-form">
            <h3 className="title">Sign in to eTrade.</h3>
            <p className="b2 mb--55">Enter your details below</p>
            <form className="singin-form">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value="annie@example.com"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value="123456789"
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between">
                <button
                  type="submit"
                  className="axil-btn btn-bg-primary submit-btn"
                >
                  Sign In
                </button>
                <a href="forgot-password.html" className="forgot-btn">
                  Forget password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

