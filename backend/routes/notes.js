const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

// ROUTE 1 : Get all the notes using : GET "/api/notes/fetchallnotes". Login required....
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2 : Create notes using : POST "/api/notes/addnote". Login required....
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a Valid Title...").isLength({ min: 3 }),
    body("description", "Enter a Valid Description...").isLength({ min: 8 })
  ],

  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      // If there are errors return bad requests and the errors

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const saveNote = await note.save();
      res.json(saveNote);

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3 : Update an exsisting notes using : POST "/api/notes/updatenote". Login required....

router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;

  try {
  //Create a new note object
  const newNote = {};

  if (title) {
    newNote.title = title;
  }
  if (description) {
    newNote.description = description;
  }
  if (tag) {
    newNote.tag = tag;
  }

  //Find the note to be updated and update the note
  let note = await Notes.findById(req.params.id);
  if (!note) {
    return res.status(404).send("Not Found");
  }

  if (note.user.toString() !== req.user.id) {
    return res.status(401).send("Note Allowed");
  }

  note = await Notes.findByIdAndUpdate(
    req.params.id,
    { $set: newNote },
    { new: true }
  );
  res.json({ note });
}
 
catch (error) {
   console.error(error.message);
   res.status(500).send("Internal Server Error");
}
});

// ROUTE 4 : Delete an exsisting notes using : DELETE "/api/notes/deletenote". Login required....

router.delete("/deletenote/:id", fetchuser, async (req, res) => {

   try {
  
  //Find the note to be updated and delete the note
  let note = await Notes.findById(req.params.id);
  if (!note) {
    return res.status(404).send("Not Found");
  }

  // Allow Delete if the user owns this note
  if (note.user.toString() !== req.user.id) {
    return res.status(401).send("Note Allowed");
  }

  note = await Notes.findByIdAndDelete(req.params.id);
  res.json({ "Success" : "Your Note Has Been Deleted", note:note });
    
}catch (error) {
   console.error(error.message);
   res.status(500).send("Internal Server Error");
}
});
module.exports = router;
