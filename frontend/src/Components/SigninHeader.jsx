import React from "react";

export const SigninHeader = (props) => {
  return (
    <div className="signin-header">
      <div className="row align-items-center">
        <div className="col-sm-4">
          <a href="index.html" className="site-logo">
            <img src="assets/images/logo/logo.png" alt="logo" />
          </a>
        </div>
        <div className="col-sm-8">
          <div className="singin-header-btn">
            <p>{props.message}</p>
            <a
              href={props.url}
              className="axil-btn btn-bg-secondary sign-up-btn"
            >
              {props.messageButton}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
