import React from 'react'
import Note from './Note'

const NoteList = ({notes, handleDeleteNote}) => {
    return ( 
        <div className="notes-list">
            {notes.map((note)=> (
            <Note  note={note} key={note.id} 
            handleDeleteNote={handleDeleteNote}
            />))}
          
        </div>
     );
}
export default NoteList;