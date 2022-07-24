import React, {useContext} from 'react'
import NoteContext from "../Context/notes/NoteContext";

const NoteItem = (props) => {
  const context  = useContext(NoteContext);
  const { deleteNote } = context
  const { note, updateNote } = props

  var mydate = note.date 
  var orgDate = mydate.toString().split("T")[0]
  var noteDate = orgDate.split("-").reverse().join("-");
  return (
    <div className='container col-md-4'>
      <div className="card my-3" style={{width : "18rem", backgroundColor : "#36494F", boxShadow : "0px 0px 4px pink", color : "#699995"}}>
          <div className="card-body">
            <div>
            <h5 className="card-title" style={{display : "inline-block", width : "190px"}}>{note.title}</h5>
            <h6 className='date' style={{display : "inline-block", fontSize : "12px", color: "#808080", position : "absolute"}}>{noteDate}</h6>
            </div>
            <p className="card-text">{note.description}</p>
            <i className="fa-solid fa-trash mx-2" onClick={() => {deleteNote(note._id); props.showAlert("Deleted Successfully", "warning");}}></i>
            <i className="fa-solid fa-pen-to-square mx-2" onClick={() => {updateNote(note)}}></i>
          </div>
      </div>
      </div>
    
  )
}

export default NoteItem