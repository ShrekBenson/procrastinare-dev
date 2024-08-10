export default function deleteNote(id) {
  const notes = JSON.parse(localStorage.getItem('notes'));
  const noteIndex = notes.findIndex(note => note.id == id);
  const noteItem = document.getElementById(id);

  if (noteIndex != -1) {
    notes.splice(noteIndex, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    noteItem.remove();
  } else {
    alert('ERROR: This task does not exist in the storage');
    return;
  }
}