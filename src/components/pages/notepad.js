// Note Component
import React from "react";
const Note = (props) => {
	return (
	  <div className="note">
		<p>{props.note}</p>
	  </div>
	)
  }
  
  // Parent Component
  class Notepad extends React.Component {
	constructor() {
	  super();
	  this.state = {
		notes: [
		  'Sample App',
		  'Simple Note explaining nothing in particular and just trying to take up space so I can test the dynamic height of the card',
		  'Another Sample']
	  }
	}
	
	render() {
	  const addNew = (e) => {
		let newVal = this.refs.newNote.value;
		this.refs.newNote.value = '';
		this.setState({
		  notes: this.state.notes.concat([newVal])
		});
	  }
	  const notes = this.state.notes.map((item) => 
		<Note note={item}/>
	  );
	  return (
	  <div>
		<div className="add-container">
		  <input className="text-field" type="text" ref="newNote"/>
		  <button onClick={addNew}>Add Note</button>
		</div>
		<div>{notes}</div>
	  </div>
	  );
	}
  }
  
  export default Notepad