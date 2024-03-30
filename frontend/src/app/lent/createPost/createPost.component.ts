import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {checkRegExp, conformPassword} from "../../validators";

@Component({
  selector: 'createPost',
  templateUrl: './createPost.component.html',
  styleUrl: './createPost.component.scss'
})

export class CreatePostComponent {
  constructor(private router: Router,
              private route: ActivatedRoute,
              private _fb: FormBuilder) { }

  public redirectTo(page: string) {
    this.router.navigate([`${page}`], { relativeTo: this.route })
  }

  public createPostForm = this._fb.group({
    title: ['Title'],
    content: ['What`s on your mind?'],
    postsType: ['Technology'],
  },
    {
    validators: [Validators.required]
  });
}
