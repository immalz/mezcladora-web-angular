import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Pipes
import { DomseguroPipe } from './pipes/domseguro.pipe';

// Servicios
import { Categorias } from './services/categorias.service';


// Rutas
import { ROUTES } from './app.routes';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AboutComponent } from './components/about/about.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { ProyectsComponent } from './components/proyects/proyects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactoComponent,
    AboutComponent,
    DomseguroPipe,
    LoadingComponent,
    FooterComponent,
    ProductsComponent,
    ProyectsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES, {useHash: true,  scrollPositionRestoration: 'enabled'} ),
    AppRoutingModule
  ],
  providers: [
    Categorias
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
