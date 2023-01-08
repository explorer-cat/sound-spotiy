import React from 'react';
import './App.css';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp'
import UserService from "./services/UserService";
import SignUpForm from "./componets/login/signUp/SignUpForm";
import RecommendationService from "./services/RecommendationService";


function App() {
    const navigate = useNavigate();

    const User = new UserService( {
        'clientId': 'ad874f9a277a8d0b35591cbf40f5bd82',
        'redirectURL': 'http://localhost:8080/oauth/kakao',
    });

    const Recommendation = new RecommendationService();

    console.log('Recommendation',Recommendation.getRecommendationMusic())

    return (
        <Routes>
            <Route path="/" element={<Home path="/" userService={User} RecommendationService = {Recommendation}/>}/>
            <Route path="/search" element={<Home path="/search" userService={User}/>}/>
            <Route path="/signIn" element={<SignIn path="/signIn" userService={User}/>}/>
            <Route path="/signUp" element={<SignUp path="/signUp" userService={User}/>}/>
            <Route path="/signUp/create" element={<SignUp path="/signUp/create" userService={User}/>}/>
        </Routes>
    );
}

export default App;
