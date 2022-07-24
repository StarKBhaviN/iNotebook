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
        <h1 style={{color : "#979FA6", textAlign : "center"}}>Add A Note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label" style={{color : "white"}}>
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
              style={{backgroundColor : "#36494F", color : "white",border : "none", boxShadow : "0px 0px 4px pink"}}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label" style={{color : "white"}}>
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
              style={{backgroundColor : "#36494F", color : "white",border : "none", boxShadow : "0px 0px 4px pink"}}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label " style={{color : "white"}}>
              Tag
            </label>
            <input
              type="text"
              className="form-control w-52"
              id="tag"
              name='tag'
              onChange={onChange}
              value={note.tag}
              style={{backgroundColor : "#36494F", color : "white",border : "none", boxShadow : "0px 0px 4px pink"}}
            />
          </div>
          <button disabled={note.title.length<5||note.title.description<5} type="submit" className="btn" style={{backgroundColor : "#36494F", border : "1px solid white", color : "white", display : "flex", alignItems : "center"}} onClick={handleClick}>
            Add Note
          </button>
        </form>
      </div>
    </>
  )
}

export default AddNotes