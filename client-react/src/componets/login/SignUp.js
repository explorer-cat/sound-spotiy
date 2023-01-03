import React from 'react';
import styled from 'styled-components';
import './SignUp.scss'

function SignUp() {

    return (
            <div className = "signUp-container">
                <div className ="socialSignUp-container">
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

export default SignUp;
