
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line: typedef
  getJson(url: string) {
    return this.http.get(url);
  }
}

export interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  fecha: string;
  direccion: string;
}
