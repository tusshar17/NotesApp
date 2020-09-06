import React from "react";
import "./Notes.css";
import NoteCard from "./NoteCard";
function Notes() {
  return (
    <div id="Notes-container">
      <NoteCard></NoteCard>
      <NoteCard></NoteCard>
      <NoteCard></NoteCard>
    </div>
  );
}

export default Notes;
