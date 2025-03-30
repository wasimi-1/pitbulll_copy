import { Routes } from '@angular/router';

import { DirectivesComponent } from './MyComponents/directives/directives.component';
import { CommunicationComponent } from './MyComponents/communication/communication.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { MaterialComponent } from './MyComponents/material/material.component';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home',component:HomeComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'communication',component:CommunicationComponent},
    {path:'material',component:MaterialComponent}
];
