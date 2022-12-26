import React from 'react';
import styled from 'styled-components';
import './Sidebar.scss'
import {useParams, useLocation, NavLink} from 'react-router-dom';



const Sidebar  = React.memo(function Sidebar({path}) {
  const publicMenu = [
    {img : 'assets/images/home.png', name : '홈', path : '/'},
    {img : 'assets/images/search.png', name : '검색', path : '/search'},
    {img : 'assets/images/book.png', name : '내 라이브러리', path : '/library'},
  ]
  const customMenu = [
    {img : 'assets/images/album-circle-plus.png', name : '플레이리스트 만들기', path : '/createPlayList'},
    {img : 'assets/images/heart.png', name : '좋아요를 표시한곡 ', path : '/likeList'},
  ]



  return (
    <nav className = "sidebar">
      <div className = "side-container">
        <div className = 'logo-area'>
          <img src = "assets/images/logo.png"/>
        </div>
        <ul>
          {publicMenu.map((item,index) => {
            return (
              <li>
                <NavLink  className={({ isActive }) => "menu-item-btn nav-link" + (isActive ? " activated" : "")}  key={index} to = {item.path}>
                  <img src={item.img}/>
                  <span>{item.name}</span>
                </NavLink>
             </li>
            )
          })}
        </ul>
        <ul>
          {customMenu.map((item,index) => {
            return (
              <li>
                <NavLink className={({ isActive }) => "menu-item-btn nav-link" + (isActive ? " activated" : "")} key={index} to = {item.path}>
                  <img src={item.img}/>
                  <span>{item.name}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  );
})

export default Sidebar;
