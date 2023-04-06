import React, { useState, useEffect } from "react";
import StyledLogo from "./Logo.styled";
import logo from "../../Assets/logo.svg";
import logoP from "../../Assets/logo-p.svg";
import { Link, useLocation } from "react-router-dom";

const Logo = () => {

  const { pathname } = useLocation();
  const [offset, setOffset] = useState(0);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    const width = () => setPageWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setPageWidth(window.innerWidth);
    });
    return () => window.removeEventListener("resize", width);
  }, []);

  useEffect(() => {
    if (pageWidth > 1023) {
      const onScroll = () => setOffset(window.pageYOffset);
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [pageWidth]);

  const logoImage = () => {
    if (offset < 500) {
      return logo;
    }
    return logoP;
  };

  const width = () => {
    if (offset < 500) {
      return "150px";
    }
    return "50px";
  };

  return (
    <StyledLogo width={width()} className="logo_header">
      <Link
        className="logo"
        to="/"
        onClick={() => {
          if (pathname === "/") {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }
        }}
      >
        <img className="logo" src={logoImage()} alt="Логотип Pict.design" />
      </Link>
    </StyledLogo>
  );
};

export default Logo;
