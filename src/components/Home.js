// Home.jsx
import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar.jsx is in the same directory
import './Home.css'; // You can style your Home component as needed
import  homeimage from './images/homepage1.png';

function Home() {
  return (
    <div className="home">
      <Navbar /> {/* Include the Navbar component */}
      <div className="home__content">
                <img src={homeimage} alt="Sign In" />
      </div>
      </div>
  );
}

export default Home;
