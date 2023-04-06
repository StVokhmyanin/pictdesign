import React from "react";
import StyledLogo from "../Logo/Logo.styled";
import logo from "../../Assets/logo.svg";
import { Link } from "react-router-dom";

const FooterLogo = () => {

  return (
    <StyledLogo width="150px" className="logo_header">
      <Link className="logo" to="/">
        <img className="logo" src={logo} alt="Логотип Pict.design" />
      </Link>
    </StyledLogo>
  );
};

export default FooterLogo;
