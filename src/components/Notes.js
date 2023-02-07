import React from 'react'
import '../App.css'
function Notes(note) {
    function handleClick(){
      note.onDelete(note.id);
    }
  return (
    <div className="note">
        <p className="note-head" >{note.title}</p>
        <p className="note-content">{note.content}</p>
        <button className="keep-button" onClick={handleClick}>-</button>
    </div>
  )
}

export default Notes;