import React from 'react';
import { NavLink } from "react-router-dom";


const NavigationLink = ({link, title, child}) => {
  return(
    <NavLink to={link} className={({isActive}) => 'navigation__link ' + (isActive ? ' navigation__link_active' : '')}>
      {title}
    </NavLink>
  )
}

export default NavigationLink;