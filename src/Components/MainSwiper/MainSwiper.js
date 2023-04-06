import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/effect-fade/effect-fade.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import StyledMainSwiper from "./MainSwiper.styled";
import NavLinkArrow from "../NavLinkArrow/NavLinkArrow";
import { NavLink } from "react-router-dom";

const MainSwiper = ({ projects = [] }) => {
  return (
    <StyledMainSwiper>
      <Swiper
        id="swiper"
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 4000,
        }}
        speed={1000}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets",
        }}
        slidesPerView={1}
        loop={true}
        effect="fade"
        tag="ul"
        className="styled-swiper"
      >
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>

        <div className="swiper-pagination-container">
          <div className="swiper-pagination"></div>
        </div>
        {projects.map((project, i) => {
          return (
            <SwiperSlide
              key={i}
              tag="li"
              style={{ backgroundColor: project.acf["post_slider_bg_color"] }}
            >
              <img
                src={project.acf["post_slider_image"]["url"]}
                alt={project.title.rendered}
              />
              <div className="slider__info">
                <NavLink className="slider__title-link" to={`/project/${project.slug}`}>
                  <h2 style={{ color: project.acf["post_slider_title_color"] }}>
                    {project.title.rendered}
                  </h2>
                  <div
                    className="slider__excerpt"
                    style={{ color: project.acf["post_slider_title_color"] }}
                    dangerouslySetInnerHTML={{
                      __html: project.excerpt.rendered,
                    }}
                  />
                </NavLink>
                <NavLinkArrow
                  title={"посмотреть"}
                  link={`/project/${project.slug}`}
                  alignSelf='flex-start'
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledMainSwiper>
  );
};

export default MainSwiper;
