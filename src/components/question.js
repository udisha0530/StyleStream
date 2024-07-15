import React from 'react';
import { Card, CardContent, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';

const CustomRadio = styled(Radio)({
  color: '#ff0099 !important',
});

const Question = ({ question, options, selectedOption, handleOptionChange }) => {
  return (
    <Card sx={{ margin: '20px 0' }}>
      <CardContent>
        <Typography variant="h6">{question}</Typography>
        <RadioGroup value={selectedOption} onChange={handleOptionChange}>
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option}
              control={<CustomRadio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default Question;