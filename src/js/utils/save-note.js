import { Note } from "../classes";


export default function saveNewTaskToStorage(...inputs) {
  let notes = JSON.parse(localStorage.getItem('notes')) ? JSON.parse(localStorage.getItem('notes')) : [];
  const [title, content] = inputs;
  const newNote = new Note (
    title.value,
    content.value
  )

  notes.push(newNote.toJSON());
  localStorage.setItem('notes', JSON.stringify(notes));
  notes = JSON.parse(localStorage.getItem('notes'));

  return newNote.toJSON();
}