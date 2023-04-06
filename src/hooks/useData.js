import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { mainApi } from '../Utils/api';

export function useData() {

  const [projects, setProjects] = useState([]);
  const [sliderProjects, setSliderProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState('');

  const getData = async () => {
    setLoading(true);
    try {
      const projectsData = await mainApi.getContent();
      setProjects(projectsData.data);
      setSliderProjects(projectsData.data.filter(project => project.tags == '8'));
      const categoryData = await mainApi.getCategories();
      setCategories(categoryData.data);
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { projects, sliderProjects, categories, loading, error };
};