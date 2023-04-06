import React from "react";
import NavigationLink from "../NavigationLink/NavigationLink";
import FooterLogo from "../FooterLogo/FooterLogo"; 
import { CategoryContext } from "../../App/App";
import { useContext } from "react";

const Footer = () => {

  const categories = useContext(CategoryContext);

  const contacts = [
    {
      title: 'Telegram',
      link: 'https://t.me/pictdesign',
    },
    {
      title: 'WhatsApp',
      link: 'https://t.me/pictdesign',
    },
    {
      title: 'Instagram',
      link: 'https://t.me/pictdesign',
    },
    {
      title: 'E-mail',
      link: 'https://t.me/pictdesign',
    }
  ]

  return (
    <footer className="footer">
      <nav className="footer__nav-list">
        <h3 className="footer__list-title">Проекты</h3>
        <ul className="footer__list">
          <li>
            <NavigationLink title="Все" link="/">
              Все
            </NavigationLink>
          </li>
          {categories.map((category, i) => {
            return (
              <li key={i}>
                <NavigationLink title={category.name} link={category.slug}>
                  {category.name}
                </NavigationLink>
              </li>
            )
          })}
        </ul>
      </nav>
      
      <nav className="footer__nav-list">
        <h3 className="footer__list-title">
          <NavigationLink title="Контакты" link="/Contact">
            Контакты
          </NavigationLink>
        </h3>
        <ul className="footer__list">
          {contacts.map((contact, i) => {
            return (
              <li key={i}>
                <NavigationLink title={contact.title} link={contact.link} target="_blank">
                  {contact.title}
                </NavigationLink>
              </li>
            )
          })}
        </ul>
      </nav>
      <nav className="footer__nav-list">
        <h3 className="footer__list-title">
          <NavigationLink title="О нас" link="/about">
            О нас
          </NavigationLink>
        </h3>
      </nav>
      <nav className="footer__nav-list">
        <FooterLogo />
      </nav>
      <ul className="footer__list footer__list_mobile">
        <li>ИП Вохмянина М.А.</li>
        <li>ИНН 501006590538</li>
        <li>ОГРНИП 316435000087993</li>
      </ul>
    </footer>
  );
};

export default Footer;
