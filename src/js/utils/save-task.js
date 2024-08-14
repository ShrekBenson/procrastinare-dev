import { Task } from '../classes';


export default function saveNewTaskToStorage(inputs) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : [];
  let projects = JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('projects')) : {};

  const { title, description, date, priority, project } = inputs;

  const newTask = new Task(
    title.value,
    description.value,
    date.value,
    priority.value,
    project.value
  )
  if (project.value !== 'none') {
    const project = projects[newTask.project];
    project.push(newTask);
    projects[newTask.project] = project;

    localStorage.setItem('projects', JSON.stringify(projects));
  } else {
    tasks.push(newTask.toJSON());
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
  return newTask.toJSON();
}