// src/Quiz.js
import React, { useState } from 'react';
import Question from './question';
import products from './product';
import { Button, Container, Typography, Grid, Card, CardContent, CardMedia,Dialog,DialogContent,DialogTitle } from '@mui/material';
import { styled } from '@mui/system';

const CustomButton = styled(Button)({
  backgroundColor: '#ff0099',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#cc007a',
  },
});

const questions = [
  {
    question: 'Which type of footwear do you wear most often?',
    options: ['Sneakers', 'Boots', 'Heels', 'Flats'],
  },
  {
    question: 'What is your go-to outfit for a casual day out?',
    options: ['Jeans and a T-shirt', 'A flowy dress', 'Athleisure wear', 'A stylish jumpsuit'],
  },
  {
    question: 'How would you describe your overall style?',
    options: ['Classic', 'Bohemian', 'Sporty', 'Trendy'],
  },
  {
    question: 'Which accessory do you never leave home without?',
    options: ['A statement necklace', 'A stylish hat', 'A pair of sunglasses', 'A designer handbag'],
  },
  {
    question: 'What is your preferred color palette for your wardrobe?',
    options: ['Neutral tones', 'Bright and bold colors', 'Pastels', 'Dark and edgy hues'],
  },
  {
    question: 'How do you feel about prints and patterns in your outfits?',
    options: ['I love them and wear them often', 'I prefer solid colors', 'I like subtle patterns', 'I mix and match prints regularly'],
  }
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOptionChange = (event) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleSubmit = () => {
    setShowResults(true);
    calculateRecommendations();
    setOpenDialog(true);
  };

  const calculateRecommendations = () => {
    const selectedTags = answers.flatMap(answer => answer.split(' '));
    const recommendedProducts = products.filter(product =>
      product.tags.some(tag => selectedTags.includes(tag))
    );
    setRecommendations(recommendedProducts);
  };
  const handleClose = () => {
    setOpenDialog(false);
    setShowResults(false);
  };


  return (
    <Container sx={{ display: 'flex', justifyContent: 'flex-start', minHeight: '100vh' }}>
      {showResults ? (
        <Dialog open={openDialog} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle>Top Products for You</DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              {recommendations.map((product, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt={product.description}
                      height="200"
                      image={`/product/${product.image}`}
                      title={product.description}
                      onError={(e) => console.log('Image URL:', `${process.env.PUBLIC_URL}/${product.image}`)}
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {product.description}
                      </Typography>
                      <Typography variant="h6" color="textPrimary">
                        ₹{product.price}
                      </Typography>
                      <Button variant="contained" color="primary"  sx={{ backgroundColor: '#ff0099', '&:hover': { backgroundColor: '#870130' }}}>
                        Buy Now
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </DialogContent>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </Dialog>
      ) : (
        <Container maxWidth="sm" sx={{ marginLeft: 'auto' ,marginBottom:35}}>
          <Typography variant="h5" gutterBottom>
            Question {currentQuestionIndex + 1}/{questions.length}
          </Typography>
          <Question
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            selectedOption={answers[currentQuestionIndex]}
            handleOptionChange={handleOptionChange}
          />
          <div style={{ margin: '20px 0', display: 'flex', justifyContent: 'space-between' }}>
            <CustomButton
              variant="contained"
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </CustomButton>
            {currentQuestionIndex < questions.length - 1 ? (
              <CustomButton
                variant="contained"
                onClick={handleNextQuestion}
                sx={{ marginLeft: '10px' }}
              >
                Next
              </CustomButton>
            ) : (
              <CustomButton
                variant="contained"
                onClick={handleSubmit}
                sx={{ marginLeft: '10px' }}
              >
                Submit
              </CustomButton>
            )}
          </div>
        </Container>
      )}
    </Container>
  );
};

export default Quiz;