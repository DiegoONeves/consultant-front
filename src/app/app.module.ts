import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConsultantsComponent } from './views/consultants/consultants.component';
import { CreateOrEditConsultantComponent } from './views/consultants/create-edit-consultant/create-edit-consultant.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { ROUTES } from './app.routing';
import { RouterModule } from '@angular/router';
import { ConsultantService } from 'app/services/consultant.service';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    ConsultantsComponent,
    CreateOrEditConsultantComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    HttpModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    ConsultantService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
