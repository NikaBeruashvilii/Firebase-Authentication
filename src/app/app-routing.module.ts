import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ViewComponent } from './components/view/view.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { MastercardEditComponent } from './components/mastercard-edit/mastercard-edit.component';

const routes: Routes = [
  {path: "", component: ViewComponent},
  {path: "login", component: LoginFormComponent},
  {path: "register", component: RegisterFormComponent},
  {path: "forgot-password", component: ForgotPasswordComponent},
  {path: "profile", component: ProfileComponent},
  {path: "profile-edit", component: ProfileEditComponent},
  {path: 'mastercard-edit', component: MastercardEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
