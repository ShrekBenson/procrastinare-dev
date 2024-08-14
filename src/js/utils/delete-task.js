import { TaskStorage } from "../components";


export default function deleteTask(id, project = 'none') {
  const tasks = TaskStorage();
  const projects = JSON.parse(localStorage.getItem('projects'));

  let taskIndex = -1;
  const rowTask = document.getElementById(id);

  if (project === 'none') {
    taskIndex = tasks.findIndex(task => task.id == id);
    tasks.splice(taskIndex, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    rowTask.remove();
  } else if (project !== 'none') {
    const currentProject = projects[project];
    taskIndex = currentProject.findIndex(task => task.id == id);
    currentProject.splice(taskIndex, 1);
    projects[project] = currentProject;
    localStorage.setItem('projects', JSON.stringify(projects));
    rowTask.remove();
  } else {
    alert('ERROR: This task does not exist in the storage');
    return;
  }
}