import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography, Divider } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RecipeCard = ({ recipe, idx }) => {
  console.log(recipe)
  
  return (
    <Link className='recipe-card' to={`/recipe/${recipe.id}`}>
    <img src={ recipe.image }  alt={recipe.title} loading="lazy" />
    <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '20px', xs: '18px' }, textAlign: 'center' }} mt="11px" pb="10px" textTransform="capitalize">
      {recipe.title}<Button sx={{ alignContent: 'center' ,margin: '1rem', color: '#fff', background: '#da5e50', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {recipe.aggregateLikes} 
        <FavoriteBorderIcon fontSize="small" sx={{ ml: '2px'}}/>

      </Button>
    </Typography>
    
    
  </Link>
  )
}

export default RecipeCard