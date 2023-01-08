import React from 'react';
import {useParams, useLocation, NavLink} from 'react-router-dom';
import styled from 'styled-components';
import './SignUp.scss'


const WelcomeTitle = styled.div`
  text-align: center;
  height:100px;
`

const LogoImg = styled.img`
  height:42px;
  margin:40px 0px;
`


function SignUp({path,userService}) {
    console.log('userService',userService)

    /**
     * @title 카카오 회원가입 버튼 클릭.
     */
    const handleClickKakaoLogin = () => {
        //토큰 가져오기
        userService.getKakaoToken();
    }


    return (
            <div className = "user-container">
                <div className ="signup-header">
                    <LogoImg src = "assets/images/logo.png"/>
                    <WelcomeTitle>
                        <span>다음 회원가입 중 하나를 선택해주세요.</span>
                    </WelcomeTitle>
                </div>
                <div className = "signup-wrap">
                    <div id="btn-login-kakao"  onClick={handleClickKakaoLogin} className="btn-signupkakao">
                        <span className="hidden"></span>
                    </div>
                </div>
            </div>
    );
}

export default SignUp;
