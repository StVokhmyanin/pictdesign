import React, { useContext, useEffect, useState } from "react";
import NavigationLink from "../NavigationLink/NavigationLink";
import Logo from "../Logo/Logo";
import CategoryList from "../CategoryList/CategoryList";
import HeaderButton from "./HeaderButton";
import { useLocation } from "react-router-dom";
import { CategoryContext } from "../../App/App";
import { useLanguage } from "../../hooks/useLanguage";

const Header = () => {

  const { pathname } = useLocation();
  const categories = useContext(CategoryContext);

  const [activeHeader, setActiveHeader] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(false);

  function setHeader() {
    setActiveHeader(!activeHeader);
  }

  function setSubMenu() {
    setActiveSubMenu(!activeSubMenu);
  }

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        setActiveHeader(false);
        setActiveSubMenu(false);
      }
    });
    return () => document.removeEventListener("keydown", setHeader);
  }, [setHeader]);

  useEffect(() => {
    document.addEventListener("scroll", (event) => {
      setActiveSubMenu(false);
    });
    return () => document.removeEventListener("scroll", setSubMenu);
  }, [setSubMenu]);

  useEffect(() => {
    setActiveHeader(false);
    setActiveSubMenu(false);
  }, [pathname]);

  const projectLink = useLanguage('Проекты', 'Projects');
  const contactLink = useLanguage('Контакты', 'Contacts');
  const aboutLink = useLanguage('О нас', 'About');

  return (
    <>
      <HeaderButton isActive={activeHeader} setIsActive={setHeader} />
      <div
        className={`header__button-overlay ${
          (activeHeader || activeSubMenu) ? "header__button-overlay_active" : ""
        }`}
        onClick={() => {
          console.log('click');
          setActiveHeader(false);
          setActiveSubMenu(false);
        }}
      />
      <header className={`header ${activeHeader ? "header_opened" : ""}`}>
        <Logo />
        <ul className="navigation__list">
          <li className="navigation__item navigation__item_bold">
            <NavigationLink title={aboutLink} link="/about" />

          </li>
          <li
            className="navigation__item navigation__item_bold"
            onClick={() => {
              setActiveSubMenu((activeSubMenu) => !activeSubMenu);
            }}
          >
            <div className="navigation__link navigation__button">
              {projectLink}
              <CategoryList active={activeSubMenu} categories={categories} />
            </div>
          </li>
          <li className="navigation__item navigation__item_bold">
            <NavigationLink title={contactLink} link="/contact" />

          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
