import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import products from './product';
import Navbar from './Navbar';

const Shop = () => {
  return (
    <>
    <Navbar />
    <Grid container spacing={4} marginTop={6}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia
              component="img"
              alt={product.description}
              height="140"
              image={`/product/${product.image}`}
              title={product.description}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Price: ${product.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </>
  );
};

export default Shop;