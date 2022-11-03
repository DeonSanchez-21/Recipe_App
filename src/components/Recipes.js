import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import Loader from './Loader';

import RecipeCard from './RecipeCard';


const Recipes = ({ recipes, randomRecipe, purpose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recipePerPage] = useState(8);
  
  let recipeArr = recipes === '' ? randomRecipe :  recipes;

  const indexOfLastRecipe = currentPage * recipePerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipePerPage;
  const currentRecipes = recipeArr.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 800, behavior: 'smooth' });
  };

  if (!currentRecipes.length) return <Loader />;
  console.log(recipes);
 
  return (
    <Box id="recipes" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">{purpose}</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentRecipes.map((recipe, idx) => (
          <RecipeCard key={idx} recipe={recipe} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {recipeArr.length > 9 && (
          <Pagination
          color="standard"
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(recipeArr.length / recipePerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
          />
          )}
      </Stack>
    </Box>
  )
}

export default Recipes;
