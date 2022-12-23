import React from 'react';
import './Home.scss'
import Sidebar from '../componets/menu/Sidebar';
import Topbar from "../componets/menu/Topbar";
import ContentLayout from "../layouts/ContentLayout";

function Home() {
  console.log('Home Component Render');
  return (
    <div className = 'left-area'>
      <Sidebar />
      <div className = "right-area">
        <Topbar />
        <ContentLayout />
      </div>
    </div>
  );
}

export default Home;
