import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mainApi } from "../../Utils/api";
import ProjectList from "../ProjectList/ProjectList";

const FilteredProjects = () => {

  const { slug } = useParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const category = async () => {
      await mainApi.getCategoryInfo(slug)
      .then((data) => {
        setCategory(data.data['0']);
        return data.data['0']['id'];
      })
      .then((id) => mainApi.getContentFromCategory(id))
      .then(data => setProjects(data.data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err))
    };
    category();
  }, [slug]);

  const padding = '0px';

  return (
    <div className="filtered-projects">
      <div className="filtered-projects__title-wrapper">
        <h2>{category.name}</h2>
      </div>
      {loading ? (
        <div className="preloader">Loading...</div>
      ) : (
        <ProjectList projects={projects} paddingTop={padding} />
      )}
    </div>
  );
};

export default FilteredProjects;
