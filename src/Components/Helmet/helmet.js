import React from 'react';
import { Helmet } from "react-helmet";

const HelmetHead = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      ></meta>
      <title>PICT.design - агентство графического дизайна</title>
      <meta
        name="description"
        content="Мы тщательно следим за мировыми тенденциями, что позволяет нам создавать уникальный дизайн. Позвольте нам рассказать миру о Вас!"
        data-react-helmet="true"
      />
      <meta
        name="keywords"
        content="дизайн-бюро, агентство графического дизайна, дизайн агентство, портфолио, презентации, фирменный стиль, брендинг, веб-дизайн, создание сайтов"
        data-react-helmet="true"
      />
      <meta property="og:type" content="website" data-react-helmet="true" />
      <link rel="canonical" href="https://pict.design" />
    </Helmet>
  );
};

export default HelmetHead;