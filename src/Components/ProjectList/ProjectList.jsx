import React, { useContext } from "react";
import Card from "../Card/Card";
import StyledProjectList from "./ProjectList.styled";

function ProjectList({ projects = [], paddingTop }) {

  return (
    <StyledProjectList paddingTop={paddingTop}>
      {projects.map((project, i) => {
        return <Card card={project} key={i} />;
      })}
    </StyledProjectList>
  );
}

export default ProjectList;
