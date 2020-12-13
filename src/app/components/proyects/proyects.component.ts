import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import {ProyectosService, Proyecto} from '../../services/proyectos.service';
import { ScriptsService } from '../../services/scripts.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css', './galeria.css']
})
export class ProyectsComponent implements OnInit, OnDestroy{

  ListaProyectos: Proyecto;
  ListaProyecto: Proyecto;
  loading: boolean;

  constructor(private scriptService: ScriptsService, public ps: ProyectosService, private router: Router) {}

  ngOnInit(): void {
    this.loading = true;

    // Arreglo de Proyectos
    this.ps.getJson('assets/json/proyectos.json')
    .subscribe((res: any) => {
      this.ListaProyectos = res;
      // console.log('tamaño', this.ListaProyectos.length = 3);
    });

    this.ps.getJson('assets/json/proyecto.json')
    .subscribe((res: any) => {
      this.ListaProyecto = res;
      this.loading = false;
    });

    this.scriptService.Carga(['popup']);
  }
  trackByFn(index: number, item: Proyecto): number {
    return item.id;
  }

  verProyecto(idx: number): void {
    this.router.navigate(['/proyecto', idx]);
  }

  ngOnDestroy(): void {
  }
}
