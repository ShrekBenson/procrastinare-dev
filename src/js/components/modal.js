import { ShowModal } from '../utils';

const modal = document.getElementById('addTask');
const wraper = document.querySelector('.wraper');
const cancelButton = document.getElementById('cancelButton');
const createButton = document.getElementById('createButton');

export default function modalForm(show) {
  ShowModal(show);

  cancelButton.addEventListener('click', function () {
    ShowModal(false);
  });
  modal.addEventListener('click', e => {
    if (!wraper.contains(e.target)) ShowModal(false);
  });
}