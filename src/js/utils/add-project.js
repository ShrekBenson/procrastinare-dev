import { ShowModal } from ".";
import { ProjectItem } from "../components";

const taskProject = document.getElementById('taskProject');
const arrowIcon = document.querySelector('.arrow');

export default function addProject(project) {
  const projects = JSON.parse(localStorage.getItem('projects'));
  const projectList = document.getElementById('projectList');
  const projectListParentContainer = document.querySelector('.project-list');
  const projectListChildContainer = document.querySelector('.project-list__container');
  const projectItem = ProjectItem(project)
  
  taskProject.innerHTML = null;
  const optProject = document.createElement('option');
  optProject.textContent = 'none';
  optProject.value = 'none';
  taskProject.appendChild(optProject);
  
  if(projectList){
    projectList.appendChild(projectItem);
    projectListParentContainer.className = 'project-list';
    projectListChildContainer.className = 'project-list__container';
    arrowIcon.className = 'arrow';

    Object.keys(projects).forEach(project => {
      const optProject = document.createElement('option');
      optProject.textContent = project;
      optProject.value = project;
      
      taskProject.appendChild(optProject);
    });
  } else {
    alert('ERROR: Cannot append an unexisting element');
  }
  
  ShowModal(false);
}