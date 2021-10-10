import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
import autoLineBreak  from 'auto-line-breaks';

const Note = ({note, handleDeleteNote}) => {
    const { id, text, date, title } = note
    const lineLength = 15
    const result = autoLineBreak(text, lineLength)
    return (  
        <div className="note">
            
            <h2>{(title.length > 0) ? `Title: ${title}` : ''}</h2>
            <p>{result}</p>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className="delete-icon" size="1.3em"
                 onClick={()=>{
                 (window.confirm('Are you sure you want to delete this note')) ?
                 handleDeleteNote(id) : alert('Deleted Cancelled')}}/>
            </div>
        </div>
    );
}
export default Note;