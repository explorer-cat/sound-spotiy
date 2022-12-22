import React from 'react';
import styled from 'styled-components';

const MenuButton = styled.a`
  &:hover{  
    color : #fff;
    transition:all 0.4s;
  }
  color:#a7a7a7;
  font-size:14px;
  font-weight:700;
  display: flex;
  gap: 16px;
  height: 40px;
  align-items: center;
  cursor: pointer;
`

const MenuIconImage = styled.img`
  width:18px;
  height:18px;
`

const MenuText = styled.span` 
`


function MenuItem({img,name}) {
  return (
    <MenuButton>
      <MenuIconImage src={img}/>
      <MenuText>{name}</MenuText>
    </MenuButton>
  );
}

export default MenuItem;
