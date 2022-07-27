import React, { useContext, useEffect, useRef, useState} from "react";
import AddNotes from "./AddNotes";
import NoteItem from "./NoteItem";
import NoteContext from "../Context/notes/NoteContext";
import { useNavigate } from 'react-router-dom'

const Notes = (props) => {
  const context = useContext(NoteContext);
  const [query , setQuery] = useState('');

  let navigate  = useNavigate()

  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    if(localStorage.getItem('token'))
    {
      getNotes();
    }
    else{
      props.showAlert("Login required", "warning")
      navigate("/login")
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: ""});
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id: currentNote._id, etitle: currentNote.title , edescription: currentNote.description, etag: currentNote.tag});
  }

  const onChange = (e)=> {
    setNote({...note, [e.target.name]: e.target.value})
  }

  const handleClick = (e)=>{
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    props.showAlert("Updated Successfully", "success");
  }
  

  return (
    
    <>
    <div className="container" style={{display : "flex", flexdirection : "row", alignItems : "start"}}>
      <AddNotes showAlert={props.showAlert}></AddNotes>
      <button style={{display:"none"}} ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div>
                <div className="container my-3">
                  <h2>Enter Details To be Updated</h2>
                  <form className='my-2'>
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">Title</label>
                      <input type="text" autoComplete="off" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" onChange={onChange} value={note.etitle ?? ""} minLength={5} required/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">Description</label>
                      <input type="text" autoComplete="off" className="form-control" id="edescription" name='edescription' onChange={onChange} value={note.edescription ?? ""} minLength={5} required/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="tag" className="form-label">Tag</label>
                      <input type="text" autoComplete="off" className="form-control" id="etag" name='etag' onChange={onChange} value={note.etag ?? ""}/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{margin : "100px 0px 0px 0px", borderLeft : "2px solid #565d65", minHeight : "360px"}}>
        <div style={{marginLeft : "10px"}}>
        <div style={{display : "flex", alignItems: "center", justifyContent : "center", height : "55px"}}>
          <h1 style={{textAlign : "center", color : "#979FA6"}}>Your Notes</h1>
          <input autoComplete="off" className={"form-control me-2 search bg-dark shadow-none"} style={{color:"white", width : "150px", border : "1px solid silver", height : "35px", position : "absolute", left : "480px", outline : "none", boxShadow : "0px 0px 0px white"}} type="search" placeholder="Search..." aria-label="Search" onChange={event => setQuery(event.target.value)}/>
        </div>
      <div className="row my-3" style={{border : "0px solid blue"}}>
        <div className="container" style={{fontSize : "20px", paddingTop : "0px", textAlign : "center"}}>
          {notes.length === 0 && 'No Notes To Display'}
        </div>
        
        {notes
        .filter((value)=>{
          if(query === ''){
            return value;
          }
          else if(value.title.toLowerCase().includes(query.toLowerCase()) || value.description.toLowerCase().includes(query.toLowerCase()) || value.tag.toLowerCase().includes(query.toLowerCase())){
            return value;
          }
          })
        .sort( (a,b) => a.date > b.date ? -1 : 1)
        .map((note) => {
          return (
            <NoteItem key={note._id} showAlert={props.showAlert} updateNote={updateNote} note={note} />
          );
        })}
      </div>
      </div>
      </div></div>
    </>
  );
};

export default Notes;