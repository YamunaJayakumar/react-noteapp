import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { GiNotebook } from "react-icons/gi";


function Header() {
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor:'#ff7db1ff'}}>
        <Toolbar variant="dense">
         
           <GiNotebook  className="fs-3"/>
          <Typography  variant="h6" color="inherit" component="div" sx={{fontFamily: "'Poppins', sans-serif"}}>
            NoteApp
          </Typography>
        </Toolbar>
      </AppBar>
    </Box></div>
  )
}

export default Header