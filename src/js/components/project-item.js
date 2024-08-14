export default function projectItem(name) {
  const projectItem = document.createElement('li');
  const projectName = document.createElement('p');

  projectName.textContent = name;
  projectItem.classList.add('project-list__project');
  projectItem.appendChild(projectName);

  return projectItem;
}