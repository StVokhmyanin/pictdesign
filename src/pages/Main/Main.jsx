import React, { useContext } from 'react';
import MainSwiper from '../../Components/MainSwiper/MainSwiper';
import ProjectList from '../../Components/ProjectList/ProjectList';
import StyledMain from './Main.styled';
import useStore from '../../hooks/use-store';
import useInit from '../../hooks/use-init';
import useSelector from '../../hooks/use-selector';

const Main = ({sliderProjects}) => {

  const store = useStore();

  useInit(() => {
    Promise.all([
      store.actions.projects.getProjects(),
      store.actions.projects.getSliderProjects()
    ])
  }, []);

  const select = useSelector(state => ({
    projects: state.projects.projects,
    sliderProjects: state.projects.sliderProjects
  }));

  return (
    <StyledMain>
      <MainSwiper projects={select.sliderProjects} />
      <ProjectList projects={select.projects} paddingTop="100px" />
    </StyledMain>
  )
};

export default Main;