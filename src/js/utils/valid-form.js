export default function validForm(formControllers, type = "task") {
  switch (type) {    
    case 'note':
      if (formControllers.title.value === '' && formControllers.description.value === '') return false;
      return true;
    case 'project':
      if (formControllers.title.value === '') return false;
      return true;
      
    default:
      if (Object.values(formControllers).some(controller => controller.value === "" && controller.id !== 'taskId')) return false;
      return true;
  }
}