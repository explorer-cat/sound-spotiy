import React from 'react';
import styled from 'styled-components';
import MenuItem from "./MenuItem";
import './Sidebar.scss'



/*각 페이지 별로 메뉴 탭이 선택되도록 작업해야함.*/

function Sidebar() {
  return (
    <nav className = "sidebar">
      <div className = "side-container">
        <div className = 'logo-area'>
          <img src = "assets/images/logo.png"/>
        </div>
        <ul>
          <li>
            <MenuItem img = {"assets/images/home.png"} name = "홈" selected = {true}/>
          </li>
          <li>
            <MenuItem img = {"assets/images/search.png"} name = "검색하기"/>
          </li>
          <li>
            <MenuItem img = {"assets/images/book.png"} name = "내 라이브러리"/>
          </li>
        </ul>
        <ul>
          <li>
            <MenuItem img = {"assets/images/album-circle-plus.png"} name = "플레이 리스트 만들기"/>
          </li>
          <li>
            <MenuItem img = {"assets/images/heart.png"} name = "좋아요를 표시한 곡"/>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
