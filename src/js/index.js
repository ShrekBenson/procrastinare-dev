import '../css/styles.css';
import { AddTask } from './utils';
import {Menu} from './components';

const taskList = JSON.parse(localStorage.getItem('tasks'));

document.addEventListener('DOMContentLoaded', function () {
  localStorage.setItem('projects', JSON.stringify({}));
  localStorage.setItem('notes', JSON.stringify({}));
  
  if (taskList)
    taskList.forEach(task => {
      AddTask(task);
    });

  Menu();
})