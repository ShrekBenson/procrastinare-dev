import { ShowModal } from ".";
import Low from '../../icons/task/low.svg';
import High from '../../icons/task/high.svg';

const tasks = JSON.parse(localStorage.getItem('tasks'));

export default function editTask(id, data) {
  const rowTask = document.getElementById(id);
  const rowTitle = rowTask.querySelector('.rowTitle');
  const rowDescription = rowTask.querySelector('.rowDescription');
  const rowDueDate = rowTask.querySelector('.rowDueDate');
  const rowPriority = rowTask.querySelector('.rowPriority');

  const i = tasks.findIndex(task => task.id == id);
  const low = new Image();
  const high = new Image();
  
  low.src = Low;
  high.src = High;

  if (i !== -1) {        
    tasks[i].title = data.title.value;
    tasks[i].date = data.date.value;
    tasks[i].priority = data.priority.value;
    tasks[i].description = data.description.value;

    rowTitle.textContent = data.title.value;
    rowDescription.textContent = data.description.value;
    rowDueDate.textContent = `Due date: ${data.date.value}`;
    rowPriority.textContent = data.priority.value === 'low' ? 'For later' : 'Urgent';
    rowPriority.appendChild(data.priority.value === 'high' ? high : low);
    rowPriority.classList.replace(rowPriority.classList.item(0), data.priority.value);

    localStorage.setItem('tasks', JSON.stringify(tasks));    
    ShowModal(false);
  } else {
    alert('ERROR: This task does not exist in the storage');
    return;
  }
}