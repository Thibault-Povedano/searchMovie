import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { formatDate } from '@angular/common';

export function rangeDateValidator(release: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    let yearsDate = parseInt(formatDate(new Date(), 'yyyy', 'en'));
    const startyearDate = 1900
    const yearInput = parseInt(control.value);
    let result = false;

    if (startyearDate <= yearInput && yearInput <= yearsDate) {
      result = true;
    };
    const min = {
      badYears: {
        rules: `L'année doit être comprise entre ${startyearDate} et ${yearsDate}`
      },
    };
    return (result ? null : min)
  }
}
