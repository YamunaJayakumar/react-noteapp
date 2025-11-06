import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import AddNote from './components/AddNote'
import DisplayNote from './components/DisplayNote'

function App() {
  
  const [notearray,setNotearray]=useState([])
  useEffect(()=>{
        const saved=JSON.parse(localStorage.getItem('notearray'))||[]
        setNotearray(saved)
        
      },[])
  useEffect(()=>{
    console.log(notearray)
  },[notearray])
  useEffect(()=>{
           localStorage.setItem("notearray",JSON.stringify(notearray))
          },[notearray])
  function addNote(notes){
        setNotearray([...notearray,notes])
        
    }
  function deleteNote(noteIndex){
     const updated=notearray.filter((item,index)=>index!=noteIndex)
     setNotearray(updated);

  }
  
  return (
    <>
      {/* displaynote-display all notes with a delete symbol when you clcik on it the note deleted  with create note button at top of page */}
      {/* addnote-in create note a text filed and add button  when add button clicked it should be displayed in the display*/}
      <AddNote onAdd={addNote}/>
      <DisplayNote notearray={notearray} deleteNote={deleteNote} />
    </>
  )
}

export default App
