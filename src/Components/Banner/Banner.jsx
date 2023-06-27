import React, { useContext } from "react";
import StyledBanner from "./Banner.styled";
import NavLinkArrow from "../NavLinkArrow/NavLinkArrow";
import useTranslate from "../../hooks/use-translate";

const Banner = ({ title, image, link, alignSelf, color }) => {
  const titleColor = color;

  const { t, oT } = useTranslate();

  return (
    <StyledBanner color={titleColor}>
      <img src={image} alt={title} />
      <div>
        <div className="banner__info">
          <NavLinkArrow title={t('about.button')} link={link} alignSelf={alignSelf} />
          <h2>
          {oT(title.ru, title.en)}
          </h2>
        </div>
      </div>
    </StyledBanner>
  );
};

export default Banner;
