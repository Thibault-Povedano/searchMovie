import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function isRequiredValidator(titleMovie: string, idMovie: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const idMovieCheck = control.get(idMovie)?.value;
    const titleMovieCheck = control.get(titleMovie)?.value;

    const isRequired = {
      missingInput: {
        rules: `L'un des deux champs 'Identifiant' ou 'Titre' doit être renseigné`
      },
    }
    return (!idMovieCheck && !titleMovieCheck ? isRequired : null);
  }
}
