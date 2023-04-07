import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './layout/home/home.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { InfobarComponent } from './component/infobar/infobar.component';
import { StartMainComponent } from './component/start-main/start-main.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { MaterialModule } from './module/material/material.module';
import { WelcomePageComponent } from './layout/welcome-page/welcome-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    InfobarComponent,
    StartMainComponent,
    RegisterFormComponent,
    LoginFormComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
