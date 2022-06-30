import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function isRequiredValidator(titleMovie: string, idMovie: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const idMovieCheck = control.get(idMovie)?.value;
    const titleMovieCheck = control.get(titleMovie)?.value;
    console.log(idMovieCheck),
    console.log(titleMovieCheck)

    const isRequired = {
      missingInput: {
        rules: 'un des deux champs est requis'
      },
    }
    return (!idMovieCheck && !titleMovieCheck ? isRequired : null);
  }
}
