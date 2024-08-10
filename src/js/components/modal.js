import { ShowModal, SaveTask, ValidForm, AddTask, UpdateTask, AutoFill, SaveNote, UpdateNote, AddNote } from '../utils';
import titleIcon from '../../icons/modal/modalTitle.svg'

const modal = document.getElementById('saveTask');
const modalTitle = document.getElementById('modalTitle');
const taskTitle = document.getElementById('taskTitle');
const modalTitleIcon = new Image();
const wraper = document.querySelector('.wraper');
const ddInputs = wraper.querySelector('.new-task__dd-inputs');
const modalDescription = wraper.querySelector('.new-task__description');
const cancelButton = wraper.querySelector('.cancelButton');
const saveButton = wraper.querySelector('.saveButton');

modalTitleIcon.src = titleIcon;

const formControllers = {
  id: wraper.querySelector('#taskId'),
  title: wraper.querySelector('#taskTitle'),
  description: wraper.querySelector('#taskDescription'),
  date: wraper.querySelector('#taskDueDate'),
  priority: wraper.querySelector('#taskPriority')
};

function create() {
  if (ValidForm(formControllers)) {
    AddTask(SaveTask(formControllers));
    return;
  }
  alert("Please, fill the empty fields");
}

function createNote() {
  if (ValidForm(formControllers, 'note')) {
    AddNote(SaveNote(formControllers.title, formControllers.description));
    ShowModal(false);
    return;
  }
  alert("Please, fill the empty fields");
}

function save() {
  UpdateTask(formControllers.id.value, formControllers);
}

function saveNote() {
  UpdateNote(formControllers.id.value, formControllers);
}

function hide() {
  ShowModal(false);
}

function hideOutOfModal(e) {
  if (!wraper.contains(e.target)) ShowModal(false);
}

export default function modalForm(type, data) {
  modal.removeEventListener('click', hideOutOfModal);
  saveButton.removeEventListener('click', create);
  saveButton.removeEventListener('click', createNote);
  saveButton.removeEventListener('click', save);
  saveButton.removeEventListener('click', saveNote);
  cancelButton.removeEventListener('click', hide);

  taskTitle.placeholder = 'Task title';
  modalDescription.children[1].classList.remove('note');
  modalDescription.children[0].textContent = 'Description';
  wraper.querySelector('h2+p').textContent = 'What\'s the new thing to do';
  ddInputs.style.display = 'flex';

  switch (type) {
    case 'update':
      modalTitle.textContent = 'Edit Task';
      saveButton.textContent = 'Edit';
      AutoFill(formControllers, data);
      
      saveButton.addEventListener('click', save);
      break;

    case 'note':
      taskTitle.placeholder = 'Note title';
      modalTitle.textContent = 'New note';      
      ddInputs.style.display = 'none';
      modalDescription.children[1].classList.add('note');
      modalDescription.children[0].textContent = 'Note content';
      wraper.querySelector('h2+p').textContent = 'Write down everything you don\'t want to forget';

      if (data) {
        saveButton.textContent = 'Edit note';
        AutoFill(formControllers, data, 'note');
        saveButton.addEventListener('click', saveNote);
      } else {
        saveButton.textContent = 'Create note';
        saveButton.addEventListener('click', createNote);
      }
      break;

    default:
      modalTitle.textContent = 'New Task';
      saveButton.textContent = 'Create';
      
      saveButton.addEventListener('click', create);
      break;
  }

  modalTitle.appendChild(modalTitleIcon);  
  cancelButton.addEventListener('click', hide);
  modal.addEventListener('click', hideOutOfModal);

  return modal;
}