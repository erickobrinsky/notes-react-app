import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';


class AddNote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: '',
            title: ''
        };
    }
    handleAddNote(e) {
        e.preventDefault();
        if (this.state.body.trim().length > 0) {
            const { handleAddNotes } = this.props
            handleAddNotes(this.state.body, this.state.title)
            this.setState({ body: '', title: '' })
        } else {
            this.setState({ body: '', title: '' })
        }
        console.log(this.state.title);
    }

render(){
return ( 
         <form onSubmit={(e) => this.handleAddNote(e)}>
          <div className="mt-1">
         <input type="text"
          className="form-control"
                        name="title"
                        id="title"
                        value={this.state.title}
                        placeholder="Title"
                        onChange={(e) => this.setState({ title: e.target.value })}                    
                        />
            <TextareaAutosize
                cols="10"
                placeholder="Type to add a note..."
                minRows={4}
                value={this.state.body}
                onChange={(e)=>this.setState({ body: e.target.value })}
                required
                className="form-control  textarea"
            ></TextareaAutosize>
            </div>
            <div className="note-footer">
                <button className="save"
                >Add</button>
            </div>
            </form>
     );
}
}
export default AddNote ;