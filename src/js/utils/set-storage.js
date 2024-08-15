export default function setStorage() {
  if (!localStorage.getItem('tasks') || !localStorage.getItem('projects') || !localStorage.getItem('notes')) {
    localStorage.setItem('tasks', JSON.stringify([]));
    localStorage.setItem('projects', JSON.stringify({}));
    localStorage.setItem('notes', JSON.stringify([]));
  }
}