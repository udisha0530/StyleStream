import {React,useState} from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import SignIn from './components/Signin';
import SignUp from './components/Register';
import Home from './components/Home';
import Feed from './components/explore'
import './App.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/signin" />} />
          <Route path="/explore" element={isLoggedIn ? <Feed /> : <Navigate to="/signin" />} /> 
          <Route path="/" element={<Navigate to="/signin" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
