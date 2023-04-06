import React, { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0, 
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return (
    <div>
      {props.children}
    </div>
  )
};

export default ScrollToTop;