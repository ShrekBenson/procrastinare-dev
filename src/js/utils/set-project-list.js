import { SetTaskList, ShowModal } from ".";

const arrowIcon = document.querySelector('.arrow');
const projectList = document.querySelector('.project-list');
const projectListContainer = projectList.querySelector('.project-list__container');

function newProjectHandler() {
  ShowModal(true, 'project');
}

function projectTaskHandler(e) {
  SetTaskList('project', e.target.textContent.trim());
}

export default function setProjectList() {
  const projects = JSON.parse(localStorage.getItem('projects'));

  const projectListItems = projectList.querySelectorAll('li');  
  arrowIcon.classList.toggle('turn');

  if (!Object.keys(projects).length) {
    projectList.classList.toggle('slide-1');
  } else if (Object.keys(projects).length === 1) {
    projectList.classList.toggle('slide-2');
  } else if (Object.keys(projects).length === 2) {
    projectList.classList.toggle('slide-3');
  } else if (Object.keys(projects).length > 2) {
    projectList.classList.toggle('slide-4');
  }

  if (Object.keys(projects).length > 3) {
    projectListContainer.classList.toggle('scroll');
  }

  projectListItems.forEach(item => {
    if (item.classList.contains('addProject')) {
      item.removeEventListener('click', newProjectHandler);
      item.addEventListener('click', newProjectHandler);
    } else {
      item.removeEventListener('click', projectTaskHandler);
      item.addEventListener('click', projectTaskHandler);      
    }
  });
}