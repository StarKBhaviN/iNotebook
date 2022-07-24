import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial)

  // Add A Note...
  const addNote = async (title, description, tag) => {
    // API CALL 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });

    const note = await response.json();
    setNotes(notes.concat(note))
  }


  // get all Note...
  const getNotes = async () => {
    // API CALL 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    const json = await response.json();
    // console.log(localStorage.getItem('token'))
    setNotes(json)
  }


  // Delete A NOte...
  const deleteNote = async (id, props) => {

    // API CALL 
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    // eslint-disable-next-line no-unused-vars
    const json = response.json();
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
    // console.log(json)
  }
  
  
  // Edit A Note...
  const editNote = async (id, title, description, tag) => {
    // API CALL 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    // eslint-disable-next-line no-unused-vars
    const json = response.json();
    // console.log(json)
    // console.log("Updating the note with ID : " + id)

    let newNotes = JSON.parse(JSON.stringify(notes));
    //LOGIC TO EDIT NOTE
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;
