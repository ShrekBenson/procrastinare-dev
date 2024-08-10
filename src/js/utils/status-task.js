export default function isDone(checkbox, ...nodes) {
  if (checkbox.checked) {
    nodes.forEach(node => {
      node.classList.add('done');
      if (node.classList.contains("editTask") || node.classList.contains("deleteTask")) node.disabled = true;
    })
  } else {
    nodes.forEach(node => {
      node.classList.remove('done');
      if (node.classList.contains("editTask") || node.classList.contains("deleteTask")) node.disabled = false;
    })
  }
}