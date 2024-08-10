import { TaskStorage } from "../components";


export default function deleteTask(id) {
  const tasks = TaskStorage();
  const i = tasks.findIndex(task => task.id == id);
  const rowTask = document.getElementById(id);

  if (i !== -1) {
    tasks.splice(i, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    rowTask.remove();
  } else {
    alert('ERROR: This task does not exist in the storage');
    return;
  }
}