import React from 'react';
import MainSlider from "../componets/contents/Slider";
import Rank from "../componets/contents/Rank";
import './ContentLayout.scss'


function ContentLayout() {
  console.log('Home Component Render');
  return (
      <div className = "content-layout">
        <div className = "content-banner-layout">
          <MainSlider/>
          <Rank/>
        </div>
        <div className = "content-album-layout">
          {/*<MainSlider/>*/}
        </div>
      </div>

  );
}

export default ContentLayout;
