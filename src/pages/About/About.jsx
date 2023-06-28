import React, { useContext } from "react";
import BannerInfo from "../../Components/BannerInfo/BannerInfo";
import Banner from "../../Components/Banner/Banner";
import NavLinkArrow from "../../Components/NavLinkArrow/NavLinkArrow";
import { works, facts } from '../../data/data';
import useTranslate from "../../hooks/use-translate";
import useSelector from "../../hooks/use-selector";

const About = () => {

  const { t, oT } = useTranslate();

  const select = useSelector(state => ({
    lang: state.locale.lang
  }))

  return (
    <section className="about">
      <div className="about__info">
        <h1>{t('about.title')}</h1>
        <div className="about__text">
          <p>
            Мы — небольшая команда, которая любит свое дело и живет им! За
            нашими плечами более 10 лет работы в графическом дизайне, свыше 100
            реализованных проектов в сфере полиграфии, айдентике и веб-дизайне,
            десятки лояльных заказчиков, большинство из которых возвращаются к
            нам снова и снова. Среди них ГТЛК, Марс, PepsiCo, ВДНХ, Росбанк,
            благотворительный фонд Константа, РА «Навигатор» и другие. Нас
            отличает аккуратность и лаконичность линий, европейский современный
            дизайн. Мы тщательно следим за мировыми трендами, при этом всегда
            сохраняем свой уникальный стиль. Ответственный подход и точность в
            каждой детали — залог успешного сотрудничества.
          </p>
          <NavLinkArrow
            title={t('presentation')}
            link={
              "http://pictdesign.ru/wp-content/uploads/2023/03/pict_pres.pdf"
            }
            alignSelf={true}
          />
        </div>
        {facts.map((fact, i) => {
          return (
            <div className="about__fact" key={i}>
              <strong>{fact.number}</strong>
              {oT(fact.fact.ru, fact.fact.en)}
            </div>
          );
        })}
      </div>
      <ul className="banner-list">
        {works.map((work, i) => {
          return (
            <li key={i}>
              <Banner
                title={work.title}
                link={work.link}
                image={work.image}
                color={work.color}
                alignSelf="flex-start"
              />
              <BannerInfo
                text={work.text}
                stages={work.stages}
                children={work.children}
              ></BannerInfo>
            </li>
          );
        })}
      </ul>
      <section className="presentation">
        <NavLinkArrow
          title={t('presentation')}
          link={"http://pictdesign.ru/wp-content/uploads/2023/06/PICT_2023.pdf"}
        />
      </section>
    </section>
  );
};

export default About;
