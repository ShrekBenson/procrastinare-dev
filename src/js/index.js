import '../css/styles.css';
import { AddProject, SetTaskList } from './utils';
import {Menu} from './components';

const taskList = JSON.parse(localStorage.getItem('tasks'));
const projects = JSON.parse(localStorage.getItem('projects'));

document.addEventListener('DOMContentLoaded', function () {
  
  if (taskList)
    SetTaskList();
  if (projects)
    Object.keys(projects).forEach(project => {
      AddProject(project);
    });

  Menu();
})