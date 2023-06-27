import { useParams, NavLink } from "react-router-dom";
import React from "react";
import ProjectList from "../../Components/ProjectList/ProjectList";
import Preloader from "../../Components/Preloader/Preloader";
import StyledProject from "./Project.styled";
import useTranslate from "../../hooks/use-translate";
import useStore from "../../hooks/use-store";
import useInit from "../../hooks/use-init";
import useSelector from "../../hooks/use-selector";

const Project = () => {
  const { slug } = useParams();
  const store = useStore();

  useInit(() => {
    store.actions.project.getProject(slug);
  }, [slug]);

  const select = useSelector((state) => ({
    project: state.project.project,
    recProjects: state.project.recProjects,
    waiting: state.project.waiting,
  }));

  const { t, oT } = useTranslate();

  return (
    <>
      {select.waiting? (
        <Preloader />
      ) : (
        <StyledProject>
          <section className="project">
            <h2 className="project__title">
              {oT(select.project.title.rendered, select.project.acf.eng_title)}
            </h2>
            <p
              className="project__excerpt"
              dangerouslySetInnerHTML={{
                __html: oT(
                  select.project.excerpt.rendered,
                  select.project.acf.eng_description
                ),
              }}
            />
            <ul className="project__tags">
              <li className="project__tag">#</li>
              {select.project._embedded["wp:term"]["0"].map((tag, i) => {
                return (
                  <li className="project__tag" key={i}>
                    <NavLink to={`/${tag.slug}`}>
                      {oT(tag.name, tag.acf.eng)}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </section>
          <section
            className="project__content"
            dangerouslySetInnerHTML={{
              __html: select.project.content.rendered,
            }}
          />
          <h3 className="project__recommend-title">{t("see-more")}:</h3>
          <ProjectList projects={select.recProjects} paddingTop={"50 px"} />
        </StyledProject>
      )}
    </>
  );
};

export default Project;
