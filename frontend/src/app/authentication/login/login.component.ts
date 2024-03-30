import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, Validators } from '@angular/forms';
import { checkRegExp, conformPassword } from '../../validators';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  constructor(private router: Router,
              private route: ActivatedRoute,
              private _fb: FormBuilder) { }

  public redirectTo(page: string) {
    this.router.navigate([`${page}`], { relativeTo: this.route })
  }

  public loginForm = this._fb.group({
    mail: ['user@example.com', [ Validators.required, checkRegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) ]],
    password: ['Enter your password', [ Validators.required, conformPassword ]],
  });
}
