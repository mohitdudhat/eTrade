import React from "react";
import { useEffect } from "react";

import { NavbarMenu } from "./NavbarMenu";
import { BottomCampaign } from "./BottomCampaign";
import { HeaderTop } from "./HeaderTop";
import { TopCampaign } from "./TopCampaign";

const Header = (props) => {
  return (
    <header className={`header axil-header header-style-${props.style}`}>
      {props.TopCampaign && <TopCampaign />}
      <HeaderTop />
      <NavbarMenu />
      {!props.TopCampaign && <BottomCampaign />}
    </header>
  );
};

Header.defaultProps = {
  TopCampaign: false,
  /* style 1 =  "thin" and style 5 = "thik" */
  style: 5,
};
export default Header;
