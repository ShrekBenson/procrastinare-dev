import { ShowModal } from ".";
import Low from '../../icons/task/low.svg';
import High from '../../icons/task/high.svg';
import { TaskStorage } from "../components";


export default function editTask(id, data) {
  const tasks = TaskStorage();
  const projects = JSON.parse(localStorage.getItem('projects'));
  const projectName = data.project.value.trim();
  const currentProject = projects[data.project.value.trim()];

  const rowTask = document.getElementById(id);
  const rowTitle = rowTask.querySelector('.rowTitle');
  const rowDescription = rowTask.querySelector('.rowDescription');
  const rowDueDate = rowTask.querySelector('.rowDueDate');
  const rowPriority = rowTask.querySelector('.rowPriority');

  const low = new Image(); low.src = Low;
  const high = new Image(); high.src = High;

  let taskIndex = -1;
  if (data.project.value.trim() === 'none') {
    taskIndex = tasks.findIndex(task => task.id == id);
  } else {
    taskIndex = currentProject.findIndex(task => task.id == id);
  }

  if (taskIndex !== -1 && projectName === 'none') {
    tasks[taskIndex].title = data.title.value;
    tasks[taskIndex].date = data.date.value;
    tasks[taskIndex].priority = data.priority.value;    
    tasks[taskIndex].description = data.description.value;    

    localStorage.setItem('tasks', JSON.stringify(tasks));    
  } else if (taskIndex !== -1 && projectName !== 'none') {
    currentProject[taskIndex].title = data.title.value;
    currentProject[taskIndex].date = data.date.value;
    currentProject[taskIndex].priority = data.priority.value;    
    currentProject[taskIndex].description = data.description.value;

    projects[projectName] = currentProject;
    localStorage.setItem('projects', JSON.stringify(projects));
  } else {
    alert('ERROR: This task does not exist in the storage');
    console.log(currentProject[taskIndex]);
    return;
  }

  rowTitle.textContent = data.title.value;
  rowDescription.textContent = data.description.value;
  rowDueDate.textContent = `Due date: ${data.date.value}`;
  rowPriority.textContent = data.priority.value === 'low' ? 'For later' : 'Urgent';
  rowPriority.appendChild(data.priority.value === 'high' ? high : low);
  rowPriority.classList.replace(rowPriority.classList.item(0), data.priority.value);
  ShowModal(false);
}