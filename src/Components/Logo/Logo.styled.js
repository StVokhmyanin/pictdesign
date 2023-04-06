import styled from "styled-components";

const StyledLogo = styled.div`
position: absolute;

width: ${props => props.width || "150px"};

img {
  width: 100%;
}

@media screen  and (max-width: 1023px){
  position: static;
  width: 80px;
}
`;

export default StyledLogo;