import React, {useEffect} from 'react';
import styled from 'styled-components';
import RecommendationService from "../../services/RecommendationService";


const RealTimeRankTitle = styled.div`
    padding : 12px 0px;
    span {
      font-size: 18px;
      color: white;
      font-weight: bold;
    }
`


const RealTimeRank = styled.div`
  width: 100%;
  box-sizing: border-box;
  min-width: 340px;
  max-width: 395px;
  margin-left: 40px;
`

const AlbumThumbnail = styled.img`
  border-radius: 6px;
`

const RankItemWrap = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 12px;
  &:hover {
    transform: scale(1.01);
     cursor: pointer;
  }
`

const RankAlbumThumbnail = styled.div`
  display: block;
  margin-right: 12px;
`

const RankAlbumContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 16px;
  color: #E9E8E8;
`

const AlbumTitle = styled.div`
  margin-bottom: 4px;
`
const AlbumTitleText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
  font-size: 16px;
`


const AlbumArtist = styled.div`
  margin-bottom: 4px;
`
const AlbumArtistText = styled.span`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
  font-size: 14px;
  align-items: center;
  span {
    margin-left:4px;
    font-size:12px;
  }
  p{
    margin-left: 4px;
    font-size: 10px;
  }
`

/* 실시간 차트 컴포넌트 */
function Rank({RecommendationService}) {
    const [recommendationList,setRecommendationList] = React.useState([]);

    useEffect(() => {
        const list = RecommendationService.getRecommendationMusic();
        setRecommendationList(list)
    },[])



    // console.log('recommendationList',recommendationList)
    return (
        <RealTimeRank>
            <RealTimeRankTitle>
                <span>
                    빠른선곡
                </span>
            </RealTimeRankTitle>

            {recommendationList.map((value, index)=> {
                return(
                    <RankItemWrap>
                        <RankAlbumThumbnail>
                            <AlbumThumbnail src={value.thumbnail}/>
                        </RankAlbumThumbnail>
                        <RankAlbumContainer>
                            <AlbumTitle>
                                <AlbumTitleText>{value.title}</AlbumTitleText>
                            </AlbumTitle>
                            <AlbumArtist>
                                <AlbumArtistText>
                                    {value.artist}
                                    <p>●</p>
                                    <span>
                                        {value.albumInfo.title}
                                    </span>
                                </AlbumArtistText>
                            </AlbumArtist>
                        </RankAlbumContainer>
                    </RankItemWrap>
                )
            })}

        </RealTimeRank>
    );
}

export default Rank;
