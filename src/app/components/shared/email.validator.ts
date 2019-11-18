import { AbstractControl } from '@angular/forms';

export function email(control: AbstractControl) {
  if (!(control.value === '' || control.value === null) && (!control.value.includes('@') || !control.value.includes('.'))) {
    return { validEmail: true };
  }
  return null;
}
