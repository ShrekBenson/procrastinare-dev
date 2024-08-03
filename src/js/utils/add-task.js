import { Row } from "../components";
import { ShowModal } from "./";

const list = document.querySelector(".list__rows");

export default function addTask(task) {
  const rowTask = Row(
    task.id,
    task.title,
    task.description,
    task.date,
    task.priority
  )
  
  list.appendChild(rowTask);
  ShowModal(false);
}