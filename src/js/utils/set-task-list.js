import moment from "moment";
import { AddTask } from ".";
import { TaskList, TaskStorage } from "../components";

const listTitle = document.getElementById('listTitle');
const addNoteButton = document.querySelector('.addNote');

export default function getInboxList(type = 'inbox') {
  const list = TaskList();
  let tasks = TaskStorage();
  
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

    default:
      listTitle.textContent = 'Your inbox';
      break;
  }

  if (addNoteButton) addNoteButton.remove();

  list.classList.replace('list__notes', 'list__rows');
  list.innerHTML = null;
  tasks.forEach(task => {
    AddTask(task);
  });  
}