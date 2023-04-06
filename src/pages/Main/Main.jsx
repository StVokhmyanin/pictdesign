import React, { useContext } from 'react';
import MainSwiper from '../../Components/MainSwiper/MainSwiper';
import ProjectList from '../../Components/ProjectList/ProjectList';
import StyledMain from './Main.styled';
import { ProjectsContext } from '../../App/App';

const Main = ({sliderProjects}) => {

  const projects = useContext(ProjectsContext);

  return (
    <StyledMain>
      <MainSwiper projects={sliderProjects} />
      <ProjectList projects={projects} paddingTop="100px" />
    </StyledMain>
  )
};

export default Main;