import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from "./components/empty-route/empty-route.component";
import { LentComponent } from "./lent/lent/lent.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'lent', pathMatch: 'full',
  },
  {
    path: 'authentication',
    loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule),
  },
  {
    path: 'lent',
    loadChildren: () => import('./lent/lent.module').then((m) => m.LentModule),
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
