import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CreatingPostComponent} from "./components/creating-post.component";

const routes: Routes = [
  {
    path: '',
    component: CreatingPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CreatingPostRouting { }
