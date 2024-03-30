import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CreatePostComponent} from "./createPost/createPost.component";
import {LentComponent} from "./lent/lent.component";

const routes: Routes = [
  {
    path: '',
    component: LentComponent,
  },
  {
    path: 'createPost',
    component: CreatePostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LentRouting { }
