import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useTranslate from "../../hooks/use-translate";
import useStore from "../../hooks/use-store";
import useInit from "../../hooks/use-init";
import useSelector from "../../hooks/use-selector";
import Preloader from "../Preloader/Preloader";
import ProjectList from "../ProjectList/ProjectList";

const FilteredProjects = () => {
  const { slug } = useParams();

  const store = useStore();

  useInit(() => {
    store.actions.category.getCategory(slug);
  }, [slug]);

  const select = useSelector((state) => ({
    category: state.category.category,
    projects: state.category.projects,
    waiting: state.category.waiting,
  }));

  const { oT } = useTranslate();

  return (
    <>
      {select.waiting ? (
        <Preloader />
      ) : (
        <>
          <div className="filtered-projects">
            <div className="filtered-projects">
              <div className="filtered-projects__title-wrapper">
                <h2>{oT(select.category.name, select.category.acf["eng"])}</h2>
              </div>
            </div>
          </div>
          <ProjectList projects={select.projects} />
        </>
      )}
    </>
  );
};

export default FilteredProjects;
