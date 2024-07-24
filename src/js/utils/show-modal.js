const modal = document.getElementById('addTask');

export default function showModal(show) {
  return show ? modal.showModal() : modal.close();
};