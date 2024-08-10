import { ShowModal } from ".";

export default function editNote(id, data) {
  const notes = JSON.parse(localStorage.getItem('notes'));
  const note = document.getElementById(id);
  const noteTitle = note.querySelector('.noteTitle');
  const noteContent = note.querySelector('.noteContent');
  const noteIndex = notes.findIndex(noteData => noteData.id == id);

  if (noteIndex != -1) {
    notes[noteIndex].title = data.title.value;
    notes[noteIndex].content = data.description.value;

    noteTitle.textContent = data.title.value;
    noteContent.textContent = data.description.value;

    localStorage.setItem('notes', JSON.stringify(notes));
    ShowModal(false);
  } else {
    alert('ERROR: This note does not exist in the storage');
    return;
  }
}