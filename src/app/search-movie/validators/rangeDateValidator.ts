import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function rangeDateValidator(release: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const test= parseInt(control.value);
    let result =false;

    if(1900 < test && test < 2022){
      result = true;
    };
    const min = {
      badYears: {
       rules:"L'année doit être comprise entre 1900 et 2022 "
      },
    };
    return (result ? null : min)
  }
}
