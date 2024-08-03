import { Modal } from "../components";

const form = document.querySelector('form');

export default function showModal(show, type = 'create', data = null) {
  const modal = Modal(type, data);
  if (form && type === 'create') form.reset();

  return show ? modal.showModal() : modal.close();
};