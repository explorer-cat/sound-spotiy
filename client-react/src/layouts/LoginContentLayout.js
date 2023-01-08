import React from 'react';
import SignIn from "../componets/login/signIn/SignIn";
import SignUp from '../componets/login/signUp/SignUp';
import SignUpForm from "../componets/login/signUp/SignUpForm";
import './LoginContentLayout.scss'



/*메인 화면 컴포넌트 */
function LoginContentLayout({path,userService}) {
  //메인화면 카테고리별 추천 플레이리스트

  if(path === "/signIn") {
    return(
        <div className="login-content-layout">
          <SignIn userService = {userService} />
        </div>
    )
  } else if(path === "/signUp") {
    return(
        <div className="login-content-layout">
          <SignUp userService = {userService} />
        </div>
    )
  } else if(path === "/signUp/create") {
    return(
        <div className="login-content-layout">
          <SignUpForm userService = {userService} />
        </div>
    )
  }
}

export default LoginContentLayout;
