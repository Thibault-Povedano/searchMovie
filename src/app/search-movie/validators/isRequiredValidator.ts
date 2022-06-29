import { AbstractControl, ValidationErrors } from "@angular/forms";

// isRequiredValidator() doit accepter deux paramètres : le nom du contrôle Title et de Identifiant.
// isRequiredValidator() doit retourner comme clé isRequired.
export function isRequiredValidator(controle: AbstractControl,titleMovie:string, idMovie:string):ValidationErrors | null {

  const valid= titleMovie || idMovie;

  const errors= {
    titleMovie:{
      rules: "Au moins un des deux champs est requis"
    },
    idMovie:{
      rules:"Au moins un des deux champs est requis"
    }
  }

  return(!valid ? errors : null);
}
