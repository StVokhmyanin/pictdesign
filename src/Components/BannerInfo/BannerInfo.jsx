import React, { useContext } from "react";
import useTranslate from "../../hooks/use-translate";

const BannerInfo = (props, { children }) => {

  const { t, oT } = useTranslate();

  return (
    <article className="banner-info">
      <div className="text__wrapper">
        {props.text.map((item, i) => {
          return (
            <div className="text" key={i}>
              {oT(item.ru, item.en)}
            </div>
          );
        })}
      </div>
      <div className="stages">
        <p>{t('about.stages')}</p>
        <ul>
          {props.stages.map((stage, i) => {
            return (
              <li key={i}>
                <span className={stage.icon}></span>
                {oT(stage.text.ru, stage.text.en)}
              </li>
            );
          })}
        </ul>
        {children}
      </div>
    </article>
  );
};

export default BannerInfo;
