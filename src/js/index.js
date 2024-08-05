import '../css/styles.css';
import { AddTask } from './utils';
import {Menu} from './components';

const taskList = JSON.parse(localStorage.getItem('tasks'));
document.addEventListener('DOMContentLoaded', function () {
  
  if (taskList)
    taskList.forEach(task => {
      AddTask(task);
    });

  Menu();
})