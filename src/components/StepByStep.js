import { Collapse, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const StepByStep = ({ item }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

  return (
    <ListItemButton onClick={handleClick} sx={{ width: '100%'}}>
        <Typography sx={{ paddingRight: '0.5rem'}}> Step</Typography>
        <ListItemText primary={item.number}/>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List dense="true" component="div" disablePadding>
            
               <ListItemText sx={{ pl: 4,pr: 2, textAlign: "left" }} primary={item.step} />
             </List>
        </Collapse>
            {open ? <ExpandLess/> : <ExpandMore />}
    </ListItemButton>
  )
}

export default StepByStep