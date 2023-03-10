import React from 'react';
import './SignIn.scss'
import LoginContentLayout from "../layouts/LoginContentLayout";

function SignIn({path,userService}) {
  console.log(`Home Component Render, params : ${path}`);

  return (
    <div className = 'public-content-layout'>
        <LoginContentLayout path = {path} />
    </div>
  );
}

export default SignIn;
