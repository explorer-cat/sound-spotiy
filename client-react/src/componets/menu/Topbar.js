import React from 'react';
import styled from 'styled-components';
import './Topbar.scss';

function Topbar() {
  return (
    <div className = 'top-bar-layout'>
      <div class = "top-bar-left-menu">
        <img src = {"assets/images/caret-left.png"}/>
        <img src = {"assets/images/caret-right.png"}/>
      </div>
      <div className="top-bar-right-menu">
          <span>가입하기</span>
          <span>로그인하기</span>
      </div>
    </div>
  );
}

export default Topbar;
