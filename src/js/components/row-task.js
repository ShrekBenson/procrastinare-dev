import { ShowModal, DeleteTask, StatusTask } from '../utils';
import { TaskStorage } from '.';
import Low from '../../icons/task/low.svg';
import High from '../../icons/task/high.svg';
import Edit from '../../icons/task/edit.svg';

export default function row(id, title, description, dueDate, priority, done = false, project) {
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
  checkBox.checked = done;

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
  buttonEdit.textContent = 'Details';

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
    let dataTask = null;

    if (project !== 'none') {
      const projects = JSON.parse(localStorage.getItem('projects'));
      const tasksProject = projects[project];
      const taskIndex = tasksProject.findIndex(task => task.id == id);
      
      dataTask = tasksProject[taskIndex];
    } else {
      const tasks = TaskStorage();
      const taskIndex = tasks.findIndex(task => task.id == id);

      dataTask = tasks[taskIndex];
    }
    
    ShowModal(true, 'update', dataTask);
  });

  buttonDelete.addEventListener('click', () => {
    DeleteTask(id, project);
  });

  checkBox.addEventListener('change', () => {
    let taskIndex = -1;

    if (project === 'none') {
      taskIndex = TaskStorage().findIndex(task => task.id === id);
      const tasks = TaskStorage();
      tasks[taskIndex].done = checkBox.checked;
  
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      const projects = JSON.parse(localStorage.getItem('projects'));
      const currentProject = projects[project];

      taskIndex = currentProject.findIndex(task => task.id == id);
      currentProject[taskIndex].done = checkBox.checked;
      projects[project] = currentProject;

      localStorage.setItem('projects', JSON.stringify(projects));
    }

    StatusTask(checkBox, taskTitle, taskDescription, meta, buttonEdit, buttonDelete);
  });
  
  StatusTask(checkBox, taskTitle, taskDescription, meta, buttonEdit, buttonDelete);

  return row;
}