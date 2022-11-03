import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const IngredientsList = ({ extendedIngredients }) => {
    const [open, setOpen] = useState(true);
    let ingredients = [];

    const handleClick = () => {
        setOpen(!open);
    };

    if (extendedIngredients) {
        ingredients = extendedIngredients;
    }

  return (
    
    <Box marginTop={1} sx={{
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'top',
        flexDirection:'column',
        width: '100%'
    }}>
        <List sx={{
            width: '100%'
        }}>
            
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <FormatListBulletedIcon/>
                </ListItemIcon>
                <ListItemText primary="ingredientsList" />
                {open ? <ExpandLess/> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List dense="true" component="div" disablePadding>
                    {ingredients.map((ingredient, idx) =>(
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText key={idx} primary={ingredient.original} />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        </List>
    </Box>
      
  )
}

export default IngredientsList