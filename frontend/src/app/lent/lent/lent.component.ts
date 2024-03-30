import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'lent',
  templateUrl: './lent.component.html',
  styleUrl: './lent.component.scss'
})
export class LentComponent {
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  public redirectTo(page: string) {
    this.router.navigate([`${page}`], { relativeTo: this.route })
  }
}
