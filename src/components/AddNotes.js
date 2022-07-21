import React, { useContext , useState } from 'react'
import NoteContext from "../Context/notes/NoteContext";

function AddNotes(props) {

    const context  = useContext(NoteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title : "" , description : "", tag : ""})
    
    const handleClick = (e) => {
      e.preventDefault();
      addNote(note.title , note.description, note.tag);
      setNote({title : "" , description : "", tag : ""});
      props.showAlert("Added Successfully", "success");
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

  return (
    <>
        <div className="container" style={{margin : "100px 10px 0px 0px", width : "450px", border : "0px solid red"}}>
        <h1>Add A Note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control w-52"
              id="title"
              name='title'
              aria-describedby="emailHelp"
              onChange={onChange}
              value={note.title}
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control w-52"
              id="description"
              name='description'
              onChange={onChange}
              value={note.description}
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label ">
              Tag
            </label>
            <input
              type="text"
              className="form-control w-52"
              id="tag"
              name='tag'
              onChange={onChange}
              value={note.tag}
            />
          </div>
          <button disabled={note.title.length<5||note.title.description<5} type="submit" className="btn btn-primary" onClick={handleClick}>
            Add Note
          </button>
        </form>
      </div>
    </>
  )
}

export default AddNotes