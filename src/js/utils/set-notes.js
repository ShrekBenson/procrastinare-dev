import { AddNote, ShowModal } from ".";
import { Banner, TaskList } from "../components";
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
  listTitle.classList.add('slidein');
  
  list.classList.replace('list__rows', 'list__notes');
  list.innerHTML = null;
  setTimeout(() => {
    listTitle.classList.remove('slidein');
  }, 250);

  if (notes.length) {
    notes.forEach(note => {
      AddNote(note);
    });
  } else {
    list.appendChild(Banner('note'));
  }
  listTitle.textContent = 'Your notes';
  listTitle.appendChild(addNoteIcon);
}