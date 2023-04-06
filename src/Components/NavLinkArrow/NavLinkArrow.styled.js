import styled from "styled-components";

const StyledNavLinkArrow = styled.div`
align-self: ${props => props.align || 'flex-end'};
grid-area: button;

  a {
    position: relative;
    margin-top: auto;
    text-decoration: none;
    display: inline-block;
    max-width: fit-content;
    box-sizing: border-box;
    border: 1px solid black;
    padding: 14px 20px;
    background-color: #000;
    color: #fff;
    font-size: 21px;
    transition: all 0.3s linear;

    @media screen and (max-width: 1023px) {
      font-size: 14px;
    }

    &:hover {
      color: #000;
      background-color: #ebeae8;

      svg {
        opacity: 1;
      }
    }

    svg {
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 0%;
      transform: translate(-150%, -50%);
      transition: opacity 0.2s linear;
    }
  }
`;

export default StyledNavLinkArrow;
