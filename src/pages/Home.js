import React, { useState } from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchRecipes from '../components/SearchRecipes';
import Recipes from '../components/Recipes';
const Home = () => {
  const [recipes, setRecipes] = useState('');
  const [randomRecipe, setRandomRecipe] = useState([]);

  return (
    <Box>
      <HeroBanner/>
      <SearchRecipes setRandomRecipe={setRandomRecipe} recipes={recipes} setRecipes={setRecipes} randomRecipe={randomRecipe} />
      <Recipes recipes={recipes} randomRecipe={randomRecipe} purpose={'Showing results'}/>
    </Box>
  )
}

export default Home