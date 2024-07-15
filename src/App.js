import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/Signin';
import SignUp from './components/Register';
import Home from './components/Home';
import Feed from './components/explore';
import GamesZone from './components/GamesZone';
import Profile from './components/profile';
import Shop from './components/shop';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        setUser({
          name: 'Willow_1915',
          profilePicture: 'profile/profile.jpg',
          posts: 120,
          followers: 500,
          following: 180,
          postsImages: [
            'profile/post1.jpg',
            'profile/post2.jpg',
            'profile/post3.jpg',
            'profile/post4.jpg',
            'profile/post5.jpg',
            'profile/post6.jpg',
            'profile/post7.jpg',
            'profile/post8.jpg',
            'profile/post9.jpg',
          ],
        });
      }, 1000);
    }
  }, [isLoggedIn]);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/signin" />} />
          <Route path="/explore" element={isLoggedIn ? <Feed /> : <Navigate to="/signin" />} /> 
          <Route path="/gamezone" element={isLoggedIn ? <GamesZone /> : <Navigate to="/signin" />} />
          <Route path="/shop" element={isLoggedIn ? <Shop /> : <Navigate to="/signin" />} /> 
          
          <Route path="/profile" element={isLoggedIn ? <Profile user={user} /> : <Navigate to="/signin" />} /> 
          <Route path="/" element={<Navigate to="/signin" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
