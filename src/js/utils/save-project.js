export default function saveProject(name) {
  let projects = JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('projects')) : {};
  projects[name.value] = [];
  
  localStorage.setItem('projects', JSON.stringify(projects));

  return name.value;
}