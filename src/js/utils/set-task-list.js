import moment from "moment";
import { AddTask } from ".";
import { Banner, TaskList, TaskStorage } from "../components";

const listTitle = document.getElementById('listTitle');
const addNoteButton = document.querySelector('.addNote');

export default function getTaskList(type = 'inbox', project = null) {
  const list = TaskList();
  let tasks = TaskStorage();
  listTitle.classList.add('slidein');
    
  switch (type) {
    case 'today':      
      listTitle.textContent = 'Today';
      let todayDate = moment().format('YYYY-MM-DD');
      tasks = tasks.filter(task => task.date === todayDate);
      break;

    case 'next-week':            
      listTitle.textContent = 'Next week';
      let nextWeek = moment().add(1, 'week').week();
      tasks = tasks.filter(task => moment(task.date).week() === nextWeek);
      break;

    case 'project':            
      listTitle.textContent = project;
      const projects = JSON.parse(localStorage.getItem('projects'));
      tasks = projects[project];      
      break;

    default:            
      listTitle.textContent = 'Your inbox';
      break;
  }
        
  if (addNoteButton) addNoteButton.remove();
  setTimeout(() => {
    listTitle.classList.remove('slidein');
  }, 250);
    
  list.classList.replace('list__notes', 'list__rows');
  list.innerHTML = null;
  if (tasks.length) {
    tasks.forEach(task => {
      AddTask(task);
    });
  } else {
    list.appendChild(Banner());
  }
}