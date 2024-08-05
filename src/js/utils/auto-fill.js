export default function autoFillModalForm(inputs, data) {
  inputs.id.value = data.id;
  inputs.title.value = data.title;
  inputs.date.value = data.date;
  inputs.priority.value = data.priority;
  inputs.description.value = data.description;
}