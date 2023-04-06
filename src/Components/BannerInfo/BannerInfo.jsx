import React from "react";

const BannerInfo = (props, {children}) => {

  return (
    <article className="banner-info">
      <div className="text__wrapper">
      {props.text.map((item, i) => {
        return <div className="text" key={i}>{item.info}</div>;
      })}
      </div>
      <div className="stages">
        <p>Этапы работы:</p>
        <ul>
          {props.stages.map((stage, i) => {
            return (
              <li key={i}>
                <span className={stage.icon}></span>
                {stage.text}
              </li>
            )
          })}
        </ul>
        {children}
      </div>
    </article>
  );
};

export default BannerInfo;
