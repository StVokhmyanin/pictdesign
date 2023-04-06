import React, { useState, createContext } from "react";
import { mainApi } from "../Utils/api";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Main from "../pages/Main/Main";
import About from "../pages/About/About";
import Contacts from "../pages/Contacts/Contacts";
import Project from "../pages/Project/Project";
import Header from "../Components/Header/Header";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import FilteredProjects from "../Components/FilteredProjects/FilteredProjects";
import Footer from "../Components/Footer/Footer";
import { useData } from "../hooks/useData";
import Preloader from "../Components/Preloader/Preloader";
export const CategoryContext = createContext([]);
export const ProjectsContext = createContext([]);
export const LanguagesContext = createContext([]);

const App = () => {

  const [language, setLanguage] = useState("ru");
  const { projects, sliderProjects, categories, loading, error } = useData();

  const onSubmit = (values) => {
    mainApi.sendForm(values);
  };

  return (
    <Router>
      <LanguagesContext.Provider value={language}>
        <CategoryContext.Provider value={categories}>
          <ScrollToTop />
          <div className="app">
            <Helmet>
              <meta charSet="utf-8" />
              <meta
                name="viewport"
                content="width=device-width,initial-scale=1,shrink-to-fit=no"
              ></meta>
              <title>PICT.design - агентство графического дизайна</title>
              <meta
                name="description"
                content="Мы тщательно следим за мировыми тенденциями, что позволяет нам создавать уникальный дизайн. Позвольте нам рассказать миру о Вас!"
                data-react-helmet="true"
              />
              <meta
                name="keywords"
                content="дизайн-бюро, агентство графического дизайна, дизайн агентство, портфолио, презентации, фирменный стиль, брендинг, веб-дизайн, создание сайтов"
                data-react-helmet="true"
              />
              <meta
                property="og:type"
                content="website"
                data-react-helmet="true"
              />
              <link rel="canonical" href="https://pict.design" />
            </Helmet>
            {loading && <Preloader loading={loading} />}
            {error && <Preloader loading={loading} />}

            <Header />
            <button
              onClick={() => {
                setLanguage(() => {
                  if (language === "en") {
                    return "ru";
                  }
                  return "en";
                });
              }}
            >
              Language
            </button>
            <main className="app__content" id="scroll">
              <ProjectsContext.Provider value={projects}>
                <Routes>
                  <Route
                    exact
                    path="/"
                    element={<Main sliderProjects={sliderProjects} />}
                  />
                  <Route path="/:slug" element={<FilteredProjects />} />
                  <Route path="about" element={<About />} />
                  <Route
                    path="contact"
                    element={<Contacts onSubmit={onSubmit} />}
                  />
                  <Route
                    exact
                    path={"/project/:slug"}
                    element={
                      <>
                        <Project />
                      </>
                    }
                  />
                </Routes>
              </ProjectsContext.Provider>
            </main>
            <Footer />
          </div>
        </CategoryContext.Provider>
      </LanguagesContext.Provider>
    </Router>
  );
};

export default App;
