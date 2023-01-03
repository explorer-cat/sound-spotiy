import React from 'react';
import './App.css';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp'
import UserService from "./services/UserService";


function App() {
    const navigate = useNavigate();
    const kakaoAPI = {
        'clientId': 'ad874f9a277a8d0b35591cbf40f5bd82',
        'redirectURL': 'http://localhost:8080/oauth/kakao',
    }
    const User = new UserService(kakaoAPI);
    console.log('navigate', navigate)

    // React.useEffect(() => {
    //   navigate('/home'); // 마운트 될 때 /home 페이지로 이동.
    // }, [])


    return (
        <Routes>
            <Route path="/" element={<Home path="/" userService={User}/>}/>
            <Route path="/search" element={<Home path="/search" userService={User}/>}/>
            <Route path="/signIn" element={<SignIn path="/signIn" userService={User}/>}/>
            <Route path="/signUp" element={<SignUp path="/signUp" userService={User}/>}/>

        </Routes>
    );
}

export default App;
