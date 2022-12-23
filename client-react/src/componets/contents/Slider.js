import React from 'react';
import Slider from "react-slick";
import SliderItem  from "./SliderItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";


function MainSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log('Slider() Component Render');
  return (
    <a className = "slide-content">
        <Slider {...settings}>
          <div>
            <SliderItem />
          </div>
          <div>
            <SliderItem />
          </div>
          <div>
            <SliderItem />
          </div>
          <div>
            <SliderItem />
          </div>
          <div>
            <SliderItem />
          </div>
          <div>
            <SliderItem />
          </div>
        </Slider>
    </a>
  );
}

export default MainSlider;
