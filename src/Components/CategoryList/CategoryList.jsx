import React, { useContext } from "react";
import NavigationLink from "../NavigationLink/NavigationLink";
import { LanguagesContext } from "../../App/App";
import { useLanguage } from "../../hooks/useLanguage";

const CategoryList = ({ categories, active }) => {
  const language = useContext(LanguagesContext);
  const link = useLanguage("Все проекты", "All projects");

  return (
    <ul className={`category-list ${active ? "category-list_active" : ""}`}>
      <li className="navigation__item">
        <NavigationLink title={link} link="/" />
      </li>
      {categories.map((category) => {
        return (
          <li key={category.id} className="navigation__item">
            <NavigationLink
              title={() => {
                if (language === "ru") {
                  return category.name;
                }
                return category.acf["eng_version"];
              }}
              link={`/${category.slug}`}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryList;
