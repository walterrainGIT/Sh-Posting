import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})

export class RegistrationComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }

  public redirectTo(page: string) {
    this.router.navigate([`${page}`], { relativeTo: this.route })
  }
}
