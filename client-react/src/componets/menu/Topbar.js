import React from 'react';
import styled from 'styled-components';
import './Topbar.scss';
import {NavLink} from "react-router-dom";

function Topbar({path}) {

  console.log(`TopBar() render , parameter : ${path}`)
  return (
    <div className = 'top-bar-layout'>
      <div class = "top-bar-left-menu">
        <img src = {"assets/images/caret-left.png"}/>
        <img src = {"assets/images/caret-right.png"}/>
      </div>
      {path === '/search' ? <span>검색 위치가 들어갈 곳 입니다.</span> : null}
      <div className="top-bar-right-menu">
          <span>가입하기</span>
          <span>로그인하기</span>
      </div>
    </div>
  );
}

export default Topbar;
