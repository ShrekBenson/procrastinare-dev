import { ShowModal, DeleteTask } from '../utils';
import Low from '../../icons/task/low.svg';
import High from '../../icons/task/high.svg';
import Edit from '../../icons/task/edit.svg';

const rowsList = document.querySelector('.list__rows');

export default function row(id, title, description, dueDate, priority) {
  const low = new Image();
  const high = new Image();
  const edit = new Image();
  
  low.src = Low;
  high.src = High;
  edit.src = Edit;

  const row = document.createElement('div');
  row.classList.add('row');
  row.id = id;

  const taskTitle = document.createElement('h3');
  taskTitle.classList.add('rowTitle');
  taskTitle.textContent = `${title}`;

  const rowDescription = document.createElement('div');
  rowDescription.classList.add('row__description');

  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.setAttribute('name', 'done');
  checkBox.id = `done-${id}`;

  const taskDescription = document.createElement('p');
  taskDescription.classList.add('rowDescription');
  taskDescription.textContent = `${description}`;

  const meta = document.createElement('div');
  meta.classList.add('meta');

  const metaInfo = document.createElement('div');
  metaInfo.classList.add('meta__info');

  const taskDueDate = document.createElement('p');
  taskDueDate.classList.add('rowDueDate');
  taskDueDate.textContent = `Due date: ${dueDate}`;

  const rowPriority = document.createElement('div');
  rowPriority.classList.add('priority');

  const taskPriority = document.createElement('p');
  taskPriority.classList.add(priority);
  taskPriority.classList.add('rowPriority');
  taskPriority.textContent = priority === 'high' ? 'Urgent' : 'For later';

  const metaActions = document.createElement('div');
  metaActions.classList.add('meta__actions');

  const buttonEdit = document.createElement('button');  
  buttonEdit.classList.add('editTask');
  buttonEdit.textContent = 'Edit';

  const buttonDelete = document.createElement('button');
  buttonDelete.classList.add('deleteTask');
  buttonDelete.textContent = 'Delete';

  buttonEdit.appendChild(edit);
  
  taskPriority.appendChild(priority === 'high' ? high : low);
  
  rowPriority.appendChild(taskPriority);

  metaActions.appendChild(buttonEdit);
  metaActions.appendChild(buttonDelete);

  metaInfo.appendChild(taskDueDate);
  metaInfo.appendChild(taskPriority);

  meta.appendChild(metaInfo);
  meta.appendChild(metaActions);

  rowDescription.appendChild(checkBox);
  rowDescription.appendChild(taskDescription);

  row.appendChild(taskTitle);
  row.appendChild(rowDescription);
  row.appendChild(meta);

  buttonEdit.addEventListener('click', () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const i = tasks.findIndex(task => task.id == id);
    const dataTask = tasks[i];
    
    ShowModal(true, 'update', dataTask);
  });

  buttonDelete.addEventListener('click', () => {
    DeleteTask(id);
  });

  checkBox.addEventListener('change', () => {
    taskTitle.classList.toggle('done');
    taskDescription.classList.toggle('done');
    meta.classList.toggle('done');
    
    if (checkBox.checked) {
      buttonEdit.disabled = true;
      buttonDelete.disabled = true;
    } else {
      buttonEdit.disabled = false;
      buttonDelete.disabled = false;
    }
  });

  return row;
}