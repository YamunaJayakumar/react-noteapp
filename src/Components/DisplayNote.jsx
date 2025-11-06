import React from 'react'
import { AiTwotoneDelete } from "react-icons/ai";
function DisplayNote({notearray,deleteNote}) {
  return (
    <div>
        <div className="container">
            {
                notearray.length===0 && (
                    <p className='text-muted'>no notes are added yet</p>
                )
            }
            <div className="d-flex flex-colum flex-wrap justify-content-between align-items-center" style={{gap:".1rem"}}>
                {notearray?.map((item,index)=>(
                    <div className="w-25" key={index}>
                    <button className="btn"onClick={()=>deleteNote(index)}><AiTwotoneDelete  className='text-end '/> </button>
                    <div className="border rounded shadow p-5 " style={{backgroundColor:'rgba(235, 210, 20, 0.6)'}}> 
                        <div>{item}</div>
                    </div>
                </div>
                ))} 
            </div>
        </div>
    </div>
  )
}

export default DisplayNote