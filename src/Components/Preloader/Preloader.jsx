import React from 'react';
import StyledPreloader from './Preloader.styled';
import useTranslate from '../../hooks/use-translate';

const Preloader = () => {

  const { t } = useTranslate();

  return (
    <StyledPreloader>
      {t('loading')}
    </StyledPreloader>
  );
};

export default Preloader;