import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Icon } from '@mui/material';

import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const Navbar = () => {
  return (
    <Stack justifyContent="space-around" direction="row"  sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '24px', xs: '20px' }, justifyContent: 'none' }}>
      <RestaurantMenuIcon 
        sx={{ color:"#da5e50", fontSize: 60, margin:"0 20px"}}
        />
      <Stack direction='row' spacing={3} alignItems="center" fontSize="22px">
        <Link style={{textDecoration: "none", color: 'black', borderBottom: '3px solid #da5e50'}} to="/">
          Home
        </Link>
        <a href="#recipes" style={{textDecoration: "none", color: 'black'}}>Recipes</a>
      </Stack>
    </Stack>
  )
}

export default Navbar