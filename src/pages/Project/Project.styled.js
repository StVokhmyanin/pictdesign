import styled from "styled-components";

const StyledProject = styled.section`
.ru {
  display: ${props => props.displayRu || 'grid'};
}

.en {
  display: ${props => props.displayEn || 'none'};
}
`

export default StyledProject;