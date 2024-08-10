export default function autoFillModalForm(inputs, data, form='task') {
  if (form !== 'task') {
    inputs.id.value = data.id;
    inputs.title.value = data.title;
    inputs.description.value = data.content;
  } else {
    inputs.id.value = data.id;
    inputs.title.value = data.title;
    inputs.date.value = data.date;
    inputs.priority.value = data.priority;
    inputs.description.value = data.description;
  }
}