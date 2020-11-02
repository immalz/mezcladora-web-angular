import { Component, OnInit } from '@angular/core';
import { Categorias,Categoria } from '../../services/categorias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  marcas:Categoria[] = [];
  servicios:Categoria[] = [];

  constructor(private _categoriaService: Categorias) { }

  ngOnInit(): void {
    this.marcas = this._categoriaService.getMarcas();
    this.servicios = this._categoriaService.getServicios();
    console.log(this.marcas);
  }
  

}
