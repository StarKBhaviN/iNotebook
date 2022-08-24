import React, {useContext} from 'react'
import NoteContext from "../Context/notes/NoteContext";
// #36494F
const NoteItem = (props) => {
  const context  = useContext(NoteContext);
  const { deleteNote } = context
  const { note, updateNote } = props

  var mydate = note.date;
  var conv = mydate?.toString() || 'XX-XX-XXXX'
  var orgDate = conv.split("T")[0]
  var noteDate = orgDate.split("-").reverse().join("-");
  return (
    <div className='container col-md-4'>
      <div className="card my-3" style={{width : "100%", backgroundColor : "#36494F", boxShadow : "0px 0px 5px pink", color : "#808080"}}>
          <div className="card-body">
            <div>
              <h5 className="card-title" style={{display : "inline-block", width : "73%", color : "#C0C0C0"}}>{note.title}</h5>
              <h6 className='date' style={{display : "inline-block", fontSize : "12px", color: "#A9A9A9", position : "absolute"}}>{noteDate}</h6>
            </div>
              <p className="card-text" style={{fontSize : "16px"}}>{note.description}</p>
              <i className="fa-solid fa-trash mx-2" onClick={() => {deleteNote(note._id); props.showAlert("Deleted Successfully", "warning");}}></i>
              <i className="fa-solid fa-pen-to-square mx-2" onClick={() => {updateNote(note)}}></i>
          </div>
      </div>
      </div>
    
  )
}

export default NoteItem