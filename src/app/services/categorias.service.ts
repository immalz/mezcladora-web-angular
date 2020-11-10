import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Categorias {

  private marcas: Categoria[] =
  [
    {
      titulo: 'Camiones',
      imagen: 'assets/images/tarjeta1.jpg',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi rerum eum odit quam dolores iure accusamus quo perspiciatis ipsam aliquid?'
    },
    {
      titulo: 'Nacional',
      imagen: 'assets/images/tarjeta2.jpg',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi rerum eum odit quam dolores iure accusamus quo perspiciatis ipsam aliquid?'
    },
    {
      titulo: 'Preparados',
      imagen: 'assets/images/tarjeta3.jpg',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi rerum eum odit quam dolores iure accusamus quo perspiciatis ipsam aliquid?'
    },
  ];

  private servicios: Categoria[] =
  [
    {
      titulo: 'Productos',
      imagen: 'assets/images/tarjeta4.webp',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi rerum eum odit quam dolores iure accusamus quo perspiciatis ipsam aliquid?'
    },
    {
      titulo: 'Bombeo de concreto',
      imagen: 'assets/images/tarjeta5.webp',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi rerum eum odit quam dolores iure accusamus quo perspiciatis ipsam aliquid?'
    },
    {
      titulo: 'Soporte Tecnico',
      imagen: 'assets/images/tarjeta6.webp',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi rerum eum odit quam dolores iure accusamus quo perspiciatis ipsam aliquid?'
    }
  ];

  constructor() {
    console.log('Servicio listo para usar!!');
  }

  getMarcas(): Categoria[] {
    return this.marcas;
  }

  getServicios(): Categoria[] {
    return this.servicios;
  }
}

export interface Categoria {
  titulo: string;
  imagen: string;
  texto: string;
  id?: number;
}
