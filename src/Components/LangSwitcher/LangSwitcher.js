import React from "react";
import useSelector from "../../hooks/use-selector";
import useStore from "../../hooks/use-store";
import LangSwitcherStyled from "./LangSwitcher.styled";
import useTranslate from "../../hooks/use-translate";

const LangSwitcher = () => {

  const {lang, setLang} = useTranslate();

  const store = useStore();

  const select = useSelector(state => ({
    lang: state.locale.lang
  }))

  return (
    <LangSwitcherStyled
      onClick={() => {
        if (select.lang === 'ru') {
          store.actions.locale.setLang('en');
          setLang('en');
        } else {
          store.actions.locale.setLang('ru');
          setLang('ru');
        }
      }}
    >
      {select.lang === 'ru'? 'en' : 'ru'}
    </LangSwitcherStyled>
  );
};

export default LangSwitcher;
