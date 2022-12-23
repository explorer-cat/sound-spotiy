import React from 'react';
import styled from 'styled-components';
import './MenuItem.scss';

const MenuButton = styled.a`
  &:hover{  
    color : #fff;
    transition:all 0.4s;
  }
  &:active{
    transform:scale(0.97,0.97);
  }
  color: ${(props) => props.selected ? "#fff" : "#a7a7a7"};
  font-size:14px;
  font-weight:700;
  display: flex;
  gap: 16px;
  height: 40px;
  align-items: center;
  cursor: pointer;
`


/**
 *
 * @param img
 * @param name
 * @param selected
 * @returns {JSX.Element}
 * @constructor
 */

function MenuItem({img,name,selected}) {
  return (
    <MenuButton className = "menu-item-btn" selected = {selected}>
      <img src={img}/>
      <span>{name}</span>
    </MenuButton>
  );
}

export default MenuItem;
