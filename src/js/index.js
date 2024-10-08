import '../css/styles.css';
import { AddProject, SetStorage, SetTaskList } from './utils';
import {Menu} from './components';

document.addEventListener('DOMContentLoaded', function () {
  const taskList = JSON.parse(localStorage.getItem('tasks'));
  const projects = JSON.parse(localStorage.getItem('projects'));

  if (taskList)
    SetTaskList();
  if (projects)
    Object.keys(projects).forEach(project => {
      AddProject(project);
    });

  Menu();
  SetStorage();
  SetTaskList();
})