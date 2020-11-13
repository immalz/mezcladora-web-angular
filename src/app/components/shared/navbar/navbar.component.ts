import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  mostrar = false;
  barras = true;

  toggle(): boolean {
    return (
      this.barras = !this.barras,
      this.mostrar = !this.mostrar
    );
  }
}
