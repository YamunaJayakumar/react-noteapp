import React, { useEffect, useRef, useState } from 'react'
import TextField from '@mui/material/TextField';

function AddNote({onAdd}) {
    const noteref=useRef();
    const handleaddNote=()=>{
      const note=noteref.current.value
      if(!note){
        alert("Please enter a note before adding!")
      }
       onAdd(note)
       
       noteref.current.value=''
       
    }
  return ( 
    <div className="container p-5">
     <TextField  inputRef={noteref} id="standard-basic" multiline rows={3} label="Add note here" variant="standard" fullWidth />
     <button className="btn btn-primary" onClick={handleaddNote}>Add note</button>
    </div>
    
  )
}

export default AddNote