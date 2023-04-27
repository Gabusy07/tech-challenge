import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { WelcomePageComponent } from './layout/welcome-page/welcome-page.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';

const ROUTES: Routes = [
  { path: '', component: WelcomePageComponent,
    children: [
      {path: 'login', component: LoginFormComponent},
    { path: 'register', component: RegisterFormComponent }
  ]
 },
  { path: 'home', component: HomeComponent },
  { path: 'sidebar', component: SidebarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
