import React from 'react';
import './Home.scss'
import Sidebar from '../componets/menu/Sidebar';
import MainContentLayout from "../layouts/MainContentLayout";

function Home({path}) {
  console.log(`Home Component Render, params : ${path}`);

  return (
    <div className = 'left-area'>
      <Sidebar />
      <div className = "right-area">
        <MainContentLayout path = {path}/>
      </div>
    </div>
  );
}

export default Home;
