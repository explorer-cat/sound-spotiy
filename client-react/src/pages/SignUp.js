import React from 'react';
import './SignIn.scss'
import LoginContentLayout from "../layouts/LoginContentLayout";

function SignUp({path,userService}) {
  console.log(`SignUp Component Render, params : ${path}`);

  return (
    <div className = 'public-content-layout'>
        <LoginContentLayout path = {path} userService = {userService} />
    </div>
  );
}

export default SignUp;
