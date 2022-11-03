import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fetchData, options } from '../utils/fetchData';




const SearchRecipes = ({ setRecipes, setRandomRecipe }) => {
    const [search, setSearch] = useState('');
    

    useEffect(() => {
      const fetchRecipeData = async () => {
 
       let recipeArr = [];
     
       recipeArr = await fetchData("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=100", options);

       setRandomRecipe(recipeArr.recipes);
   }
   fetchRecipeData();
 },[]);

    const handleSearch = async () => {
      setRecipes([]);
        if (search) {
          const recipesData = await fetchData(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${search}&number=100`, options);
          setRecipes(recipesData.results);
        }
        setSearch('');
    };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Box position="relative" mb="2px">
            <TextField
            height="2.5rem"
            sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Recipes"
            type="text"/>
            <Button sx={{ bgcolor: '#da5e50', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
                Search
            </Button>
            
        </Box>
    </Stack>
  )
}

export default SearchRecipes