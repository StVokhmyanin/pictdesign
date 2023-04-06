import styled from "styled-components";

const StyledBanner = styled.div`
  width: 100%;
  position: relative;
  max-height: 836px;
  height: 100vh;

  @media screen and (max-width: 1023px) {
    height: 50vh;
  }

  .banner__info {
    position: absolute;
    z-index: 10;
    top: 30%;
    left: 30%;
    display: flex;
    flex-direction: column-reverse;
    row-gap: 50px;
    justify-content: space-between;

    @media screen and (max-width: 767px) {
      left: 20%;
    }

    @media screen and (max-width: 450px) {
      left: 10%;
    }

    div:hover + h2 {
      text-decoration: underline 4px solid;
      text-underline-offset: 10px;
    }
  }

  h2 {
    color: ${props => props.color || '#000'};
    font-size: 60px;
    line-height: 72px;
    max-width: 250px;
    transition: all 0.2s linear;

    @media screen and (max-width: 1023px) {
      font-size: 40px;
      line-height: 44px;
      max-width: 180px;
    }
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 1023px) {
      object-position: 50%;
    }

    @media screen and (max-width: 767px) {
      object-position: 65%;
    }
  }
`;

export default StyledBanner;
