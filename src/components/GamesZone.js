// GamesZone.js
import React, { useState } from 'react';
import './activity.css';
import Navbar from './Navbar';

const GamesZone = () => {
    const games = [
        {
            name: "Fashion Store",
            url: "https://www.crazygames.com/game/fashion-store-shop-tycoon",
            logo: "logo/fashion-store.png"
        },
        {
            name: "Tic Tac Toe",
            url: " https://cdn.htmlgames.com/TicTacToe/",
            logo: "logo/tictactoe.jpeg"
        },
        {
            name: "Skydom",
            url: "https://www.crazygames.com/game/skydom",
            logo: "logo/skydom.png"
        },
        {
            name: "Fashion Designer",
            url: "https://www.dressup.com/game/fashion-designer-new-york",
            logo: "logo/fashion-designer.png"
        },
        {
            name: "Wedding Dress-up",
            url:  "https://y8.com/embed/girly_indian_wedding",
            logo: "logo/weddinggame.jpg"
        },
  
        {
            name: "Wordle",
            url: "https://www.nytimes.com/games/wordle",
            logo: "logo/wordle.jpg"
        },
        {
            name: "Solitaire",
            url: "https://cdn.htmlgames.com/MontanaSolitaire/",
            logo: "logo/solitaire.jpg"
        },
        {
            name: "Tetris Puzzle",
            url: "https://cdn.htmlgames.com/TetrisPuzzle/",
            logo: "logo/tetris.jpg"
        },
        {
            name: "Highway Cars",
            url: "https://www.onlinegames.io/highway-cars/",
            logo: "logo/highway-cars.jpg"
        },
    ];

    const [selectedGame, setSelectedGame] = useState(null);
    const [points, setPoints] = useState(0);

    const handleGameClick = (game) => {
        if (selectedGame === null || selectedGame.name !== game.name) {
            setSelectedGame(game);
            setPoints(points + 10); // Increment points by 10 for each game click
        } else {
            window.open(game.url, '_blank'); 
        }
    };

    const handleCloseClick = () => {
        setSelectedGame(null);
    };

    return (
        <>  <Navbar />
        <div className="game-body">
            <div className="games-page">
                <div className="games-container">
                    <h2 className="score-offers-title">Score points to get exciting offers</h2>
                    <h2 className="games-heading">Let's Play!</h2>
                    <div className="games-list">
                        {games.map(game => (
                            <div key={game.name} className='game'>
                                <div className="game-button" onClick={() => handleGameClick(game)}>
                                    <img
                                        src={game.logo}
                                        alt={`${game.name} Logo`}
                                        className="game-logo"
                                    />
                                    <span className="game-name">{game.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {selectedGame && (
                    <div className="game-details">
                        <div className="game-details-header">
                            <h3 className="game-details-title">{selectedGame.name}</h3>
                            <button className="close-button" onClick={handleCloseClick}>Close</button>
                        </div>
                        <iframe
                            className="game-iframe"
                            src={selectedGame.url}
                            title={selectedGame.name}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
                <div className="points-display">
                    <h3>Points: {points}</h3>
                </div>
            </div>
        </div>
        </>
    );
};

export default GamesZone;
