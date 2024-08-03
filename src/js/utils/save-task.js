import { Task } from '../classes';

let tasks = JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : [];

export default function saveNewTaskToStorage(inputs) {
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