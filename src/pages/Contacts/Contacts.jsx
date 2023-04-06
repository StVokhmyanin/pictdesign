import React from "react";
import Form from "../../Components/Form/Form";
import telegram from "../../Assets/Images/telegram.svg";
import whatsapp from "../../Assets/Images/whatsapp.svg";
import instagram from "../../Assets/Images/instagram.svg";
import email from "../../Assets/Images/email.svg";

const Contacts = ({ onSubmit, error, clearError }) => {
  const contacts = [
    {
      icon: whatsapp,
      link: "https://wa.link/ur25zn",
    },
    {
      icon: telegram,
      link: "https://t.me/pictdesign",
    },
    {
      icon: instagram,
      link: "https://instagram.com/pict.agency",
    },
    {
      icon: email,
      link: "mailto:ask@pict.design",
    },
  ];

  const inputs = [
    {
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Ваше имя",
      required: true,
      minLength: 2,
      pattern: "^([а-яА-Я]|s)*$",
    },
    {
      id: "phone",
      name: "phone",
      type: "mobile",
      placeholder: "Номер телефона",
      pattern: "+7(d{3})d{3}-d{2}-d{2}",
      required: true,
      minLength: 11,
    },
    {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "E-mail",
      required: true,
      minLength: 6,
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
    },
  ];

  return (
    <section className="contacts">
      <div className="contacts__wrapper">
        <h1>Контакты</h1>
        <p>Свяжитесь с нами любым удобным для Вас способом:</p>
        <ul>
          {contacts.map((contact, i) => {
            return (
              <li key={i}>
                <a href={contact.link} target="_blank" rel="noopener noreferrer">
                  <img src={contact.icon} alt="Pict icon" />
                </a>
              </li>
            );
          })}
        </ul>
        <h2>
          Мы можем сами связаться с вами, если вы оставите свои контакты :)
        </h2>
        <Form
          inputs={inputs}
          onSubmit={onSubmit}
          error={error}
          clearError={clearError}
        />
      </div>
    </section>
  );
};

export default Contacts;
