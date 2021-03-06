import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductsComponent } from './components/products/products.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ProyectComponent } from './components/proyect/proyect.component';


export const ROUTES: Routes = [
    {path: 'inicio', component: HomeComponent},
    {path: 'nosotros', component: AboutComponent},
    {path: 'productos', component: ProductsComponent},
    {path: 'proyectos', component: ProyectsComponent},
    {path: 'proyecto/:id', component: ProyectComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '', pathMatch: 'full', redirectTo: 'inicio'},
    {path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];


