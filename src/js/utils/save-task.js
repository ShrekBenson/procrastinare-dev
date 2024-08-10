import { Task } from '../classes';


export default function saveNewTaskToStorage(inputs) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : [];
  const { title, description, date, priority } = inputs;

  const newTask = new Task(
    title.value,
    description.value,
    date.value,
    priority.value
  )
  tasks.push(newTask.toJSON());
  localStorage.setItem('tasks', JSON.stringify(tasks));
  tasks = JSON.parse(localStorage.getItem('tasks'));
  
  return newTask.toJSON();
}