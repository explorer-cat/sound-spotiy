import React from 'react';
import Slider from "react-slick";
import SliderItem from "./SliderItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";
import styled from 'styled-components';

function MainSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [sliderInfo, setSliderInfo] = React.useState([
    {
      'title': '연말 분위기 낭낭한 부드러운 팝',
      'listCount': 15,
      'updated': '2022.11.13',
      'bannerColor': '#4c4863',
      'albumList': [
        {
          'thumbnail': 'assets/images/album/album1.jpeg',
          'title': 'Tokyo',
          'artist': 'lee si young',
        },
        {
          'thumbnail': 'assets/images/album/album2.jpeg',
          'title': 'DNA',
          'artist': 'kendrick Lamar',
        },
        {
          'thumbnail': 'assets/images/album/album3.jpeg',
          'title': 'REDMERCEDES',
          'artist': 'Amine',
        },
        {
          'thumbnail': 'assets/images/album/album4.jpeg',
          'title': 'Bubble Butt',
          'artist': 'Major Lazer',
        },
        {
          'thumbnail': 'assets/images/album/album5.jpeg',
          'title': 'touch grass(feat. Yung Grass)',
          'artist': 'Bbno',
        },
        {
          'thumbnail': 'assets/images/album/album6.jpeg',
          'title': 'Muwop(feat. Gucci Mane)',
          'artist': 'Latto',
        },
        {
          'thumbnail': 'assets/images/album/album7.jpeg',
          'title': 'jimmy Cooks(feat.21 Savage)',
          'artist': 'Drake',
        },
        {
          'thumbnail': 'assets/images/album/album8.jpeg',
          'title': 'Throw Fits',
          'artist': 'London On Da Track',
        },
      ]
    },
    {
      'title': '기분이 바로 좋아지는 국내 음악 😄',
      'listCount': 12,
      'updated': '2022.12.23',
      'bannerColor': '#61484b',
      'albumList': [
        {
          'thumbnail': 'assets/images/album/album1.jpeg',
          'title': 'Tokyo',
          'artist': 'lee si young',
        },
        {
          'thumbnail': 'assets/images/album/album2.jpeg',
          'title': 'DNA',
          'artist': 'kendrick Lamar',
        },
        {
          'thumbnail': 'assets/images/album/album3.jpeg',
          'title': 'REDMERCEDES',
          'artist': 'Amine',
        },
        {
          'thumbnail': 'assets/images/album/album4.jpeg',
          'title': 'Bubble Butt',
          'artist': 'Major Lazer',
        },
        {
          'thumbnail': 'assets/images/album/album5.jpeg',
          'title': 'touch grass(feat. Yung Grass)',
          'artist': 'Bbno',
        },
        {
          'thumbnail': 'assets/images/album/album6.jpeg',
          'title': 'Muwop(feat. Gucci Mane)',
          'artist': 'Latto',
        },
        {
          'thumbnail': 'assets/images/album/album7.jpeg',
          'title': 'jimmy Cooks(feat.21 Savage)',
          'artist': 'Drake',
        },
        {
          'thumbnail': 'assets/images/album/album8.jpeg',
          'title': 'Throw Fits',
          'artist': 'London On Da Track',
        },
      ]
    },
    {
      'title': '급 추워진 날씨 나는 인디를 틀었다 🍂',
      'listCount': 17,
      'updated': '2022.12.4',
      'bannerColor': '#465550',
      'albumList': [
        {
          'thumbnail': 'assets/images/album/album1.jpeg',
          'title': 'Tokyo',
          'artist': 'lee si young',
        },
        {
          'thumbnail': 'assets/images/album/album2.jpeg',
          'title': 'DNA',
          'artist': 'kendrick Lamar',
        },
        {
          'thumbnail': 'assets/images/album/album3.jpeg',
          'title': 'REDMERCEDES',
          'artist': 'Amine',
        },
        {
          'thumbnail': 'assets/images/album/album4.jpeg',
          'title': 'Bubble Butt',
          'artist': 'Major Lazer',
        },
        {
          'thumbnail': 'assets/images/album/album5.jpeg',
          'title': 'touch grass(feat. Yung Grass)',
          'artist': 'Bbno',
        },
        {
          'thumbnail': 'assets/images/album/album6.jpeg',
          'title': 'Muwop(feat. Gucci Mane)',
          'artist': 'Latto',
        },
        {
          'thumbnail': 'assets/images/album/album7.jpeg',
          'title': 'jimmy Cooks(feat.21 Savage)',
          'artist': 'Drake',
        },
        {
          'thumbnail': 'assets/images/album/album8.jpeg',
          'title': 'Throw Fits',
          'artist': 'London On Da Track',
        },
      ]
    },
    {
      'title': '노동요는 K-POP이 짱이지 🔥',
      'listCount': 14,
      'updated': '2022.12.25',
      'bannerColor': '#444e62',
      'albumList': [
        {
          'thumbnail': 'assets/images/album/album1.jpeg',
          'title': 'Tokyo',
          'artist': 'lee si young',
        },
        {
          'thumbnail': 'assets/images/album/album2.jpeg',
          'title': 'DNA',
          'artist': 'kendrick Lamar',
        },
        {
          'thumbnail': 'assets/images/album/album3.jpeg',
          'title': 'REDMERCEDES',
          'artist': 'Amine',
        },
        {
          'thumbnail': 'assets/images/album/album4.jpeg',
          'title': 'Bubble Butt',
          'artist': 'Major Lazer',
        },
        {
          'thumbnail': 'assets/images/album/album5.jpeg',
          'title': 'touch grass(feat. Yung Grass)',
          'artist': 'Bbno',
        },
        {
          'thumbnail': 'assets/images/album/album6.jpeg',
          'title': 'Muwop(feat. Gucci Mane)',
          'artist': 'Latto',
        },
        {
          'thumbnail': 'assets/images/album/album7.jpeg',
          'title': 'jimmy Cooks(feat.21 Savage)',
          'artist': 'Drake',
        },
        {
          'thumbnail': 'assets/images/album/album8.jpeg',
          'title': 'Throw Fits',
          'artist': 'London On Da Track',
        },
      ]
    },
    {
      'title': '나의 헬스 철학은 EDM 💦',
      'listCount': 20,
      'updated': '2022.11.24',
      'bannerColor': '#61484b',
      'albumList': [
        {
          'thumbnail': 'assets/images/album/album1.jpeg',
          'title': 'Tokyo',
          'artist': 'lee si young',
        },
        {
          'thumbnail': 'assets/images/album/album2.jpeg',
          'title': 'DNA',
          'artist': 'kendrick Lamar',
        },
        {
          'thumbnail': 'assets/images/album/album3.jpeg',
          'title': 'REDMERCEDES',
          'artist': 'Amine',
        },
        {
          'thumbnail': 'assets/images/album/album4.jpeg',
          'title': 'Bubble Butt',
          'artist': 'Major Lazer',
        },
        {
          'thumbnail': 'assets/images/album/album5.jpeg',
          'title': 'touch grass(feat. Yung Grass)',
          'artist': 'Bbno',
        },
        {
          'thumbnail': 'assets/images/album/album6.jpeg',
          'title': 'Muwop(feat. Gucci Mane)',
          'artist': 'Latto',
        },
        {
          'thumbnail': 'assets/images/album/album7.jpeg',
          'title': 'jimmy Cooks(feat.21 Savage)',
          'artist': 'Drake',
        },
        {
          'thumbnail': 'assets/images/album/album8.jpeg',
          'title': 'Throw Fits',
          'artist': 'London On Da Track',
        },
      ]
    },
    {
      'title': '캔맥과 곁들이기 좋은 Chill 팝 🍺',
      'listCount': 12,
      'updated': '2022.12.15',
      'bannerColor': '#4c4863',
      'albumList': [
        {
          'thumbnail': 'assets/images/album/album1.jpeg',
          'title': 'Tokyo',
          'artist': 'lee si young',
        },
        {
          'thumbnail': 'assets/images/album/album2.jpeg',
          'title': 'DNA',
          'artist': 'kendrick Lamar',
        },
        {
          'thumbnail': 'assets/images/album/album3.jpeg',
          'title': 'REDMERCEDES',
          'artist': 'Amine',
        },
        {
          'thumbnail': 'assets/images/album/album4.jpeg',
          'title': 'Bubble Butt',
          'artist': 'Major Lazer',
        },
        {
          'thumbnail': 'assets/images/album/album5.jpeg',
          'title': 'touch grass(feat. Yung Grass)',
          'artist': 'Bbno',
        },
        {
          'thumbnail': 'assets/images/album/album6.jpeg',
          'title': 'Muwop(feat. Gucci Mane)',
          'artist': 'Latto',
        },
        {
          'thumbnail': 'assets/images/album/album7.jpeg',
          'title': 'jimmy Cooks(feat.21 Savage)',
          'artist': 'Drake',
        },
        {
          'thumbnail': 'assets/images/album/album8.jpeg',
          'title': 'Throw Fits',
          'artist': 'London On Da Track',
        },
      ]
    },
  ])


  return (
    <a className="slide-content">
      <Slider {...settings}>
        {sliderInfo.map((item) => {
          return (
            <>
              <SliderItem sliderInfo={item}/>
            </>);
        })}

      </Slider>
    </a>
  );
}

export default MainSlider;
