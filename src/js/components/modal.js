import { ShowModal, SaveTask, ValidForm, AddTask, UpdateTask, AutoFill } from '../utils';
import titleIcon from '../../icons/modal/modalTitle.svg'

const modal = document.getElementById('saveTask');
const modalTitle = document.getElementById('modalTitle');
const modalTitleIcon = new Image();
const wraper = document.querySelector('.wraper');
const cancelButton = document.getElementById('cancelButton');
const saveButton = document.getElementById('saveButton');

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

function save() {
  UpdateTask(formControllers.id.value, formControllers);
}

function hide() {
  ShowModal(false)
}

function hideOutOfModal(e) {
  if (!wraper.contains(e.target)) ShowModal(false);
}

export default function modalForm(type, data) {
  modal.removeEventListener('click', hideOutOfModal);
  saveButton.removeEventListener('click', create);  
  saveButton.removeEventListener('click', save);
  cancelButton.removeEventListener('click', hide);

  if (type === 'create' && !data) {
    modalTitle.textContent = 'New Task';
    saveButton.textContent = 'Create';
    saveButton.addEventListener('click', create);
  } else {
    modalTitle.textContent = 'Edit Task';
    saveButton.textContent = 'Save';
    AutoFill(formControllers, data);
    
    saveButton.addEventListener('click', save);
  }

  modalTitle.appendChild(modalTitleIcon);  
  cancelButton.addEventListener('click', hide);
  modal.addEventListener('click', hideOutOfModal);

  return modal;
}