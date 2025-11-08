import React, { useEffect, useRef, useState } from 'react'
import TextField from '@mui/material/TextField';

function AddNote({ onAdd }) {
  const noteref = useRef();
  const handleaddNote = () => {
    const note = noteref.current.value
    if (!note) {
      alert("Please enter a note before adding!")
      return
    }
    onAdd(note)

    noteref.current.value = ''

  }
  return (
    <div className="container   rounded  ">
      <TextField id="standard-basic" label="enter your note here" variant="standard" inputRef={noteref} sx={{
        width: '75%',
        py: 3,
        borderRadius: '6px',
        backgroundColor: 'transparent',
        
      }} />
      <button className="btn text-light border mt-3 ms-2 py-3"style={{backgroundColor:'#ff7db1ff'}} onClick={handleaddNote}>Add note</button>
    </div>

  )
}

export default AddNote