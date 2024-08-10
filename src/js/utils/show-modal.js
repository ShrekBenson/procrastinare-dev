import { Modal } from "../components";


export default function showModal(show, type = 'create', data = null) {
  const form = document.querySelector('form');
  const modal = Modal(type, data);
  
  if (form && type === 'create') form.reset();

  return show ? modal.showModal() : modal.close();
};