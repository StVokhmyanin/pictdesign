import styled from "styled-components";

const LangSwitcherStyled = styled.button`
  border: none;
  color: #000;
  text-transform: uppercase;
  position: fixed;
  top: 50px;
  right: 50px;
  cursor: pointer;
  z-index: 1000;
  background: none;

  @media screen and (max-width: 1023px) {
      top: 15px;
      right: 20px;
    }
`

export default LangSwitcherStyled;