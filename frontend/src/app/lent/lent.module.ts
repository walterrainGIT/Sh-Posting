import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LentComponent } from './lent/lent.component';
import {CreatePostComponent} from "./createPost/createPost.component";
import {LentRouting} from "./lent-route.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    LentComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    LentRouting,
    ReactiveFormsModule
  ]
})

export class LentModule { }
