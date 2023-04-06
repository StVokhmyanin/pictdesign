import React, { useState, useEffect, useContext } from "react";
import { LanguagesContext } from "../App/App";

export const useLanguage = (ru, en) => {

  const language = useContext(LanguagesContext);
  const [link, setLink] = useState();
  console.log(language);

  const linkTitle = () => {
    if (language === 'ru') {
    return setLink(ru);
    }
    setLink(en);
  };

  useEffect(() => {
    linkTitle();
  }, [language])

  return link;
}