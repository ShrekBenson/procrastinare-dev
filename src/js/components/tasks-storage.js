export default function taskStorage() {
  return JSON.parse(localStorage.getItem('tasks'));
}