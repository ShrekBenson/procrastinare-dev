import { Row } from "../components";
import { ShowModal } from "./";


export default function addTask(task) {  
  const list = document.querySelector(".list__rows");
  const rowTask = Row(
    task.id,
    task.title,
    task.description,
    task.date,
    task.priority,
    task.done,
    task.project
  )
  
  if (list)
    list.appendChild(rowTask);

  ShowModal(false);
}