import React from 'react';
import styled from 'styled-components';
import Sidebar from '../componets/menu/Sidebar';
import Topbar from "../componets/menu/Topbar";


const HomeDiv = styled.div`
  display:flex;
  width:100%;
  height:100%;
`

const Content = styled.div`
  display : flex;
  width:100%;
  height:100%;
  background-color:blue;
`

function Home() {
  return (
    <HomeDiv>
        <Sidebar />
      <Content>
        <Topbar />
      </Content>
    </HomeDiv>
  );
}

export default Home;
