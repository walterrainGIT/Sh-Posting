import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {checkRegExp, conformPassword} from "../../validators";

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})

export class RegistrationComponent {
  constructor(private router: Router,
              private route: ActivatedRoute,
              private _fb: FormBuilder) { }

  public redirectTo(page: string) {
    this.router.navigate([`${page}`], { relativeTo: this.route })
  }

  public registerForm = this._fb.group({
    username: ['Enter your name'],
    mail: ['user@example.com', [ checkRegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) ]],
    password_one: ['Enter your password'],
    password_two: ['Confirm your password'],
  },
    { validators: [ Validators.required, conformPassword ]
    });
}
