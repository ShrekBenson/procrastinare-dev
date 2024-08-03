export default function validForm(formControllers) {
  if (Object.values(formControllers).some(controller => controller.value === "")) return false;
  return true;
}