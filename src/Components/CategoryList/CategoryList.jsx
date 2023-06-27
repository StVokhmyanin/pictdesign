import React, { useContext } from "react";
import NavigationLink from "../NavigationLink/NavigationLink";
import useTranslate from "../../hooks/use-translate";

const CategoryList = ({categories}) => {

  const { t, oT } = useTranslate();

  return (
    <ul className='category-list'>
      <li className="navigation__item">
        <NavigationLink title={t('all')} link="/" />
      </li>
      {categories.map((category) => {
        return (
          <li key={category.id} className="navigation__item">
            <NavigationLink
              title={oT(category.name, category.acf["eng"])}
              link={`/${category.slug}`}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryList;
