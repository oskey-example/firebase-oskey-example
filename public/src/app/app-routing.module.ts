/**
 * firebase-oskey-example
 * @copyright (c) 2020, OSkey.io. MIT License.
 * @license SEE LICENSE IN LICENSE.md
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OSKEitherNotAuthOrAuthAndCompletedGuard } from './auth/guards/either-not-auth-or-auth-and-completed.guard';
import { OSKWelcomeComponent } from './welcome/components/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: OSKWelcomeComponent, canActivate: [OSKEitherNotAuthOrAuthAndCompletedGuard] },
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(module => module.OSKAuthModule)
  },
  {
    path: 'user', loadChildren: () => import('./user/user.module').then(module => module.OSKUserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OSKAppRoutingModule { }
