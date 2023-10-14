import React from "react";

export const Team = () => {
  return (
    <div className="axil-team-area bg-wild-sand">
      <div className="team-left-fullwidth">
        <div className="container ml--xxl-0" style={{ overflow: "hidden" }}>
          <div className="section-title-wrapper">
            <span className="title-highlighter highlighter-primary">
              <i className="fas fa-users"></i> Our Team
            </span>
            <h3 className="title">Expert Management Team</h3>
          </div>
          <div className="team-slide-activation slick-layout-wrapper--20 axil-slick-arrow  arrow-top-slide">
            <div className="slick-single-layout">
              <div className="axil-team-member">
                <div className="thumbnail">
                  <img
                    src="assets/images/team/team-01.png"
                    alt="Rosalina D. Willson"
                  />
                </div>
                <div className="team-content">
                  <span className="subtitle">Founder</span>
                  <h5 className="title">Rosalina D. Willson</h5>
                </div>
              </div>
            </div>
            <div className="slick-single-layout">
              <div className="axil-team-member">
                <div className="thumbnail">
                  <img
                    src="assets/images/team/team-02.png"
                    alt="Ukolilix X. Xilanorix"
                  />
                </div>
                <div className="team-content">
                  <span className="subtitle">CEO</span>
                  <h5 className="title">Ukolilix X. Xilanorix</h5>
                </div>
              </div>
            </div>
            <div className="slick-single-layout">
              <div className="axil-team-member">
                <div className="thumbnail">
                  <img
                    src="assets/images/team/team-03.png"
                    alt="Alonso M. Miklonax"
                  />
                </div>
                <div className="team-content">
                  <span className="subtitle">Designer</span>
                  <h5 className="title">Alonso M. Miklonax</h5>
                </div>
              </div>
            </div>
            <div className="slick-single-layout">
              <div className="axil-team-member">
                <div className="thumbnail">
                  <img
                    src="assets/images/team/team-04.png"
                    alt="Alonso M. Miklonax"
                  />
                </div>
                <div className="team-content">
                  <span className="subtitle">Designer</span>
                  <h5 className="title">Alonso M. Miklonax</h5>
                </div>
              </div>
            </div>
            <div className="slick-single-layout">
              <div className="axil-team-member">
                <div className="thumbnail">
                  <img
                    src="assets/images/team/team-02.png"
                    alt="Alonso M. Miklonax"
                  />
                </div>
                <div className="team-content">
                  <span className="subtitle">Designer</span>
                  <h5 className="title">Alonso M. Miklonax</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
