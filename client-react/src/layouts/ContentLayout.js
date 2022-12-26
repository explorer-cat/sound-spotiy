import React from 'react';
import './ContentLayout.scss'

import MainSlider from "../componets/contents/Slider";
import Rank from "../componets/contents/Rank";
import AlbumItem from "../componets/contents/AlbumItem";
import Topbar from "../componets/menu/Topbar";
import styled from 'styled-components';


const ContentSeticon = styled.section`
  padding:40px;
  margin-top:40px;
`

function ContentLayout({path}) {
  console.log('ContentLayout Component Render');
  return (
      <div className = "content-layout">
        <Topbar path = {path}/>
        <ContentSeticon>
          <div className = "content-banner-layout">
            <MainSlider/>
            <Rank/>
          </div>
          <div className = "content-album-layout">
            <AlbumItem />
          </div>
        </ContentSeticon>
      </div>

  );
}

export default ContentLayout;
