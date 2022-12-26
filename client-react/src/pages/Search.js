import React from 'react';
import './Home.scss'
import Sidebar from '../componets/menu/Sidebar';
import Topbar from "../componets/menu/Topbar";
import ContentLayout from "../layouts/ContentLayout";
import { Route, Routes,useNavigate } from 'react-router-dom';

function Search() {
  console.log('Search Page Render');

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

export default Search;
