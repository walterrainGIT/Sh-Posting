import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from "./components/empty-route/empty-route.component";
import { LentComponent } from "./lent/components/lent.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'lent', pathMatch: 'full',
  },
  {
    path: 'authentication',
    loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule),
  },
  {
    path: 'creating-post',
    loadChildren: () => import('./creating-post/creating-post.module').then((m) => m.CreatingPostModule),
  },
  {
    path: 'lent',
    component: LentComponent,
  },
  {
    path: '**',
    component: EmptyRouteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
