import { Routes } from '@angular/router';
import { ConsultantsComponent } from './views/consultants/consultants.component';
import { CreateOrEditConsultantComponent } from './views/consultants/create-edit-consultant/create-edit-consultant.component';
import { HomeComponent } from './views/home/home.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'consultants', component: ConsultantsComponent },
    { path: 'consultants/create-edit/:id', component: CreateOrEditConsultantComponent },
    { path: 'consultants/create-edit', component: CreateOrEditConsultantComponent }    
]