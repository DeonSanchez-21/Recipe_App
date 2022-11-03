import { Box } from '@mui/material'
import React, { useEffect, useState} from 'react'
import RecipeDetail from '../components/RecipeDetail'
import { useParams } from 'react-router-dom';

import { fetchData, options } from '../utils/fetchData';
import SimilarRecipes from '../components/SimilarRecipes';
import Recipes from '../components/Recipes';

const Recipe = () => {
  const [recipeDetail, setRecipeDetail] = useState({});
  const [recipes, setRecipes] = useState('');

  const { id } = useParams();


  useEffect(() => {

    const fetchRecipeDetail = async () =>{
        const recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com';

        const recipeDetailData = await fetchData(`${recipeUrl}/recipes/${id}/information`, options);
        setRecipeDetail(recipeDetailData);

        const similarRecipeData = await fetchData(`${recipeUrl}/recipes/${id}/similar`, options);
        
        async function promises() {
          const unresolved = similarRecipeData.map( async(item)=> {
            return await fetchData(`${recipeUrl}/recipes/${item.id}/information`, options);
          })
          
          const resolved = await Promise.all(unresolved);

          setRecipes(resolved);
        }
        promises();
    }

    fetchRecipeDetail();

  },[id]);
  console.log(recipes);

  return (
    <Box>
        <RecipeDetail recipeDetail={recipeDetail} />
        {recipes ? 
        <Recipes recipes={recipes} purpose={'Similar Recipes'}/> : 'norecipes' }
        
    </Box>
  )
}

export default Recipe