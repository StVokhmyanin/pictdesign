import React from "react";
import StyledBanner from "./Banner.styled";
import NavLinkArrow from "../NavLinkArrow/NavLinkArrow";

const Banner = ({title, image, link, alignSelf, color}) => {

  const titleColor = color;

  return (
    <StyledBanner color={titleColor}>
      <img src={image} alt={title} />
      <div>
        <div className="banner__info">
        <NavLinkArrow title={"проекты"} link={link} alignSelf={alignSelf}/>
          <h2>{title}</h2>
        </div>
      </div>
    </StyledBanner>
  );
};

export default Banner;
