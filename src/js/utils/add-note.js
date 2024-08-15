import { SetNotes, ShowModal } from ".";
import { NoteItem } from "../components";

const list = document.getElementById("taskList");

export default function addNote(note) {
  const noteItem = NoteItem(
    note.id,
    note.title,
    note.content
  );
  
  list.appendChild(noteItem);  
}