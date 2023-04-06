import { useParams, NavLink } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { mainApi } from "../../Utils/api";
import ProjectList from "../../Components/ProjectList/ProjectList";
import Preloader from "../../Components/Preloader/Preloader";
import StyledProject from "./Project.styled";
import { LanguagesContext } from "../../App/App";

const Project = () => {
  const { slug } = useParams();
  const [project, setProject] = useState({});
  const [recommendProject, setRecommendProject] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(project);

  useEffect(() => {
    const getProject = async () => {
      try {
        const projectData = await mainApi.getProject(slug);
        setProject(projectData.data["0"]);
        const projectsData = await mainApi.getContentFromCategory(
          projectData.data["0"]._embedded["wp:term"]["0"]["0"]["id"]
        );
        setRecommendProject(projectsData.data);
      } catch (error) {
        console.log(error);
      }
    };
    const getRecommendProjects = async () => {
      try {
        const projectsData = await mainApi.getContentFromCategory(
          project._embedded["wp:term"]["0"]["id"]
        );
        setRecommendProject(projectsData.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProject().then(() => {
      getRecommendProjects();
      setLoading(false);
    });
  }, [slug]);

  const padding = "0px";

  const [displayRu, setDisplayRu] = useState();
  const [displayEn, setDisplayEn] = useState();

  const language = useContext(LanguagesContext);
  useEffect(() => {
    if (language === 'ru') {
      setDisplayRu('grid');
      setDisplayEn('none');
      return;
    } 
    setDisplayRu('none');
    setDisplayEn('grid');
  }, [language]);

  return (
    <>
      {loading ? (
        <Preloader loading={loading} />
      ) : (
        <StyledProject displayRu={displayRu} displayEn={displayEn}>
          <section className="project">
            <h2 className="project__title">{project.title.rendered}</h2>
            <div
              className="project__excerpt"
              dangerouslySetInnerHTML={{ __html: project.excerpt.rendered }}
            />
            <ul className="project__tags">
              <li className="project__tag">#</li>
              {project._embedded["wp:term"]["0"].map((tag, i) => {
                return (
                  <li className="project__tag" key={i}>
                    <NavLink to={`/${tag.slug}`}>{tag.name}</NavLink>
                  </li>
                );
              })}
            </ul>
          </section>
          <section
            className="project__content"
            dangerouslySetInnerHTML={{ __html: project.content.rendered }}
          />
          <h3 className="project__recommend-title">Посмотрите еще:</h3>
          <ProjectList projects={recommendProject} paddingTop={padding}/>
        </StyledProject>
      )}
    </>
  );
};

export default Project;
