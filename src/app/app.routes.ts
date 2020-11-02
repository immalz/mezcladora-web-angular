import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactoComponent } from './components/contacto/contacto.component';


export const ROUTES: Routes = [
    {path: 'inicio', component: HomeComponent},
    {path: 'nosotros', component: AboutComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '', pathMatch: 'full', redirectTo: 'inicio'},
    {path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];


