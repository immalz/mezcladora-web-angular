import { Component, OnInit } from '@angular/core';
import { Categorias, Categoria } from '../../services/categorias.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  marcas: Categoria[] = [];
  servicios: Categoria[] = [];

  constructor(private _categoriaService: Categorias) { }

  ngOnInit(): void {
    this.marcas = this._categoriaService.getMarcas();
    this.servicios = this._categoriaService.getServicios();
    console.log(this.marcas);
  }
}
