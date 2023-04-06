import styled from "styled-components";

const StyledMain = styled.section`
display: flex;
flex-direction: column;
animation: open .8s ease;
  
  @keyframes open {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1023px) {
    row-gap: 80px;
  }

  @media screen and (max-width: 767px) {
    row-gap: 60px;
  }
`;

export default StyledMain;