import React from 'react';
import styled from 'styled-components';
import './AlbumItem.scss'

const AlubmGrid = styled.div`
  padding-top:24px;
`

const GridContainer = styled.div`
     display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 24px;
    padding-top: 24px;
    max-width: fit-content;
`

const AlbumItemTitle = styled.span`
  color:white;
  font-weight:800;
  font-size:18px;
  margin-top:12px;
`

const AlubmItemDescription = styled.span`
  color:#a7a7a7;

`

function AlbumItem({playList}) {

  return (
      <AlubmGrid>
        <section>
          <div className = "albumCategoryTitle">{playList.category}</div>
          <GridContainer>
            {playList['item'].map((data) => {
              return(
                <div className='album-item-layout'>
                  <img src = {data.thumbnail}/>
                  <div className = "album-content-title">
                    <AlbumItemTitle >{data.title}</AlbumItemTitle>
                  </div>
                  <div className = "album-content-description">
                    <AlubmItemDescription>{data.description}</AlubmItemDescription>
                  </div>
                </div>
              );
            })}
          </GridContainer>
        </section>
      </AlubmGrid>
  );
}

export default AlbumItem;
