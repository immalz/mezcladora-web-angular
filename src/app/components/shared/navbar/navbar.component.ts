import { Component, OnInit } from '@angular/core';
import { ScriptsService } from '../../../services/scripts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit{

  mostrar = false;
  barras = true;
  constructor(private scriptService: ScriptsService) {}
  toggle(): boolean {
    return (
      this.barras = !this.barras,
      this.mostrar = !this.mostrar
    );
  }

  ngOnInit(): void {
    this.scriptService.Carga(['navbar']);
  }


}
