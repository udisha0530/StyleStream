import React from 'react';
import './QuizModal.css'; // Create a CSS file for modal styling
import Quiz from './Quiz'; // Import the Quiz component

const QuizModal = ({ closeQuiz }) => {
  return (
    <div className="quiz-modal">
      <div className="quiz-modal__content">
        <span className="quiz-modal__close" onClick={closeQuiz}>&times;</span>
        <Quiz />
      </div>
    </div>
  );
};

export default QuizModal;
