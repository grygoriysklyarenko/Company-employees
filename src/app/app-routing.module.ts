import { UsersGuard } from './users.guard';
import { UsersComponent } from './users/users.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'users', component: UsersComponent, canActivate: [UsersGuard] },
  { path: 'user/:id', component: UserDetailComponent, canActivate: [UsersGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UsersGuard],
})

export class AppRoutingModule { }