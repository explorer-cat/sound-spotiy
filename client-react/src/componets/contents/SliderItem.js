import React from 'react';
import './SliderItem.scss'
import styled from 'styled-components';


const SliderItemContent = styled.div`
    background: ${props => props.backgroundColor};
`


function SliderItem({sliderInfo}) {
  return (
    <SliderItemContent backgroundColor = {sliderInfo.bannerColor} className = "slider-item-content">
      <div className = "item-title-content">
        <div>
          <span>{sliderInfo.title}</span>
        </div>
        <div>
          총 {sliderInfo.listCount}곡<span>ㅣ</span>{sliderInfo.updated}
        </div>
        <div>
          <img src = "assets/images/play-alt.png" />
        </div>
      </div>
      <div className="item-album-content">
        {sliderInfo.albumList.map((data) => {
          return (
            <div>
              <img src={data.thumbnail}/>
              <div>
                <span>{data.title}</span>
                <span>{data.artist}</span>
              </div>
            </div>)
        })}
      </div>
    </SliderItemContent>
  );
}

export default SliderItem;
