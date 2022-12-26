import React from 'react';
import './Home.scss'
import Sidebar from '../componets/menu/Sidebar';
import ContentLayout from "../layouts/ContentLayout";

function Home({path}) {
  console.log(`Home Component Render, params : ${path}`);

  return (
    <div className = 'left-area'>
      <Sidebar />
      <div className = "right-area">
        <ContentLayout path = {path}/>
      </div>
    </div>
  );
}

export default Home;
