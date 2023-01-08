import React from 'react';
import './MainContentLayout.scss'

import MainSlider from "../componets/contents/Slider";
import Rank from "../componets/contents/Rank";
import AlbumItem from "../componets/contents/AlbumItem";
import Topbar from "../componets/menu/Topbar";
import styled from 'styled-components';


const ContentSetion = styled.section`
  padding:40px;
  margin-top:40px;
`

/*메인 화면 컴포넌트 */
function MainContentLayout({path,userService,RecommendationService}) {
  //메인화면 카테고리별 추천 플레이리스트
  const [recommendedPlayList, setRecommendedPlayList] = React.useState([
    {
      'id': 0,
      'category' : '감동',
      'item' : [
        {
          'playListId' : 10000,
          'thumbnail': '/assets/images/playList/playList_thumbnail_1.png',
          'title': '시영이의 코딩 플레이 리스트',
          'description': 'Relax and indulge with beautiful piano pieces',
        },
        {
          'playListId' : 10000,
          'thumbnail': '/assets/images/playList/playList_thumbnail_2.png',
          'title': 'Peaceful Piano',
          'description': 'Relax and indulge with beautiful piano pieces',
        },
        {
          'playListId' : 10000,
          'thumbnail': '/assets/images/playList/playList_thumbnail_3.png',
          'title': 'Peaceful Piano',
          'description': 'Relax and indulge with beautiful piano pieces',
        },
        {
          'playListId' : 10000,
          'thumbnail': '/assets/images/playList/playList_thumbnail_4.png',
          'title': 'Peaceful Piano',
          'description': 'Relax and indulge with beautiful piano pieces',
        },
        {
          'playListId' : 10000,
          'thumbnail': '/assets/images/playList/playList_thumbnail_5.png',
          'title': 'Peaceful Piano',
          'description': 'Relax and indulge with beautiful piano pieces',
        },
        {
          'playListId' : 10000,
          'thumbnail': '/assets/images/playList/playList_thumbnail_6.png',
          'title': 'Peaceful Piano',
          'description': 'Relax and indulge with beautiful piano pieces',
        },
        {
          'playListId' : 10000,
          'thumbnail': '/assets/images/playList/playList_thumbnail_7.png',
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
          'thumbnail': '/assets/images/playList/playList_thumbnail_2.png',
          'title': 'Peaceful Piano',
          'description': 'Relax and indulge with beautiful piano pieces',
        },
        {
          'playListId' : 10000,
          'thumbnail': '/assets/images/playList/playList_thumbnail_2.png',
          'title': 'Peaceful Piano',
          'description': 'Relax and indulge with beautiful piano pieces',
        },
        {
          'playListId' : 10000,
          'thumbnail': '/assets/images/playList/playList_thumbnail_2.png',
          'title': 'Peaceful Piano',
          'description': 'Relax and indulge with beautiful piano pieces',
        },
        {
          'playListId' : 10000,
          'thumbnail': '/assets/images/playList/playList_thumbnail_2.png',
          'title': 'Peaceful Piano',
          'description': 'Relax and indulge with beautiful piano pieces',
        },
      ]
    },
  ])


  return (
    <div className="content-layout">
      <Topbar path={path} userService = {userService}/>
      <ContentSetion>
        <div className="content-banner-layout">
          <MainSlider />
          <Rank RecommendationService = {RecommendationService}/>
        </div>
        <div className="content-album-layout">
          {recommendedPlayList.map((item) => {
            return (<AlbumItem playList={item}/>)
          })}
        </div>
      </ContentSetion>
    </div>

  );
}

export default MainContentLayout;
