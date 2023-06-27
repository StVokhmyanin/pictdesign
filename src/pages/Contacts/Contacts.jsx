import React from "react";
import Form from "../../Components/Form/Form";
import { contacts, inputs } from "../../data/data";
import useTranslate from "../../hooks/use-translate";

const Contacts = ({ onSubmit, error, clearError }) => {

  const { t, oT } = useTranslate();

  return (
    <section className="contacts">
      <div className="contacts__wrapper">
        <h1>{t('contact.title')}</h1>
        <p>{t('contact.callus')}</p>
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
          {t('contact.form')}
        </h2>
        <Form
          inputs={inputs}
          buttonText={t('contact.button')}
          onSubmit={onSubmit}
          error={error}
          clearError={clearError}
        />
      </div>
    </section>
  );
};

export default Contacts;
