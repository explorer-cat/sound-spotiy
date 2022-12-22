import React from 'react';
import styled from 'styled-components';
import MenuItem from "./MenuItem";


const Side = styled.nav`
  height : 100%;
  max-width: 384px;
  width: 384px;
  background-color : black;
  color : white;
`

const Container = styled.div`
  display: block;
  height:100%;
  padding:24px;
`

const LogoContain = styled.div`
  display:block;
  width:100%;
  height:80px;
`

const LogoImg = styled.img`
  width:120px;
  height:auto;
`

const MenuParentTab1 = styled.ul`

`

const MenuParentTab2 = styled.ul`
  padding: 24px 0px;

`

const MenuChild = styled.li`
`

/*각 페이지 별로 메뉴 탭이 선택되도록 작업해야함.*/

function Sidebar() {
  return (
    <Side>
      <Container>
        {/*<Logo> L*/}
        <LogoContain>
          <LogoImg src = "assets/images/logo.png"/>
        </LogoContain>
        {/*</Logo>*/}
        <MenuParentTab1>
          <MenuChild>
            <MenuItem img = {"assets/images/home.png"} name = "홈"/>
          </MenuChild>
          <MenuChild>
            <MenuItem img = {"assets/images/search.png"} name = "검색하기"/>
          </MenuChild>
          <MenuChild>
            <MenuItem img = {"assets/images/book.png"} name = "내 라이브러리"/>
          </MenuChild>
        </MenuParentTab1>

        <MenuParentTab2>
          <MenuChild>
            <MenuItem img = {"assets/images/album-circle-plus.png"} name = "플레이 리스트 만들기"/>
          </MenuChild>
          <MenuChild>
            <MenuItem img = {"assets/images/heart.png"} name = "좋아요를 표시한 곡"/>
          </MenuChild>
        </MenuParentTab2>


      </Container>
    </Side>
  );
}

export default Sidebar;
