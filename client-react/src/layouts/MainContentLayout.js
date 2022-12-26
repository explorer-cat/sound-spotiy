import React from 'react';
import './MainContentLayout.scss'

import MainSlider from "../componets/contents/Slider";
import Rank from "../componets/contents/Rank";
import AlbumItem from "../componets/contents/AlbumItem";
import Topbar from "../componets/menu/Topbar";
import styled from 'styled-components';


const ContentSeticon = styled.section`
  padding:40px;
  margin-top:40px;
`

/*메인 화면 컴포넌트 */
function MainContentLayout({path}) {
  //메인화면 카테고리별 추천 플레이리스트
  const [recommendedPlayList, setRecommendedPlayList] = React.useState([
    {
      'id': 0,
      'category' : '감동',
      'item' : [
        {
          'playListId' : 10000,
          'thumbnail': '/assets/images/album-sample.png',
          'title': 'Peaceful Piano',
          'description': 'Relax and indulge with beautiful piano pieces',
        },
        {
          'playListId' : 10000,
          'thumbnail': '/assets/images/album-sample.png',
          'title': 'Peaceful Piano',
          'description': 'Relax and indulge with beautiful piano pieces',
        },
        {
          'playListId' : 10000,
          'thumbnail': '/assets/images/album-sample.png',
          'title': 'Peaceful Piano',
          'description': 'Relax and indulge with beautiful piano pieces',
        },
        {
          'playListId' : 10000,
          'thumbnail': '/assets/images/album-sample.png',
          'title': 'Peaceful Piano',
          'description': 'Relax and indulge with beautiful piano pieces',
        },
        {
          'playListId' : 10000,
          'thumbnail': '/assets/images/album-sample.png',
          'title': 'Peaceful Piano',
          'description': 'Relax and indulge with beautiful piano pieces',
        },
      ]
    },
    {
      'id': 1,
      'category' : '집중',
      'item' : [
        {
          'playListId' : 10000,
          'thumbnail': '/assets/images/album-sample.png',
          'title': 'Peaceful Piano',
          'description': 'Relax and indulge with beautiful piano pieces',
        },
        {
          'playListId' : 10000,
          'thumbnail': '/assets/images/album-sample.png',
          'title': 'Peaceful Piano',
          'description': 'Relax and indulge with beautiful piano pieces',
        },
        {
          'playListId' : 10000,
          'thumbnail': '/assets/images/album-sample.png',
          'title': 'Peaceful Piano',
          'description': 'Relax and indulge with beautiful piano pieces',
        },
        {
          'playListId' : 10000,
          'thumbnail': '/assets/images/album-sample.png',
          'title': 'Peaceful Piano',
          'description': 'Relax and indulge with beautiful piano pieces',
        },
      ]
    },
  ])

  return (
    <div className="content-layout">
      <Topbar path={path}/>
      <ContentSeticon>
        <div className="content-banner-layout">
          <MainSlider/>
          <Rank/>
        </div>
        <div className="content-album-layout">
          {recommendedPlayList.map((item) => {
            console.log('item',item)
            return (<AlbumItem playList={item}/>)
          })}
        </div>
      </ContentSeticon>
    </div>

  );
}

export default MainContentLayout;
