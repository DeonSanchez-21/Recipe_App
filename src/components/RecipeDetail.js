import React, { useEffect } from 'react';
import { Box, Button, List, ListSubheader, Stack, Typography } from '@mui/material';
import IngredientsList from './IngredientsList';
import StepByStep from './StepByStep';

const RecipeDetail = ({ recipeDetail }) => {
    const { image, analyzedInstructions, extendedIngredients, instructions, summary, title } = recipeDetail;
    
    let newSum = '';
    let stepData = []; 
    
    if(instructions) {
        stepData = analyzedInstructions[0].steps
    } 

    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        newSum = summary
    })
    
  return (
    <Box 
    mt={5}
    sx={{
        display: 'flex',
        alignItems: 'top',
        justifyContent: 'space-evenly',
        flexDirection: { sm:'inherit', xs: 'column-reverse'}
    }}>
        <Stack gap={10} sx={{
            width:{ lg: '50%', sm: '90%'},
            padding: '2.5rem',
            }}>
                <Stack gap={4} sx={{ bgcolor:"#fcddd3", borderRadius: '12px', p:"1.5rem"}}>
                    <Typography sx={{  borderBottom: 'solid #da5e50', marginRight: 'auto'}} variant='h4'>
                        Summary
                    </Typography>
                    <Typography dangerouslySetInnerHTML={{ __html: summary }}  align='justify'  variant='body1' sx={{
                    lineHeight: '2rem' }}>
                        
                    </Typography>
                </Stack>
            
                <Stack gap={4}>
                    <Typography sx={{ borderBottom: 'solid #da5e50', marginRight: 'auto'}} variant='h4'>
                        Instructions
                    </Typography>
                    <Typography dangerouslySetInnerHTML={{ __html: instructions }}   variant='body1' align='justify'  sx={{
                    lineHeight: '2.5rem', padding: {lg:'1rem', xs:'0.5rem'} }}>

                    </Typography>
                </Stack>

        </Stack>
        
        <Stack gap={2} sx={{
            width:{ sm: '50%', xs: '90%'},
            display: 'flex',
            alignItems: 'center',
            justifyContent:'top',
            paddingLeft: { lg: '4rem', sm: "2rem"},
            paddingRight: { lg: '6rem', sm: "3rem"}
        }}>
            <img src={image} alt={title} loading="lazy" className="detail-image"/>
            <IngredientsList extendedIngredients={extendedIngredients}/>
            <List subheader={
                <ListSubheader sx={{ backgroundColor:"#FFFAFB", fontWeight:"bold", fontSize: "1rem"}}>
                  Step By Step Instructions
                </ListSubheader>
            } sx={{backgroundColor:"#fcddd3", width: '100%', padding: '1rem'}}>
                {stepData.map((item, idx)=> (
                    <StepByStep key={idx} item={item} />
                ))}
            </List>
            
        </Stack>
    </Box>
  )
}

export default RecipeDetail