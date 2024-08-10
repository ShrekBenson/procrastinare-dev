import { AddNote, ShowModal } from ".";
import { TaskList } from "../components";
import AddIcon from '../../icons/note/add-note.svg';

function createNode() {
  ShowModal(true, 'note');
}

export default function setNotes() {
  const list = TaskList();
  const listTitle = document.getElementById('listTitle');
  const addNoteIcon = new Image();
  const notes = JSON.parse(localStorage.getItem('notes'));
  
  addNoteIcon.removeEventListener('click', createNode);
  addNoteIcon.classList.add('addNote');
  addNoteIcon.title = 'Add a new note'
  addNoteIcon.src = AddIcon;
  addNoteIcon.addEventListener('click', createNode);
  
  list.classList.replace('list__rows', 'list__notes');
  list.innerHTML = null;
  notes.forEach(note => {
    AddNote(note);
  });
  listTitle.textContent = 'Your notes';
  listTitle.appendChild(addNoteIcon);
}