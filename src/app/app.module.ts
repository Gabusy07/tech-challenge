import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './layout/home/home.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { InfobarComponent } from './component/infobar/infobar.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { MaterialModule } from './module/material/material.module';
import { WelcomePageComponent } from './layout/welcome-page/welcome-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { VirtualKeyboardComponent } from './component/virtual-keyboard/virtual-keyboard.component';
import { MatButtonModule } from '@angular/material/button';
import { NgChartsModule } from 'ng2-charts';
import { PayDataComponent } from './component/pay-data/pay-data.component';
import { CardInfoComponent } from './component/card-info/card-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    InfobarComponent,
    RegisterFormComponent,
    LoginFormComponent,
    WelcomePageComponent,
    VirtualKeyboardComponent,
    PayDataComponent,
    CardInfoComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
