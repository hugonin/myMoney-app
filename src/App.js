import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import SignUp from "./pages/signup/SignUp"
import Navbar from './components/navbar/Navbar';


import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
