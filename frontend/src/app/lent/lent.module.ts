import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LentComponent } from './lent/lent.component';
import {CreatePostComponent} from "./createPost/createPost.component";



@NgModule({
  declarations: [
    LentComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule
  ]
})

export class LentModule { }
