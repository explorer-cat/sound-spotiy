import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/search" element={<Home />} />
      <Route path = "/library" element={<Home />} />
      <Route path = "/" element={<Home />} />
    </Routes>
  );
}

export default App;
