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

  constructor(private categoriaService: Categorias) { }

  ngOnInit(): void {
    this.marcas = this.categoriaService.getMarcas();
    this.servicios = this.categoriaService.getServicios();
  }
}
