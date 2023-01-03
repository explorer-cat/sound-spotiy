import React from 'react';
import styled from 'styled-components';
import './SignIn.scss'

function SignIn() {

    return (
            <div className = "login-container">
                <div className = "login-account-container">
                    <p>이메일 주소</p>
                    <input type="text" placeholder="이메일 주소 또는 사용자 이름" />
                </div>
                <div className = "login-account-container">
                    <p>비밀번호</p>
                    <input type="password" placeholder="비밀번호" />
                </div>
                <div className = "login-help-container">
                    <span>비밀번호를 잊었나요?</span>
                </div>
                <button id = "goLogin">로그인</button>

                <div className ="socialLogin-container">
                    <a id="btn-login-naver" className ="btn-login-naver" href="#">
                        <img src="https://static.nid.naver.com/oauth/button_g.PNG?version=js-2.0.1" height="44"/>
                    </a>
                    <a id="btn-login-kakao" href="#" className="btn-login-kakao">
                        {/*<span className="hidden">카카오 계정으로 로그인</span>*/}
                    </a>
                </div>
            </div>
    );
}

export default SignIn;
