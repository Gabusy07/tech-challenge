import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './layout/home/home.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { InfobarComponent } from './component/infobar/infobar.component';
import { StartMainComponent } from './component/start-main/start-main.component';
import { RegisterFormComponent } from './layout/register-form/register-form.component';
import { LoginFormComponent } from './layout/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    InfobarComponent,
    StartMainComponent,
    RegisterFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
