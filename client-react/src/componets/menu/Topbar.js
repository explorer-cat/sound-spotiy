import React from 'react';
import './Topbar.scss';
import {useParams, useLocation, NavLink} from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: -webkit-link;
  cursor: pointer;
  text-decoration: none;
  color:white;
  margin-right: 16px;
  font-weight: 600;
  font-size: 16px;
`;


function Topbar({path,userService}) {
    const user = userService;

    return (
        <div className='top-bar-layout'>
            <div class="top-bar-left-menu">
                <img src={"assets/images/caret-left.png"}/>
                <img src={"assets/images/caret-right.png"}/>
            </div>
            {path === '/search' ? <span>검색 위치가 들어갈 곳 입니다.</span> : null}
            <div className="top-bar-right-menu">
                <StyledLink to = "/signUp">가입하기</StyledLink>
                <StyledLink to = "/signIn">로그인하기</StyledLink>
            </div>
        </div>
    );
}

export default Topbar;
