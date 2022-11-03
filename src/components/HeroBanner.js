import React, { useEffect, useState } from 'react';
import { Box, Typography, Stack, Button} from '@mui/material';

import img from '../image/heroimg.jpg';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#da5e50',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#da5e50',
      contrastText: '#fff',
    },
  },
});


const HeroBanner = () => {
    
  return (
    <Box
    position="relative"
    p="2rem" 
    sx={{ 
        mt: { lg: '10rem', xs: '6rem'},
        ml: { sm: '4rem'}
    }}>
        <Typography fontWeight={600} fontSize="1.2rem" color="#da5e50">
            Hungry?
        </Typography>
        <Typography sx={{ mt:"1rem"}} fontWeight={700} fontSize="1.5rem" color="black">
            Can't Decide <br/> What To Eat?
        </Typography>
        <Typography sx={{ mt:"1rem"}} >
            Check Out Some Of Our Random Meals!
        </Typography>
        <ThemeProvider theme={theme}>
            <Button href="#recipes" color="neutral" variant="contained" sx={{ mt:"2rem" }} >
            Explore Meals
        </Button>
        </ThemeProvider>
        
        <img src={img} alt="banner" className="hero-img"/>
    </Box>
  )
}

export default HeroBanner