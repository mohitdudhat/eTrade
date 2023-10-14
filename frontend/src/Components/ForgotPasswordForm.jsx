import React from "react";

export const ForgotPasswordForm = () => {
  return (
    <div className="row">
      <div className="col-xl-4 col-lg-6">
        <div className="axil-signin-banner bg_image bg_image--10">
          <h2 className="title">We Offer the Best Products</h2>
        </div>
      </div>
      <div className="col-lg-6 offset-xl-2">
        <div className="axil-signin-form-wrap">
          <div className="axil-signin-form">
            <h3 className="title">Forgot Password?</h3>
            <p className="b2 mb--55">
              Enter the email address you used when you joined and we’ll send
              you instructions to reset your password.
            </p>
            <form className="singin-form">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  defaultValue="annie@example.com"
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="axil-btn btn-bg-primary submit-btn"
                >
                  Send Reset Instructions
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
