import React /*,{useState}*/ from 'react'
import NoteList from './components/NoteList'
import AddNote from './components/AddNote'
import {nanoid} from 'nanoid'
import date from 'date-and-time';
const timezone = require('date-and-time/plugin/timezone');
date.plugin(timezone);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    } 
    this.addNotes = this.addNotes.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
  }


  addNotes(body, title) {

    const now = new Date()

    const newNote = {
      id: nanoid(),
      title: title,
      text: body,
      date: date.formatTZ(now, 'MMMM DD YYYY H:mm:ss.SSS [GMT+3]', 'Israel')
    }
    const newNotes = [...this.state.notes, newNote]
    this.setState({ notes: newNotes })
  }

  deleteNote(id) {
    const newNotes = this.state.notes.filter(note => note.id !== id)
    this.setState({ notes: newNotes })
  }

  render() {
    return (
      
      <div className="container ">
        <h1>Add your notes here</h1>
          <AddNote handleAddNotes={this.addNotes} />
          <NoteList notes={this.state.notes} handleDeleteNote={this.deleteNote}/>
      </div>
    )
  }

}

export default App;
