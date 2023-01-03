import React from 'react';
import './Home.scss'
import Sidebar from '../componets/menu/Sidebar';
import MainContentLayout from "../layouts/MainContentLayout";

function Home({path,userService}) {
  console.log(`Home Component Render, params : ${path}`);

  return (
    <div className = 'left-area'>
      <Sidebar userService = {userService} />
      <div className = "right-area">
        <MainContentLayout path = {path} userService = {userService} />
      </div>
    </div>
  );
}

export default Home;
