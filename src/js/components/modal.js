import { ShowModal, SaveTask, ValidForm, AddTask, UpdateTask } from '../utils';
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

function modalHandler(e) {
  if (!wraper.contains(e.target)) ShowModal(false);
}

export default function modalForm(type, data) {
  saveButton.removeEventListener('click', create);  
  saveButton.removeEventListener('click', save);

  if (type === 'create' && !data) {
    modalTitle.textContent = 'New Task';
    saveButton.addEventListener('click', create);
  } else {
    modalTitle.textContent = 'Edit Task';
    formControllers.id.value = data.id;
    formControllers.title.value = data.title;
    formControllers.date.value = data.date;
    formControllers.priority.value = data.priority;
    formControllers.description.value = data.description;
    
    saveButton.addEventListener('click', save);
  }

  modalTitle.appendChild(modalTitleIcon);
  cancelButton.removeEventListener('click', function () { ShowModal(false); });
  modal.removeEventListener('click', modalHandler);
  cancelButton.addEventListener('click', function () {
    ShowModal(false);
  });
  modal.addEventListener('click', modalHandler);

  return modal;
}