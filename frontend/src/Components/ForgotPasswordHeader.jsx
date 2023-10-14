import React from "react";

export const ForgotPasswordHeader = () => {
  return (
    <div className="signin-header">
      <div className="row align-items-center">
        <div className="col-xl-4 col-sm-6">
          <a href="index.html" className="site-logo">
            <img src="assets/images/logo/logo.png" alt="logo" />
          </a>
        </div>
        <div className="col-md-2 d-lg-block d-none">
          <a href="sign-in.html" className="back-btn">
            <i className="far fa-angle-left"></i>
          </a>
        </div>
        <div className="col-xl-6 col-lg-4 col-sm-6">
          <div className="singin-header-btn">
            <p>Already a member?</p>
            <a
              href="sign-in.html"
              className="sign-up-btn axil-btn btn-bg-secondary"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
