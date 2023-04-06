import React from 'react';
import StyledPreloader from './Preloader.styled';

const Preloader = (loading) => {
  return (
    <StyledPreloader>
    {
      loading ? (<div> Loading... </div>) : '' 
    }
    </StyledPreloader>
  );
};

export default Preloader;