import React from 'react';
import SignIn from "../componets/login/SignIn";
import './LoginContentLayout.scss'


/*메인 화면 컴포넌트 */
function LoginContentLayout({path}) {
  //메인화면 카테고리별 추천 플레이리스트

  return (
    <div className="login-content-layout">
      <SignIn />
    </div>

  );
}

export default LoginContentLayout;
