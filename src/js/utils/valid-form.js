export default function validForm(formControllers) {
  if (Object.values(formControllers).some(controller => controller.value === "" && controller.id !== 'taskId')) return false;
  return true;
}