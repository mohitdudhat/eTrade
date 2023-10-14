import React from "react";

export const ResetForm = () => {
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
            <h3 className="title mb--35">Reset Password</h3>
            <form className="signin-form">
              <div className="form-group">
                <label>New password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password1"
                  value="123456789"
                />
              </div>
              <div className="form-group">
                <label>Confirm password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password2"
                  value="123456789"
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="axil-btn btn-bg-primary submit-btn"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
