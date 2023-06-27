import React, { useState, createContext } from "react";
import { mainApi } from "../Utils/api";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import About from "../pages/About/About";
import Contacts from "../pages/Contacts/Contacts";
import Project from "../pages/Project/Project";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import FilteredProjects from "../Components/FilteredProjects/FilteredProjects";
import PageLayout from "../Components/PageLayout/PageLayout";
import HelmetHead from "../Components/Helmet/helmet";

const App = () => {
  const onSubmit = (values) => {
    mainApi.sendForm(values);
  };

  return (
    <>
      <ScrollToTop />
      <div className="app">
        <HelmetHead />
        <PageLayout>
          <main className="app__content" id="scroll">
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route path="/:slug" element={<FilteredProjects />} />
              <Route path="/about" element={<About />} />
              <Route
                path="contact"
                element={<Contacts onSubmit={onSubmit} />}
              />
              <Route exact path={"/project/:slug"} element={<Project />} />
            </Routes>
          </main>
        </PageLayout>
      </div>
    </>
  );
};

export default App;
