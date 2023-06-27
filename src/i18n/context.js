import React, {createContext, useMemo, useState} from "react";
import translate from "./translate";

export const I18nContext = createContext({});

export function I18nProvider({children}) {

  const [lang, setLang] = useState('ru');

  const i18n = useMemo(() => ({
    lang,
    setLang,
    t: (text) => translate(lang, text),
    oT: (ru, en) => {
      return lang === 'ru'? ru : en;
    }
  }), [lang]);

  return (
    <I18nContext.Provider value={i18n}>
      {children}
    </I18nContext.Provider>
  );
}
