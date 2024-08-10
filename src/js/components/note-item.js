import EditNote from '../../icons/note/edit-note.svg';
import Delete from '../../icons/note/delete-note.svg';
import { DeleteNote, ShowModal } from '../utils';

const notes = JSON.parse(localStorage.getItem('notes'));

export default function note(id, title, content) {
  const noteItem = document.createElement('div');
  noteItem.classList.add('note-item');
  noteItem.id = id;

  const noteItemTitle = document.createElement('div');
  noteItemTitle.classList.add('note-item__title');

  const deleteButton = document.createElement('button')
  deleteButton.classList.add('deleteNote');
  const deleteIcon = new Image();
  deleteIcon.src = Delete;
  deleteButton.appendChild(deleteIcon);

  const noteItemContent = document.createElement('div');
  noteItemContent.classList.add('note-item__content');

  const noteItemActions = document.createElement('div');
  noteItemActions.classList.add('note-item__actions');

  const noteTitle = document.createElement('h2');
  noteTitle.classList.add('noteTitle');
  noteTitle.textContent = title;

  const noteContent = document.createElement('p');
  noteContent.classList.add('noteContent');
  noteContent.textContent = content;

  const editButton = document.createElement('button');
  const editIcon = new Image();
  editButton.classList.add('editNote');
  editIcon.src = EditNote;
  editButton.appendChild(editIcon);

  noteItemTitle.appendChild(noteTitle);
  noteItemTitle.appendChild(deleteButton);

  noteItemContent.appendChild(noteContent);
  noteItemActions.appendChild(editButton);

  noteItem.appendChild(noteItemTitle);
  noteItem.appendChild(noteItemContent);
  noteItem.appendChild(noteItemActions);

  editButton.addEventListener('click', () => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    const i = notes.findIndex(note => note.id == id);
    const data = notes[i];

    ShowModal(true, 'note', data);
  });

  deleteButton.addEventListener('click', () => {
    DeleteNote(id);
  })

  return noteItem;
}