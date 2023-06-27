import React from "react";
import NavigationLink from "../NavigationLink/NavigationLink";
import FooterLogo from "../FooterLogo/FooterLogo";
import useTranslate from "../../hooks/use-translate";
import CategoryList from "../CategoryList/CategoryList";
import { footerContacts } from "../../data/data";

const Footer = ({categories}) => {

  const { t } = useTranslate();

  return (
    <footer className="footer">
      <nav className="footer__nav-list">
        <h3 className="footer__list-title">{t('projects.title')}</h3>
        <ul className="footer__list">
          <CategoryList categories={categories} />
        </ul>
      </nav>
      <nav className="footer__nav-list">
        <h3 className="footer__list-title">
          <NavigationLink title={t('contact.title')} link="/Contact" />
        </h3>
        <ul className="footer__list">
          {footerContacts.map((contact, i) => {
            return (
              <li key={i}>
                <NavigationLink
                  title={contact.title}
                  link={contact.link}
                  target="_blank"
                />
              </li>
            );
          })}
        </ul>
      </nav>
      <nav className="footer__nav-list">
        <h3 className="footer__list-title">
          <NavigationLink title={t('about.title')} link="/about" />
        </h3>
      </nav>
      <nav className="footer__nav-list">
        <FooterLogo />
      </nav>
      <ul className="footer__list footer__list_mobile">
        <li>{t('company')}</li>
        <li>{t('inn')} 501006590538</li>
        <li>{t('ogrnip')} 316435000087993</li>
      </ul>
    </footer>
  );
};

export default Footer;
