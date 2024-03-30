import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function checkRegExp(regExp: RegExp) : ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    const forbidden = regExp.test(control.value);
    return !forbidden ? { forbiddenValue : { value: control.value} } : null;
  }
}

export const conformPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  return control.value.password_one == control.value.password_two ? null : { PasswordDoNotMatch: true};
}
