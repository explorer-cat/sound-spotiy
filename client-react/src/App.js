import React from 'react';
import './App.css';
import { Route, Routes,useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search'


function App() {
  const navigate = useNavigate();
  console.log('navigate',navigate)

  // React.useEffect(() => {
  //   navigate('/home'); // 마운트 될 때 /home 페이지로 이동.
  // }, [])

  return (
    <Routes>
      <Route path = "/" element={<Home path = "/"/>} />
      <Route path = "/search" element={<Home path = "/search"/>} />
    </Routes>
  );
}

export default App;
