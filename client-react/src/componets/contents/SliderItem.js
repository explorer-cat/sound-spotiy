import React from 'react';
import './SliderItem.scss'


function SliderItem() {
  return (
    <div className = "slider-item-content">
      <div className = "item-title-content">
        <div>
          <span>연말 분위기 낭낭한 부드러운 팝</span>
        </div>
        <div>
          총 15곡<span>ㅣ</span>2022.11.13
        </div>
        <div>
          <img src = "assets/images/play-alt.png" />
        </div>
      </div>
      <div className = "item-album-content">
        <div>
          <img src = "assets/images/album/album1.jpeg" />
          <div>
            <span>Tokyo</span>
            <span>lee si young</span>
          </div>
        </div>
        <div>
          <img src = "assets/images/album/album2.jpeg" />
          <div>
            <span>DNA</span>
            <span>kendrick Lamar</span>
          </div>
        </div>
        <div>
          <img src = "assets/images/album/album3.jpeg" />
          <div>
            <span>REDMERCEDES</span>
            <span>Amine</span>
          </div>
        </div>
        <div>
          <img src = "assets/images/album/album4.jpeg" />
          <div>
            <span>Bubble Butt</span>
            <span>Major Lazer</span>
          </div>
        </div>
        <div>
          <img src = "assets/images/album/album5.jpeg" />
          <div>
            <span>touch grass(feat. Yung Grass)</span>
            <span>Bbno</span>
          </div>
        </div>
        <div>
          <img src = "assets/images/album/album6.jpeg" />
          <div>
            <span>Muwop(feat. Gucci Mane)</span>
            <span>Latto</span>
          </div>
        </div>
        <div>
          <img src = "assets/images/album/album7.jpeg" />
          <div>
            <span>jimmy Cooks(feat.21 Savage)</span>
            <span>Drake</span>
          </div>
        </div>
        <div>
          <img src = "assets/images/album/album8.jpeg" />
          <div>
            <span>Throw Fits</span>
            <span>London On Da Track</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderItem;
